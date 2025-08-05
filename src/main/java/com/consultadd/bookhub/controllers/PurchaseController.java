package com.consultadd.bookhub.controllers;

import com.consultadd.bookhub.model.Purchase;
import com.consultadd.bookhub.service.PurchaseService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/purchases")
@RequiredArgsConstructor
public class PurchaseController {

    private final PurchaseService purchaseService;

    @PreAuthorize("hasAnyRole('EMPLOYEE', 'ADMIN') and principal.active == true")
    @PostMapping("/record")
    public ResponseEntity<Purchase> recordPurchase(@RequestBody Purchase purchase) {
        return ResponseEntity.ok(purchaseService.recordPurchase(purchase));
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/all")
    public ResponseEntity<List<Purchase>> getAllPurchases() {
        return ResponseEntity.ok(purchaseService.getAllPurchases());
    }
}
