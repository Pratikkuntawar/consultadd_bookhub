package com.consultadd.bookhub.service;

import com.consultadd.bookhub.model.BookRequest;
import com.consultadd.bookhub.repository.BookRequestRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BookRequestService {

    private final BookRequestRepository bookRequestRepository;

    public BookRequest createRequest(BookRequest request) {
        return bookRequestRepository.save(request);
    }

    public List<BookRequest> getAllRequests() {
        return bookRequestRepository.findAll();
    }

    public List<BookRequest> getRequestsByEmployeeId(Long employeeId) {
        return bookRequestRepository.findByRequesterId(employeeId);
    }

    public BookRequest fulfillRequest(Long requestId) {
        BookRequest request = bookRequestRepository.findById(requestId)
                .orElseThrow(() -> new RuntimeException("Request not found"));
        request.setFulfilled(true);
        return bookRequestRepository.save(request);
    }
}
