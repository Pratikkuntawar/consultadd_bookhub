package com.consultadd.bookhub.repository;

import com.consultadd.bookhub.model.Purchase;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PurchaseRepository extends JpaRepository<Purchase, Long> {
}
