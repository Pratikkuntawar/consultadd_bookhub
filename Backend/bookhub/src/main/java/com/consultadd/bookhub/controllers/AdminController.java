package com.consultadd.bookhub.controllers;

import com.consultadd.bookhub.dto.RegisterRequest;
import com.consultadd.bookhub.enums.Role;
import com.consultadd.bookhub.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/consultadd/admin")
@RequiredArgsConstructor
public class AdminController {

    private final AuthService authService;

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/create-admin")
    public ResponseEntity<?> createAdmin(@RequestBody RegisterRequest request) {
        if (request.getRole() != Role.ADMIN) {
            return ResponseEntity
                    .badRequest()
                    .body("This endpoint is only for creating ADMIN users.");
        }

        return ResponseEntity.ok(authService.register(request));
    }
}
