package com.consultadd.bookhub.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class CartItemResponse {
    private Long bookId;
    private String title;
    private String author;
    private int quantity;
    private Double price;
}
