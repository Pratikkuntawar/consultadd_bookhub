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

    public Book addBook(Book book) {
        return bookRepository.save(book);
    }

    public Book editBook(Long id, Book updatedBook) {
        Book book = bookRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Book not found"));

        book.setTitle(updatedBook.getTitle());
        book.setAuthor(updatedBook.getAuthor());
        book.setDepartment(updatedBook.getDepartment());

        return bookRepository.save(book);
    }

    public void deleteBook(Long id) {
        bookRepository.deleteById(id);
    }

    public Book assignDepartment(Long bookId, Departments department) {
        Book book = bookRepository.findById(bookId)
                .orElseThrow(() -> new RuntimeException("Book not found"));
        book.setDepartment(department);
        return bookRepository.save(book);
    }

    public long countBooks() {
        return bookRepository.count();
    }

    public long countEmployees() {
        return employeeRepository.count();
    }

    public List<Book> getBooksByDepartment(Departments dept) {
        return bookRepository.findByDepartment(dept);
    }
}
