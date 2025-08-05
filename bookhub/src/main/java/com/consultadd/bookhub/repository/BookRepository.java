package com.consultadd.bookhub.repository;

import com.consultadd.bookhub.enums.Departments;
import com.consultadd.bookhub.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
    List<Book> findByDepartment(Departments department);
    List<Book> findByTagsContaining(String tag);
}
