package com.consultadd.bookhub.model;

import com.consultadd.bookhub.enums.DonationStatus;
import com.consultadd.bookhub.model.Employee;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Donation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String author;

    private String pdfUrl;
    private String imageUrl;

    private String department;

    @ManyToOne
    private Employee donor;

    @Enumerated(EnumType.STRING)
    private DonationStatus status = DonationStatus.PENDING;
}
