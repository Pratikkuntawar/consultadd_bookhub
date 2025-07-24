package com.consultadd.bookhub.repository;

import com.consultadd.bookhub.model.RatingReview;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RatingRepository extends JpaRepository<RatingReview, Long> {
    List<RatingReview> findByBookId(Long bookId);
}
