package com.consultadd.bookhub.controllers;

import com.consultadd.bookhub.dto.BookRequest;
import com.consultadd.bookhub.dto.BookResponse;
import com.consultadd.bookhub.enums.Departments;
import com.consultadd.bookhub.model.Employee;
import com.consultadd.bookhub.service.AuthService;
import com.consultadd.bookhub.service.BookService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/consultadd/books")
@RequiredArgsConstructor
public class BookController {

    private final BookService bookService;
    private final AuthService authService;

    @GetMapping
    public ResponseEntity<List<BookResponse>> getAllBooks() {
        return ResponseEntity.ok(bookService.getAllBooks());
    }

    @GetMapping("/{id}")
    public ResponseEntity<BookResponse> getBookById(@PathVariable Long id) {
        return ResponseEntity.ok(bookService.getBookById(id));
    }

    @PreAuthorize("hasAuthority('SELLER')")
    @PostMapping
    public ResponseEntity<BookResponse> addBook(@RequestBody BookRequest request) {
        Employee currentSeller = authService.getCurrentUser();
        return ResponseEntity.ok(bookService.addBook(request, currentSeller));
    }

    @PreAuthorize("hasAuthority('SELLER')")
    @PutMapping("/{id}")
    public ResponseEntity<BookResponse> updateBook(@PathVariable Long id, @RequestBody BookRequest request) {
        Employee currentSeller = authService.getCurrentUser();
        return ResponseEntity.ok(bookService.updateBook(id, request, currentSeller));
    }

    @PreAuthorize("hasAuthority('SELLER')")
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteBook(@PathVariable Long id) {
        Employee currentSeller = authService.getCurrentUser();
        bookService.deleteBook(id, currentSeller);
        return ResponseEntity.ok("Book deleted successfully");
    }

    @GetMapping("/departments/{department}")
    public ResponseEntity<List<BookResponse>> getBooksByDepartment(@PathVariable Departments department) {
        return ResponseEntity.ok(bookService.getBooksByDepartment(department));
    }
}
