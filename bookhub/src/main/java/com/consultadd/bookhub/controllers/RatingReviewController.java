package com.consultadd.bookhub.controllers;

import com.consultadd.bookhub.model.RatingReview;
import com.consultadd.bookhub.service.RatingReviewService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/consultadd/reviews")
@RequiredArgsConstructor
public class RatingReviewController {

    private final RatingReviewService ratingReviewService;

    @PostMapping("/submit")
    public RatingReview submitRating(@RequestBody RatingReview ratingReview) {
        return ratingReviewService.submitRating(ratingReview);
    }

    @GetMapping("/book/{bookId}")
    public List<RatingReview> getRatingsForBook(@PathVariable Long bookId) {
        return ratingReviewService.getRatingsForBook(bookId);
    }

    // Get all reviews (for admin)
    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/all")
    public List<RatingReview> getAllReviews() {
        return ratingReviewService.getAllReviews();
    }

    // Delete review by ID (for admin)
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteReview(@PathVariable Long id) {
        ratingReviewService.deleteReviewById(id);
        return ResponseEntity.ok("Review deleted successfully.");
    }

}
