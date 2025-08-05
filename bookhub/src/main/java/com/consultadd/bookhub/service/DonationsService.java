package com.consultadd.bookhub.service;

import com.consultadd.bookhub.enums.DonationStatus;
import com.consultadd.bookhub.model.Donation;
import com.consultadd.bookhub.repository.DonationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class DonationsService{

    private final DonationRepository donationRepository;

    public Donation donateBook(Donation donation) {
        return donationRepository.save(donation);
    }

    public List<Donation> getAllDonations() {
        return donationRepository.findAll();
    }

    public List<Donation> getDonationsByDonor(Long donorId) {
        return donationRepository.findByDonorId(donorId);
    }

    public Donation updateDonationStatus(Long donationId, DonationStatus status) {
        Donation donation = donationRepository.findById(donationId)
                .orElseThrow(() -> new RuntimeException("Donation not found"));
        donation.setStatus(status);
        return donationRepository.save(donation);
    }

}
