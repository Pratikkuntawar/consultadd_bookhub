package com.consultadd.bookhub.controllers;

import com.consultadd.bookhub.dto.RegisterRequest;
import com.consultadd.bookhub.enums.Role;
import com.consultadd.bookhub.model.Employee;
import com.consultadd.bookhub.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import com.consultadd.bookhub.service.AdminService;

@RestController
@RequestMapping("/consultadd/admin")
@RequiredArgsConstructor
public class AdminController {

    private final AuthService authService;
    private final AdminService adminService;

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
    @PreAuthorize("hasRole('ADMIN')")
    @PatchMapping("/block/{id}")
    public ResponseEntity<Employee> blockEmployee(@PathVariable Long id) {
        Employee updated = adminService.blockEmployee(id);
        return ResponseEntity.ok(updated);
    }
    @PreAuthorize("hasRole('ADMIN')")
    @PatchMapping("/unblock/{id}")
    public ResponseEntity<Employee> unblockEmployee(@PathVariable Long id) {
        Employee updated = adminService.unblockEmployee(id);
        return ResponseEntity.ok(updated);
    }


    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/employees")
    public ResponseEntity<?> getAllEmployees() {
        return ResponseEntity.ok(adminService.getAllEmployees());
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/employee/{id}")
    public ResponseEntity<?> getEmployeeById(@PathVariable Long id) {
        return ResponseEntity.ok(adminService.getEmployeeById(id));
    }

}
