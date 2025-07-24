package com.consultadd.bookhub.repository;

import com.consultadd.bookhub.model.BookRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookRequestRepository extends JpaRepository<BookRequest, Long> {
    List<BookRequest> findByRequesterId(Long employeeId);
}
