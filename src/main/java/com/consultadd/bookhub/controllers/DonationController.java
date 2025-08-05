package com.consultadd.bookhub.controllers;

import com.consultadd.bookhub.dto.UpdateDonationStatusRequest;
import com.consultadd.bookhub.enums.DonationStatus;
import com.consultadd.bookhub.model.Donation;
import com.consultadd.bookhub.service.DonationsService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/donations")
@RequiredArgsConstructor
public class DonationController {

    private final DonationsService donationsService;

    @PostMapping("/donor/donate-book")
    public ResponseEntity<Donation> donateBook(@RequestBody Donation donation) {
        Donation savedDonation = donationsService.donateBook(donation);
        return ResponseEntity.ok(savedDonation);
    }

    @PreAuthorize("hasRole('ADMIN') or hasRole('SELLER')")
    @GetMapping
    public ResponseEntity<List<Donation>> getAllDonations() {
        return ResponseEntity.ok(donationsService.getAllDonations());
    }

    @GetMapping("/donor/{donorId}")
    public ResponseEntity<List<Donation>> getDonationsByDonor(@PathVariable Long donorId) {
        return ResponseEntity.ok(donationsService.getDonationsByDonor(donorId));
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/{donationId}/status")
    public ResponseEntity<Donation> updateDonationStatus(
            @PathVariable Long donationId,
            @RequestBody UpdateDonationStatusRequest request) {
        Donation updated = donationsService.updateDonationStatus(donationId, request.getStatus());
        return ResponseEntity.ok(updated);
    }

}
