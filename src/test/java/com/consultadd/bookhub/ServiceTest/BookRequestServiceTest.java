package com.consultadd.bookhub.ServiceTest;

import com.consultadd.bookhub.dto.BookRequestDto;
import com.consultadd.bookhub.enums.RequestStatus;
import com.consultadd.bookhub.model.BookRequest;
import com.consultadd.bookhub.model.Employee;
import com.consultadd.bookhub.repository.BookRequestRepository;
import com.consultadd.bookhub.repository.EmployeeRepository;
import com.consultadd.bookhub.service.BookRequestService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentCaptor;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class BookRequestServiceTest {

    private BookRequestRepository bookRequestRepository;
    private EmployeeRepository employeeRepository;
    private BookRequestService bookRequestService;

    @BeforeEach
    public void setup() {
        bookRequestRepository = mock(BookRequestRepository.class);
        employeeRepository = mock(EmployeeRepository.class);
        bookRequestService = new BookRequestService(bookRequestRepository, employeeRepository);
    }

    @Test
    public void testCreateRequest() {
        BookRequestDto dto = BookRequestDto.builder()
                .title("Effective Java")
                .author("Joshua Bloch")
                .reason("Deep dive into Java best practices")
                .requesterId(1L)
                .build();

        Employee employee = new Employee();
        employee.setId(1L);

        when(employeeRepository.findById(1L)).thenReturn(Optional.of(employee));

        ArgumentCaptor<BookRequest> requestCaptor = ArgumentCaptor.forClass(BookRequest.class);
        when(bookRequestRepository.save(any(BookRequest.class))).thenAnswer(inv -> inv.getArgument(0));

        BookRequest result = bookRequestService.createRequest(dto);

        verify(bookRequestRepository).save(requestCaptor.capture());
        BookRequest captured = requestCaptor.getValue();

        assertEquals("Effective Java", captured.getTitle());
        assertEquals("Joshua Bloch", captured.getAuthor());
        assertEquals(RequestStatus.PENDING, captured.getStatus());
        assertEquals(employee, captured.getRequester());
        assertEquals("Effective Java", result.getTitle());
    }

    @Test
    public void testGetAllRequests() {
        BookRequest br1 = new BookRequest();
        BookRequest br2 = new BookRequest();

        when(bookRequestRepository.findAll()).thenReturn(Arrays.asList(br1, br2));

        List<BookRequest> result = bookRequestService.getAllRequests();

        assertEquals(2, result.size());
        verify(bookRequestRepository, times(1)).findAll();
    }

    @Test
    public void testGetRequestsByEmployeeId() {
        BookRequest br1 = new BookRequest();
        BookRequest br2 = new BookRequest();

        when(bookRequestRepository.findByRequesterId(1L)).thenReturn(Arrays.asList(br1, br2));

        List<BookRequest> result = bookRequestService.getRequestsByEmployeeId(1L);

        assertEquals(2, result.size());
        verify(bookRequestRepository).findByRequesterId(1L);
    }

    @Test
    public void testApproveRequest() {
        BookRequest request = new BookRequest();
        request.setStatus(RequestStatus.PENDING);

        when(bookRequestRepository.findById(10L)).thenReturn(Optional.of(request));
        when(bookRequestRepository.save(any(BookRequest.class))).thenReturn(request);

        BookRequest result = bookRequestService.approveRequest(10L);

        assertEquals(RequestStatus.APPROVED, result.getStatus());
        verify(bookRequestRepository).save(request);
    }

    @Test
    public void testRejectRequest() {
        BookRequest request = new BookRequest();
        request.setStatus(RequestStatus.PENDING);

        when(bookRequestRepository.findById(20L)).thenReturn(Optional.of(request));
        when(bookRequestRepository.save(any(BookRequest.class))).thenReturn(request);

        BookRequest result = bookRequestService.rejectRequest(20L);

        assertEquals(RequestStatus.REJECTED, result.getStatus());
        verify(bookRequestRepository).save(request);
    }

    @Test
    public void testCreateRequestWithInvalidEmployee_shouldThrowException() {
        BookRequestDto dto = BookRequestDto.builder()
                .title("Book")
                .author("Author")
                .reason("Need it")
                .requesterId(99L)
                .build();

        when(employeeRepository.findById(99L)).thenReturn(Optional.empty());

        assertThrows(RuntimeException.class, () -> bookRequestService.createRequest(dto));
    }
}
