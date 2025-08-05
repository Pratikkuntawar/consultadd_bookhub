package com.consultadd.bookhub.controllers;

import com.consultadd.bookhub.dto.BookCreateRequestDto;
import com.consultadd.bookhub.dto.BookRequestDto;
import com.consultadd.bookhub.dto.BookResponse;
import com.consultadd.bookhub.enums.BookType;
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

    @PreAuthorize("hasRole('SELLER')")
    @PostMapping
    public ResponseEntity<BookResponse> addBook(@RequestBody BookCreateRequestDto request) {
        Employee currentSeller = authService.getCurrentUser();
        return ResponseEntity.ok(bookService.addBook(request, currentSeller));
    }

    @PreAuthorize("hasRole('SELLER')")
    @PutMapping("/{id}")
    public ResponseEntity<BookResponse> updateBook(@PathVariable Long id, @RequestBody BookCreateRequestDto request) {
        Employee currentSeller = authService.getCurrentUser();
        return ResponseEntity.ok(bookService.updateBook(id, request, currentSeller));
    }

    @PreAuthorize("hasRole('SELLER')")
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteBook(@PathVariable Long id) {
        Employee currentSeller = authService.getCurrentUser();
        bookService.deleteBook(id, currentSeller);
        return ResponseEntity.ok("Book deleted successfully");
    }

//    @GetMapping("/departments/{department}")
//    public ResponseEntity<List<BookResponse>> getBooksByDepartment(@PathVariable Departments department) {
//        return ResponseEntity.ok(bookService.getBooksByDepartment(department));
//    }

    @PreAuthorize("hasRole('BUYER')")
    @GetMapping("/browse/department/{department}")
    public ResponseEntity<List<BookResponse>> getBooksByDepartment(@PathVariable Departments department) {
        return ResponseEntity.ok(bookService.getBooksByDepartment(department));
    }

    @PreAuthorize("hasRole('BUYER')")
    @GetMapping("/browse/bookType/{bookType}")
    public ResponseEntity<List<BookResponse>> getBooksByBookType(@PathVariable BookType bookType) {
        return ResponseEntity.ok(bookService.getBooksByBookType(bookType));
    }

    @PreAuthorize("hasRole('BUYER')")
    @GetMapping("/browse/{title}")
    public ResponseEntity<List<BookResponse>> searchBooksByTitle(@PathVariable String title) {
        return ResponseEntity.ok(bookService.searchBooksByTitle(title));
    }

}
