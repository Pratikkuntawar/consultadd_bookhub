package com.consultadd.bookhub.service;

import com.consultadd.bookhub.model.RatingReview;
import com.consultadd.bookhub.repository.RatingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RatingReviewService  {

    private final RatingRepository ratingReviewRepository;

    public RatingReview submitRating(RatingReview ratingReview) {
        return ratingReviewRepository.save(ratingReview);
    }

    public List<RatingReview> getRatingsForBook(Long bookId) {
        return ratingReviewRepository.findByBookId(bookId);
    }
}
