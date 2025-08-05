package com.consultadd.bookhub.controllers;

import com.consultadd.bookhub.dto.BookRequestDto;
import com.consultadd.bookhub.model.BookRequest;
import com.consultadd.bookhub.service.BookRequestService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/book-requests")
@RequiredArgsConstructor
public class BookRequestController {

    private final BookRequestService bookRequestService;

    @PostMapping()
    public ResponseEntity<BookRequest> createRequest(@RequestBody BookRequestDto dto) {
        BookRequest savedRequest = bookRequestService.createRequest(dto);
        return new ResponseEntity<>(savedRequest, HttpStatus.CREATED);
    }




    @PreAuthorize("hasRole('ADMIN') or hasRole('SELLER')")
    @GetMapping("/all")
    public ResponseEntity<List<BookRequest>> getAllRequests() {
        return ResponseEntity.ok(bookRequestService.getAllRequests());
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/employee/{employeeId}")
    public ResponseEntity<List<BookRequest>> getByEmployee(@PathVariable Long employeeId) {
        return ResponseEntity.ok(bookRequestService.getRequestsByEmployeeId(employeeId));
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/approve/{requestId}")
    public ResponseEntity<BookRequest> approveRequest(@PathVariable Long requestId) {
        return ResponseEntity.ok(bookRequestService.approveRequest(requestId));
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/reject/{requestId}")
    public ResponseEntity<BookRequest> rejectRequest(@PathVariable Long requestId) {
        return ResponseEntity.ok(bookRequestService.rejectRequest(requestId));
    }
}
