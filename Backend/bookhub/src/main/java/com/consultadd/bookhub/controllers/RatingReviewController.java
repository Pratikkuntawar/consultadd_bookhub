package com.consultadd.bookhub.controllers;

import com.consultadd.bookhub.model.RatingReview;
import com.consultadd.bookhub.service.RatingReviewService;
import lombok.RequiredArgsConstructor;
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
}
