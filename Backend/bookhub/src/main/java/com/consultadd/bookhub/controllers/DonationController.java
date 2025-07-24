package com.consultadd.bookhub.controllers;

import com.consultadd.bookhub.enums.DonationStatus;
import com.consultadd.bookhub.model.Donation;
import com.consultadd.bookhub.service.DonationsService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/donations")
@RequiredArgsConstructor
public class DonationController {

    private final DonationsService donationsService;

    @PostMapping
    public ResponseEntity<Donation> donateBook(@RequestBody Donation donation) {
        Donation savedDonation = donationsService.donateBook(donation);
        return ResponseEntity.ok(savedDonation);
    }

    @GetMapping
    public ResponseEntity<List<Donation>> getAllDonations() {
        return ResponseEntity.ok(donationsService.getAllDonations());
    }

    @GetMapping("/donor/{donorId}")
    public ResponseEntity<List<Donation>> getDonationsByDonor(@PathVariable Long donorId) {
        return ResponseEntity.ok(donationsService.getDonationsByDonor(donorId));
    }

    @PutMapping("/{donationId}/status")
    public ResponseEntity<Donation> updateDonationStatus(
            @PathVariable Long donationId,
            @RequestParam DonationStatus status) {
        Donation updated = donationsService.updateDonationStatus(donationId, status);
        return ResponseEntity.ok(updated);
    }
}
