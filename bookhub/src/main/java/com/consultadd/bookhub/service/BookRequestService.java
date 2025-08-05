package com.consultadd.bookhub.service;

import com.consultadd.bookhub.dto.BookRequestDto;
import com.consultadd.bookhub.enums.RequestStatus;
import com.consultadd.bookhub.model.BookRequest;

import com.consultadd.bookhub.model.Employee;
import com.consultadd.bookhub.repository.BookRequestRepository;
import com.consultadd.bookhub.repository.EmployeeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BookRequestService {

    private final BookRequestRepository bookRequestRepository;
    private final EmployeeRepository employeeRepository;

    public BookRequest createRequest(BookRequestDto dto) {
        Employee employee = employeeRepository.findById(dto.getRequesterId())
                .orElseThrow(() -> new RuntimeException("Employee not found"));

        BookRequest request = BookRequest.builder()
                .title(dto.getTitle())
                .author(dto.getAuthor())
                .reason(dto.getReason())
                .requester(employee)
                .status(RequestStatus.PENDING)
                .build();

        return bookRequestRepository.save(request);
    }


    public List<BookRequest> getAllRequests() {
        return bookRequestRepository.findAll();
    }

    public List<BookRequest> getRequestsByEmployeeId(Long employeeId) {
        return bookRequestRepository.findByRequesterId(employeeId);
    }

    public BookRequest approveRequest(Long requestId) {
        BookRequest request = bookRequestRepository.findById(requestId)
                .orElseThrow(() -> new RuntimeException("Request not found"));
        request.setStatus(RequestStatus.APPROVED);
        return bookRequestRepository.save(request);
    }

    public BookRequest rejectRequest(Long requestId) {
        BookRequest request = bookRequestRepository.findById(requestId)
                .orElseThrow(() -> new RuntimeException("Request not found"));
        request.setStatus(RequestStatus.REJECTED);
        return bookRequestRepository.save(request);
    }

//    public BookRequest fulfillRequest(Long requestId) {
//        BookRequest request = bookRequestRepository.findById(requestId)
//                .orElseThrow(() -> new RuntimeException("Request not found"));
//        request.setStatus(RequestStatus.FULFILLED);
//        return bookRequestRepository.save(request);
//    }
}
