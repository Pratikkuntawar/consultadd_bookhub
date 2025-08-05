package com.consultadd.bookhub.dto;

import com.consultadd.bookhub.enums.BookType;
import com.consultadd.bookhub.enums.Departments;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class BookCreateRequestDto {
    private String title;
    private String author;
    private String description;
//    private List<String> tags;
    private BookType bookType;
    private Departments department;
    private String pdfUrl;
//    private String location;
}
