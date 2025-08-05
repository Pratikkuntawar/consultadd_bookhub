package com.consultadd.bookhub.dto;

import com.consultadd.bookhub.enums.DonationStatus;
import lombok.Data;

@Data
public class UpdateDonationStatusRequest {
    private DonationStatus status;
}
