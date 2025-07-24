package com.consultadd.bookhub.controllers;

import com.consultadd.bookhub.model.BookRequest;
import com.consultadd.bookhub.service.BookRequestService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/book-requests")
@RequiredArgsConstructor
public class BookRequestController {

    private final BookRequestService bookRequestService;

    @PostMapping("/create")
    public ResponseEntity<BookRequest> createRequest(@RequestBody BookRequest request) {
        return ResponseEntity.ok(bookRequestService.createRequest(request));
    }

    @GetMapping("/all")
    public ResponseEntity<List<BookRequest>> getAllRequests() {
        return ResponseEntity.ok(bookRequestService.getAllRequests());
    }

    @GetMapping("/employee/{employeeId}")
    public ResponseEntity<List<BookRequest>> getByEmployee(@PathVariable Long employeeId) {
        return ResponseEntity.ok(bookRequestService.getRequestsByEmployeeId(employeeId));
    }

    @PutMapping("/fulfill/{requestId}")
    public ResponseEntity<BookRequest> fulfillRequest(@PathVariable Long requestId) {
        return ResponseEntity.ok(bookRequestService.fulfillRequest(requestId));
    }
}
