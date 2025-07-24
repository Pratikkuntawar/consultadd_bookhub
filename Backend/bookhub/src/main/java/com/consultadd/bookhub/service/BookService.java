package com.consultadd.bookhub.service;

import com.consultadd.bookhub.dto.BookRequest;
import com.consultadd.bookhub.dto.BookResponse;
import com.consultadd.bookhub.enums.Departments;
import com.consultadd.bookhub.model.Book;
import com.consultadd.bookhub.model.Employee;
import com.consultadd.bookhub.repository.BookRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class BookService {

    private final BookRepository bookRepository;

    public BookResponse addBook(BookRequest request, Employee seller) {
        Book book = new Book();
        book.setTitle(request.getTitle());
        book.setAuthor(request.getAuthor());
        book.setDescription(request.getDescription());
        book.setDepartment(request.getDepartment());
        book.setPdfUrl(request.getPdfUrl());
        book.setSeller(seller);

        Book saved = bookRepository.save(book);
        return toResponse(saved);
    }

    public List<BookResponse> getAllBooks() {
        return bookRepository.findAll()
                .stream()
                .map(this::toResponse)
                .collect(Collectors.toList());
    }

    public BookResponse getBookById(Long id) {
        Book book = bookRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Book not found"));
        return toResponse(book);
    }

    public List<BookResponse> getBooksByDepartment(Departments department) {
        return bookRepository.findByDepartment(department)
                .stream()
                .map(this::toResponse)
                .collect(Collectors.toList());
    }

    public BookResponse updateBook(Long id, BookRequest request, Employee seller) {
        Book book = bookRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Book not found"));

        if (!book.getSeller().getId().equals(seller.getId())) {
            throw new RuntimeException("Unauthorized: Not your book");
        }

        book.setTitle(request.getTitle());
        book.setAuthor(request.getAuthor());
        book.setDescription(request.getDescription());
        book.setDepartment(request.getDepartment());
        book.setPdfUrl(request.getPdfUrl());

        return toResponse(bookRepository.save(book));
    }

    public void deleteBook(Long id, Employee seller) {
        Book book = bookRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Book not found"));

        if (!book.getSeller().getId().equals(seller.getId())) {
            throw new RuntimeException("Unauthorized: Not your book");
        }

        bookRepository.delete(book);
    }

    private BookResponse toResponse(Book book) {
        return BookResponse.builder()
                .id(book.getId())
                .title(book.getTitle())
                .author(book.getAuthor())
                .description(book.getDescription())
                .pdfUrl(book.getPdfUrl())
                .department(book.getDepartment())
                .sellerId(book.getSeller().getId())
                .sellerName(book.getSeller().getFullName())
                .build();
    }
}
