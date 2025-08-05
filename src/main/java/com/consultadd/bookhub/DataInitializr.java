package com.consultadd.bookhub;
import com.consultadd.bookhub.enums.Role;
import com.consultadd.bookhub.model.Employee;
import com.consultadd.bookhub.repository.EmployeeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@RequiredArgsConstructor
public class DataInitializr {

    private final PasswordEncoder passwordEncoder;
    private final EmployeeRepository employeeRepository;

    @Bean
    public CommandLineRunner loadDefaultUsers() {
        return args -> {

            String adminEmail = "admin@consultadd.com";
            if (employeeRepository.findByEmail(adminEmail).isEmpty()) {
                Employee admin = new Employee();
                admin.setFullName("Default Admin");
                admin.setEmail(adminEmail);
                admin.setPassword(passwordEncoder.encode("admin123"));
                admin.setRole(Role.ADMIN);
                admin.setActive(true);

                employeeRepository.save(admin);
                System.out.println("✅ Admin user created.");

            } else {
                System.out.println("ℹ️ Admin already exists.");
            }
        };
    }
}
