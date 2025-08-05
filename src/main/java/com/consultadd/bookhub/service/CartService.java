package com.consultadd.bookhub.service;

//import com.consultadd.bookhub.entity.*;
import com.consultadd.bookhub.dto.CartItemResponse;
import com.consultadd.bookhub.model.Book;
import com.consultadd.bookhub.model.Cart;
import com.consultadd.bookhub.model.CartItem;
import com.consultadd.bookhub.model.Employee;
import com.consultadd.bookhub.repository.BookRepository;
import com.consultadd.bookhub.repository.CartItemRepository;
import com.consultadd.bookhub.repository.CartRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CartService {

    private final CartRepository cartRepository;
    private final CartItemRepository cartItemRepository;
    private final BookRepository bookRepository;
    private final AuthService authService;

    public void addToCart(Long bookId, int quantity) {
        Employee buyer = authService.getCurrentEmployee();

        Cart cart = cartRepository.findByBuyer(buyer)
                .orElseGet(() -> Cart.builder()
                        .buyer(buyer)
                        .items(new ArrayList<>())
                        .build());

        Book book = bookRepository.findById(bookId)
                .orElseThrow(() -> new RuntimeException("Book not found"));

        CartItem item = CartItem.builder()
                .book(book)
                .quantity(quantity)
                .cart(cart)
                .build();

        cart.getItems().add(item);

        cartRepository.save(cart);
    }

    public void removeFromCart(Long bookId) {
        Employee buyer = authService.getCurrentEmployee();

        Cart cart = cartRepository.findByBuyer(buyer)
                .orElseThrow(() -> new RuntimeException("Cart not found"));

        CartItem itemToRemove = cart.getItems().stream()
                .filter(item -> item.getBook().getId().equals(bookId))
                .findFirst()
                .orElseThrow(() -> new RuntimeException("Book not found in cart"));

        cart.getItems().remove(itemToRemove);
        cartItemRepository.delete(itemToRemove);

        cartRepository.save(cart);
    }

    public List<CartItemResponse> getCartItems() {
        Employee buyer = authService.getCurrentEmployee();

        Cart cart = cartRepository.findByBuyer(buyer)
                .orElseThrow(() -> new RuntimeException("Cart not found"));

        return cart.getItems().stream()
                .map(item -> CartItemResponse.builder()
                        .bookId(item.getBook().getId())
                        .title(item.getBook().getTitle())
                        .author(item.getBook().getAuthor())
                        .quantity(item.getQuantity())
                        .price(item.getBook().getPrice())
                        .build())
                .collect(Collectors.toList());
    }

    public void updateCartItemQuantity(Long bookId, int newQuantity) {
        Employee buyer = authService.getCurrentEmployee();

        Cart cart = cartRepository.findByBuyer(buyer)
                .orElseThrow(() -> new RuntimeException("Cart not found"));

        CartItem item = cart.getItems().stream()
                .filter(ci -> ci.getBook().getId().equals(bookId))
                .findFirst()
                .orElseThrow(() -> new RuntimeException("Book not found in cart"));

        item.setQuantity(newQuantity);
        cartItemRepository.save(item);
    }

    public void clearCart() {
        Employee buyer = authService.getCurrentEmployee();

        Cart cart = cartRepository.findByBuyer(buyer)
                .orElseThrow(() -> new RuntimeException("Cart not found"));

        cartItemRepository.deleteAll(cart.getItems());
        cart.getItems().clear();

        cartRepository.save(cart);
    }


}
