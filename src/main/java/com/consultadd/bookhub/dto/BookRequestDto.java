// BookRequestDto.java
package com.consultadd.bookhub.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class BookRequestDto {
    private String title;
    private String author;
    private String reason;
    private Long requesterId;

}
