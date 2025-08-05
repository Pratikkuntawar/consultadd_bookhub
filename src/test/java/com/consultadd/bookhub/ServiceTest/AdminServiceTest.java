package com.consultadd.bookhub.ServiceTest;

import com.consultadd.bookhub.enums.DonationStatus;
import com.consultadd.bookhub.model.Donation;
import com.consultadd.bookhub.model.Employee;
import com.consultadd.bookhub.repository.BookRepository;
import com.consultadd.bookhub.repository.DonationRepository;
import com.consultadd.bookhub.repository.EmployeeRepository;
import com.consultadd.bookhub.service.AdminService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.*;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class AdminServiceTest {

    @Mock
    private EmployeeRepository employeeRepository;

    @Mock
    private BookRepository bookRepository;

    @Mock
    private DonationRepository donationRepository;

    @InjectMocks
    private AdminService adminService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }


    @Test
    void testApproveSeller() {
        Employee emp = new Employee();
        emp.setId(1L);
        emp.setActive(false);

        when(employeeRepository.findById(1L)).thenReturn(Optional.of(emp));
        when(employeeRepository.save(any(Employee.class))).thenReturn(emp);

        Employee result = adminService.approveSeller(1L);

        assertTrue(result.isActive());
        verify(employeeRepository).save(emp);
    }


    @Test
    void testRejectSeller() {
        adminService.rejectSeller(1L);
        verify(employeeRepository).deleteById(1L);
    }


    @Test
    void testApproveDonation() {
        Donation donation = new Donation();
        donation.setId(1L);
        donation.setStatus(DonationStatus.PENDING);

        when(donationRepository.findById(1L)).thenReturn(Optional.of(donation));
        when(donationRepository.save(any(Donation.class))).thenReturn(donation);

        Donation result = adminService.approveDonation(1L);

        assertEquals(DonationStatus.APPROVED, result.getStatus());
        verify(donationRepository).save(donation);
    }


    @Test
    void testRejectDonation() {
        Donation donation = new Donation();
        donation.setId(1L);
        donation.setStatus(DonationStatus.PENDING);

        when(donationRepository.findById(1L)).thenReturn(Optional.of(donation));
        when(donationRepository.save(any(Donation.class))).thenReturn(donation);

        Donation result = adminService.rejectDonation(1L);

        assertEquals(DonationStatus.REJECTED, result.getStatus());
        verify(donationRepository).save(donation);
    }


    @Test
    void testGetAllEmployees() {
        Employee emp1 = new Employee();
        Employee emp2 = new Employee();
        List<Employee> employeeList = Arrays.asList(emp1, emp2);

        when(employeeRepository.findAll()).thenReturn(employeeList);

        List<Employee> result = adminService.getAllEmployees();

        assertEquals(2, result.size());
        verify(employeeRepository).findAll();
    }


    @Test
    void testGetEmployeeById() {
        Employee emp = new Employee();
        emp.setId(1L);

        when(employeeRepository.findById(1L)).thenReturn(Optional.of(emp));

        Employee result = adminService.getEmployeeById(1L);

        assertEquals(1L, result.getId());
        verify(employeeRepository).findById(1L);
    }


    @Test
    void testCountBooks() {
        when(bookRepository.count()).thenReturn(5L);
        assertEquals(5L, adminService.countBooks());
    }


    @Test
    void testCountEmployees() {
        when(employeeRepository.count()).thenReturn(10L);
        assertEquals(10L, adminService.countEmployees());
    }


    @Test
    void testBlockEmployee() {
        Employee emp = new Employee();
        emp.setId(1L);
        emp.setActive(true);

        when(employeeRepository.findById(1L)).thenReturn(Optional.of(emp));
        when(employeeRepository.save(any(Employee.class))).thenReturn(emp);

        Employee result = adminService.blockEmployee(1L);

        assertFalse(result.isActive());
        verify(employeeRepository).save(emp);
    }


    @Test
    void testUnblockEmployee() {
        Employee emp = new Employee();
        emp.setId(1L);
        emp.setActive(false);

        when(employeeRepository.findById(1L)).thenReturn(Optional.of(emp));
        when(employeeRepository.save(any(Employee.class))).thenReturn(emp);

        Employee result = adminService.unblockEmployee(1L);

        assertTrue(result.isActive());
        verify(employeeRepository).save(emp);
    }

}
