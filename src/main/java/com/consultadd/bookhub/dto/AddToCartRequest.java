package com.consultadd.bookhub.dto;

import lombok.Data;

@Data
public class AddToCartRequest {
    private Long bookId;
    private int quantity;
}
