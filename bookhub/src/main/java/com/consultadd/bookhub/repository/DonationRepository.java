package com.consultadd.bookhub.repository;

import com.consultadd.bookhub.enums.DonationStatus;
import com.consultadd.bookhub.model.Donation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DonationRepository extends JpaRepository<Donation, Long> {
    List<Donation> findByDonorId(Long donorId);
    List<Donation> findByStatus(DonationStatus status);
}
