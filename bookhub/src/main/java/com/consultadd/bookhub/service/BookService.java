package com.consultadd.bookhub.service;

import com.consultadd.bookhub.dto.BookCreateRequestDto;
import com.consultadd.bookhub.dto.BookRequestDto;
import com.consultadd.bookhub.dto.BookResponse;
import com.consultadd.bookhub.enums.Departments;
import com.consultadd.bookhub.model.Book;
import com.consultadd.bookhub.model.Employee;
import com.consultadd.bookhub.repository.BookRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class BookService {

    private final BookRepository bookRepository;

    public BookResponse addBook(BookCreateRequestDto request, Employee seller) {
        Book book = Book.builder()
                .title(request.getTitle())
                .author(request.getAuthor())
//                .tags(request.getTags())
                .bookType(request.getBookType())
                .department(request.getDepartment())
                .pdfUrl(request.getPdfUrl())
                .description(request.getDescription())
//                .location(request.getLocation())
                .seller(seller)
                .isApproved(false)
//                .isDonated(false)
                .build();

        Book saved = bookRepository.save(book);

        return BookResponse.builder()
                .id(saved.getId())
                .title(saved.getTitle())
                .author(saved.getAuthor())
                .description(saved.getDescription())
                .department(saved.getDepartment())
                .pdfUrl(saved.getPdfUrl())
                .sellerId(saved.getSeller().getId())
                .sellerName(saved.getSeller().getFullName())  // assumes Employee has getFullName()
                .build();
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

    public BookResponse updateBook(Long id, BookCreateRequestDto request, Employee seller) {
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
