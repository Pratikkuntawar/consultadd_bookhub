package com.consultadd.bookhub.service;

import com.consultadd.bookhub.model.Purchase;
import com.consultadd.bookhub.repository.PurchaseRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PurchaseService {

    private final PurchaseRepository purchaseRepository;

    public Purchase recordPurchase(Purchase purchase) {
        purchase.setPurchaseDate(LocalDateTime.now());
        return purchaseRepository.save(purchase);
    }

    public List<Purchase> getAllPurchases() {
        return purchaseRepository.findAll();
    }
}
