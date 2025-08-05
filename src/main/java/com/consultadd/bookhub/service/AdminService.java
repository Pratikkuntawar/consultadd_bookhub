package com.consultadd.bookhub.service;

import com.consultadd.bookhub.enums.Departments;
import com.consultadd.bookhub.enums.DonationStatus;
import com.consultadd.bookhub.model.*;
import com.consultadd.bookhub.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AdminService {

    private final EmployeeRepository employeeRepository;
    private final BookRepository bookRepository;
    private final DonationRepository donationRepository;

    public Employee approveSeller(Long id) {
        Employee seller = employeeRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Seller not found"));
        seller.setActive(true);
        return employeeRepository.save(seller);
    }

    public void rejectSeller(Long id) {
        employeeRepository.deleteById(id);
    }

    public Donation approveDonation(Long id) {
        Donation donation = donationRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Donation not found"));
        donation.setStatus(DonationStatus.APPROVED);
        return donationRepository.save(donation);
    }

    public Donation rejectDonation(Long id) {
        Donation donation = donationRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Donation not found"));
        donation.setStatus(DonationStatus.REJECTED);
        return donationRepository.save(donation);
    }

    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    public Employee getEmployeeById(Long id) {
        return employeeRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Employee not found"));
    }


    public long countBooks() {
        return bookRepository.count();
    }

    public long countEmployees() {
        return employeeRepository.count();
    }

    public Employee blockEmployee(Long id) {
        Employee emp = employeeRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Employee not found"));
        emp.setActive(false);
        return employeeRepository.save(emp);
    }

    public Employee unblockEmployee(Long id) {
        Employee emp = employeeRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Employee not found"));
        emp.setActive(true);
        return employeeRepository.save(emp);
    }

}
