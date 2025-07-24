package com.consultadd.bookhub.dto;

import com.consultadd.bookhub.enums.Departments;
import lombok.Data;

@Data
public class BookRequest {
    private String title;
    private String author;
    private String description;
    private Departments department;
    private String pdfUrl;
}
