package com.consultadd.bookhub.dto;

import com.consultadd.bookhub.enums.Departments;
import com.consultadd.bookhub.enums.Role;
import lombok.Data;

@Data
public class RegisterRequest {
    private String fullName;
    private Role role;
    private String email;
    private String password;
    private Departments department;

}
