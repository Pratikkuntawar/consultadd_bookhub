package com.consultadd.bookhub.model;

import com.consultadd.bookhub.enums.BookType;
import com.consultadd.bookhub.enums.Departments;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private String author;

    private String tags;

    @Enumerated(EnumType.STRING)
    private BookType bookType;

    @Enumerated(EnumType.STRING)
    private Departments department;

    private String pdfUrl;

    @Column(columnDefinition = "TEXT")
    private String description;


    private String location;

    private boolean isApproved = false;

    private boolean isDonated = false;

    @ManyToOne
    @JoinColumn(name = "seller_id")
    private Employee seller;

    @ManyToOne
    @JoinColumn(name = "donor_id")
    private Employee donor;
}
