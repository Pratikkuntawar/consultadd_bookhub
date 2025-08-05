package com.consultadd.bookhub.dto;

import lombok.Data;

@Data
public class CartUpdateRequestDto {
    private Long bookId;
    private int quantity; // You can ignore this in remove
}
