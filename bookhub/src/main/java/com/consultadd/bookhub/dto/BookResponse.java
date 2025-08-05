package com.consultadd.bookhub.dto;

import com.consultadd.bookhub.enums.Departments;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class BookResponse {
    private Long id;
    private String title;
    private String author;
    private String description;
    private Departments department;
    private String pdfUrl;
    private Long sellerId;
    private String sellerName;
}
