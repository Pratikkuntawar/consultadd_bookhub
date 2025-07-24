package com.consultadd.bookhub.controllers;

import com.consultadd.bookhub.dto.LoginRequest;
import com.consultadd.bookhub.dto.LoginResponse;
import com.consultadd.bookhub.dto.RegisterRequest;
import com.consultadd.bookhub.enums.Role;
import com.consultadd.bookhub.model.Employee;
import com.consultadd.bookhub.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/consultadd/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest request) {
        if (request.getRole() != Role.BUYER && request.getRole() != Role.SELLER) {
            return ResponseEntity
                    .status(HttpStatus.FORBIDDEN)
                    .body("Only BUYER and SELLER roles are allowed for signup");
        }

        return ResponseEntity.ok(authService.register(request));
    }


    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest request) {
        LoginResponse response = authService.login(request);
        return ResponseEntity.ok(response);
    }
}
