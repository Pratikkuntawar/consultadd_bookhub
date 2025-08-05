package com.consultadd.bookhub.dto;

import com.consultadd.bookhub.enums.Role;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class LoginResponse {
    private String token;
    private String fullName;
    private Role role;
    private Long employeeId;

}
