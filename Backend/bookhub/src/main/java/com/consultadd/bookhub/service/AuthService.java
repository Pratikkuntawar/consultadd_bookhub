package com.consultadd.bookhub.service;

import com.consultadd.bookhub.Exception.ResourceNotFoundException;
//import com.consultadd.bookhub.config.JwtTokenProvider;
import com.consultadd.bookhub.dto.LoginRequest;
import com.consultadd.bookhub.dto.LoginResponse;
import com.consultadd.bookhub.dto.RegisterRequest;

import com.consultadd.bookhub.model.Employee;
import com.consultadd.bookhub.repository.EmployeeRepository;
//import com.consultadd.bookhub.service.AuthService;
import com.consultadd.bookhub.security.JwtTokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final EmployeeRepository employeeRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtTokenProvider jwtTokenProvider;

    public Employee register(RegisterRequest request) {
        Employee employee = Employee.builder()
                .fullName(request.getFullName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(request.getRole())
                .department(request.getDepartment())
                .build();

        return employeeRepository.save(employee);
    }

    public LoginResponse login(LoginRequest request) {
        var authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword())
        );
        SecurityContextHolder.getContext().setAuthentication(authentication);

        Employee employee = employeeRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new ResourceNotFoundException("Employee not found"));

        String token = jwtTokenProvider.generateToken(employee.getEmail(), employee.getRole());

        return new LoginResponse(token, employee.getFullName(), employee.getRole(), employee.getId());
    }


    public Employee getCurrentUser() {
        String email = jwtTokenProvider.getCurrentUserEmail();
        return employeeRepository.findByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));
    }
}
