package com.consultadd.bookhub.dto;

import com.consultadd.bookhub.enums.Departments;
import com.consultadd.bookhub.enums.Role;
import jakarta.persistence.Column;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;
import jakarta.validation.constraints.Pattern;
@Data
public class RegisterRequest {
    @NotBlank(message = "Full name is required")

    private String fullName;
    private Role role;

    @Column(unique = true)
    @NotBlank(message = "Email is required")
    @Email(message = "Invalid email format")
    @Pattern(regexp = "^[A-Za-z0-9._%+-]+@consultadd\\.com$", message = "Email must end with @consultadd.com")
    private String email;

    @NotBlank(message = "Password is required")
    @Size(min = 6, message = "Password must be at least 6 characters")
    private String password;
    private Departments department;

}
