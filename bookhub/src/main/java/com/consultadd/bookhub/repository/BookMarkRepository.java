package com.consultadd.bookhub.repository;

import com.consultadd.bookhub.model.Bookmark;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface BookMarkRepository extends JpaRepository<Bookmark, Long> {
    List<Bookmark> findByEmployeeId(Long employeeId);
    Optional<Bookmark> findByEmployeeIdAndBookId(Long empId, Long bookId);
}
