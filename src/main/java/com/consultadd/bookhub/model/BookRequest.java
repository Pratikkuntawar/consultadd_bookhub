package com.consultadd.bookhub.model;

import com.consultadd.bookhub.enums.RequestStatus;
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
public class BookRequest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String author;

    private String reason;

    @ManyToOne
    private Employee requester;

    @Enumerated(EnumType.STRING)
    private RequestStatus status =  RequestStatus.PENDING;
}
