package com.consultadd.bookhub.ServiceTest;

import com.consultadd.bookhub.dto.LoginRequest;
import com.consultadd.bookhub.dto.LoginResponse;
import com.consultadd.bookhub.dto.RegisterRequest;
import com.consultadd.bookhub.enums.Departments;
import com.consultadd.bookhub.enums.Role;
import com.consultadd.bookhub.model.Employee;
import com.consultadd.bookhub.repository.EmployeeRepository;
import com.consultadd.bookhub.security.JwtTokenProvider;
import com.consultadd.bookhub.service.AuthService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.*;
import com.consultadd.bookhub.Exception.ResourceNotFoundException;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class AuthServiceTest {

    @Mock
    private EmployeeRepository employeeRepository;

    @Mock
    private PasswordEncoder passwordEncoder;

    @Mock
    private AuthenticationManager authenticationManager;

    @Mock
    private JwtTokenProvider jwtTokenProvider;

    @InjectMocks
    private AuthService authService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }


    @Test
    void testRegisterSuccess() {
        RegisterRequest request = RegisterRequest.builder()
                .fullName("John Doe")
                .email("john@example.com")
                .password("password")
                .role(Role.BUYER)
                .department(Departments.CODING)
                .build();

        when(employeeRepository.findByEmail("john@example.com")).thenReturn(Optional.empty());
        when(passwordEncoder.encode("password")).thenReturn("encodedPassword");

        Employee savedEmployee = Employee.builder()
                .id(1L)
                .fullName("John Doe")
                .email("john@example.com")
                .password("encodedPassword")
                .role(Role.BUYER)
                .department(Departments.CODING)
                .isActive(true)
                .build();

        when(employeeRepository.save(any(Employee.class))).thenReturn(savedEmployee);

        Employee result = authService.register(request);

        assertEquals("John Doe", result.getFullName());
        assertEquals("encodedPassword", result.getPassword());
        verify(employeeRepository).save(any(Employee.class));
    }

    @Test
    void testRegisterDuplicateEmail() {
        RegisterRequest request = RegisterRequest.builder()
                .email("john@example.com")
                .build();

        when(employeeRepository.findByEmail("john@example.com")).thenReturn(Optional.of(new Employee()));

        RuntimeException exception = assertThrows(RuntimeException.class, () -> {
            authService.register(request);
        });

        assertEquals("Email is already registered.", exception.getMessage());
    }


    @Test
    void testLoginSuccess() {
        LoginRequest request = new LoginRequest("john@example.com", "password");

        Authentication mockAuth = mock(Authentication.class);

        when(authenticationManager.authenticate(any(UsernamePasswordAuthenticationToken.class)))
                .thenReturn(mockAuth);

        Employee emp = Employee.builder()
                .id(1L)
                .fullName("John Doe")
                .email("john@example.com")
                .role(Role.BUYER)
                .build();

        when(employeeRepository.findByEmail("john@example.com")).thenReturn(Optional.of(emp));
        when(jwtTokenProvider.generateToken("john@example.com", Role.BUYER)).thenReturn("mock-jwt");

        LoginResponse response = authService.login(request);

        assertEquals("mock-jwt", response.getToken());
        assertEquals("John Doe", response.getFullName());
        assertEquals(Role.BUYER, response.getRole());
        assertEquals(1L, response.getEmployeeId());
    }

    @Test
    void testLoginUserNotFound() {
        LoginRequest request = new LoginRequest("nonexistent@example.com", "pass");

        Authentication mockAuth = mock(Authentication.class);
        when(authenticationManager.authenticate(any())).thenReturn(mockAuth);
        when(employeeRepository.findByEmail("nonexistent@example.com")).thenReturn(Optional.empty());

        assertThrows(ResourceNotFoundException.class, () -> authService.login(request));
    }


    @Test
    void testGetCurrentUserSuccess() {
        when(jwtTokenProvider.getCurrentUserEmail()).thenReturn("john@example.com");

        Employee emp = new Employee();
        emp.setEmail("john@example.com");

        when(employeeRepository.findByEmail("john@example.com")).thenReturn(Optional.of(emp));

        Employee result = authService.getCurrentUser();

        assertEquals("john@example.com", result.getEmail());
    }

    @Test
    void testGetCurrentUserNotFound() {
        when(jwtTokenProvider.getCurrentUserEmail()).thenReturn("notfound@example.com");
        when(employeeRepository.findByEmail("notfound@example.com")).thenReturn(Optional.empty());

        assertThrows(ResourceNotFoundException.class, () -> authService.getCurrentUser());
    }


    @Test
    void testGetCurrentEmployeeSuccess() {
        Employee emp = new Employee();
        emp.setEmail("john@example.com");

        Authentication auth = mock(Authentication.class);
        when(auth.getPrincipal()).thenReturn(emp);
        SecurityContextHolder.getContext().setAuthentication(auth);

        Employee result = authService.getCurrentEmployee();
        assertEquals("john@example.com", result.getEmail());
    }

    @Test
    void testGetCurrentEmployeeNoUser() {
        Authentication auth = mock(Authentication.class);
        when(auth.getPrincipal()).thenReturn("anonymousUser");
        SecurityContextHolder.getContext().setAuthentication(auth);

        assertThrows(RuntimeException.class, () -> authService.getCurrentEmployee());
    }
}
