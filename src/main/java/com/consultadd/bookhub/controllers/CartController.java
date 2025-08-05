package com.consultadd.bookhub.controllers;

import com.consultadd.bookhub.dto.AddToCartRequest;
import com.consultadd.bookhub.dto.CartItemResponse;
import com.consultadd.bookhub.dto.CartUpdateRequestDto;
import com.consultadd.bookhub.service.CartService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("buyer/cart")
@RequiredArgsConstructor
public class CartController {

    private final CartService cartService;

    @GetMapping
    public ResponseEntity<List<CartItemResponse>> viewCart() {
        return ResponseEntity.ok(cartService.getCartItems());
    }

    @PostMapping("/add")
    public ResponseEntity<String> addToCart(@RequestBody AddToCartRequest request){
        cartService.addToCart(request.getBookId(), request.getQuantity());
        return ResponseEntity.ok("Book added to cart successfully.");
    }

    @PutMapping("/update")
    public ResponseEntity<String> updateQuantity(@RequestBody CartUpdateRequestDto request) {
        cartService.updateCartItemQuantity(request.getBookId(), request.getQuantity());
        return ResponseEntity.ok("Quantity updated successfully.");
    }


    @DeleteMapping("/remove")
    public ResponseEntity<String> removeItem(@RequestBody CartUpdateRequestDto request) {
        cartService.removeFromCart(request.getBookId());
        return ResponseEntity.ok("Item removed from cart.");
    }


    @DeleteMapping("/clear")
    public ResponseEntity<String> clearCart() {
        cartService.clearCart();
        return ResponseEntity.ok("Cart cleared successfully.");
    }

}
