package com.consultadd.bookhub.ConfigTest;

import com.consultadd.bookhub.config.JwtAuthFilter;
import com.consultadd.bookhub.model.Employee;
import com.consultadd.bookhub.enums.Role;
import com.consultadd.bookhub.repository.EmployeeRepository;
import com.consultadd.bookhub.security.JwtTokenProvider;
import jakarta.servlet.FilterChain;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.*;
import org.springframework.mock.web.MockHttpServletRequest;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.security.core.context.SecurityContextHolder;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class JwtAuthFilterTest {

    @Mock
    private JwtTokenProvider jwtTokenProvider;

    @Mock
    private EmployeeRepository employeeRepository;

    @Mock
    private FilterChain filterChain;

    @InjectMocks
    private JwtAuthFilter jwtAuthFilter;

    private MockHttpServletRequest request;
    private MockHttpServletResponse response;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        request = new MockHttpServletRequest();
        response = new MockHttpServletResponse();
        SecurityContextHolder.clearContext(); // Clear context before each test
    }

    @Test
    void testDoFilter_NoAuthHeader() throws Exception {
        // No "Authorization" header
        jwtAuthFilter.doFilterInternal(request, response, filterChain);

        verify(filterChain, times(1)).doFilter(request, response);
        assertNull(SecurityContextHolder.getContext().getAuthentication());
    }

    @Test
    void testDoFilter_InvalidTokenOrUserNotFound() throws Exception {
        request.addHeader("Authorization", "Bearer dummy.token.here");
        when(jwtTokenProvider.getEmailFromToken("dummy.token.here")).thenReturn("user@example.com");
        when(employeeRepository.findByEmail("user@example.com")).thenReturn(Optional.empty());

        jwtAuthFilter.doFilterInternal(request, response, filterChain);

        verify(filterChain, times(1)).doFilter(request, response);
        assertNull(SecurityContextHolder.getContext().getAuthentication());
    }

    @Test
    void testDoFilter_ValidToken() throws Exception {
        request.addHeader("Authorization", "Bearer valid.token.here");

        String email = "valid@example.com";

        Employee employee = Employee.builder()
                .id(1L)
                .email(email)
                .role(Role.BUYER)
                .build();

        when(jwtTokenProvider.getEmailFromToken("valid.token.here")).thenReturn(email);
        when(employeeRepository.findByEmail(email)).thenReturn(Optional.of(employee));
        when(jwtTokenProvider.validateToken("valid.token.here", email)).thenReturn(true);

        jwtAuthFilter.doFilterInternal(request, response, filterChain);

        assertNotNull(SecurityContextHolder.getContext().getAuthentication());
        assertEquals(email, ((Employee) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getEmail());
        assertEquals("ROLE_BUYER", SecurityContextHolder.getContext().getAuthentication().getAuthorities().iterator().next().getAuthority());

        verify(filterChain, times(1)).doFilter(request, response);
    }
}
