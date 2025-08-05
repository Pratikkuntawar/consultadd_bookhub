package com.consultadd.bookhub.ServiceTest;

import com.consultadd.bookhub.dto.CartItemResponse;
import com.consultadd.bookhub.model.*;
import com.consultadd.bookhub.repository.BookRepository;
import com.consultadd.bookhub.repository.CartItemRepository;
import com.consultadd.bookhub.repository.CartRepository;
import com.consultadd.bookhub.service.AuthService;
import com.consultadd.bookhub.service.CartService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.*;
import java.util.*;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class CartServiceTest {

    @Mock
    private CartRepository cartRepository;

    @Mock
    private CartItemRepository cartItemRepository;

    @Mock
    private BookRepository bookRepository;

    @Mock
    private AuthService authService;

    @InjectMocks
    private CartService cartService;

    private Employee buyer;
    private Book book;
    private Cart cart;
    private CartItem cartItem;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);

        buyer = Employee.builder().id(1L).fullName("John").build();
        book = Book.builder().id(10L).title("Test Book").author("Author").price(200.0).build();
        cart = Cart.builder().id(100L).buyer(buyer).items(new ArrayList<>()).build();
        cartItem = CartItem.builder().id(1L).book(book).quantity(2).cart(cart).build();
    }

    @Test
    void testAddToCart_NewCart_Success() {
        when(authService.getCurrentEmployee()).thenReturn(buyer);
        when(cartRepository.findByBuyer(buyer)).thenReturn(Optional.empty());
        when(bookRepository.findById(10L)).thenReturn(Optional.of(book));
        when(cartRepository.save(any(Cart.class))).thenAnswer(inv -> inv.getArgument(0));

        cartService.addToCart(10L, 2);

        verify(cartRepository).save(any(Cart.class));
    }

    @Test
    void testRemoveFromCart_Success() {
        cart.getItems().add(cartItem);

        when(authService.getCurrentEmployee()).thenReturn(buyer);
        when(cartRepository.findByBuyer(buyer)).thenReturn(Optional.of(cart));

        cartService.removeFromCart(10L);

        verify(cartItemRepository).delete(cartItem);
        verify(cartRepository).save(cart);
    }

    @Test
    void testGetCartItems_ReturnsList() {
        cart.getItems().add(cartItem);

        when(authService.getCurrentEmployee()).thenReturn(buyer);
        when(cartRepository.findByBuyer(buyer)).thenReturn(Optional.of(cart));

        List<CartItemResponse> items = cartService.getCartItems();

        assertEquals(1, items.size());
        assertEquals("Test Book", items.get(0).getTitle());
        assertEquals(2, items.get(0).getQuantity());
    }

    @Test
    void testUpdateCartItemQuantity_Success() {
        cart.getItems().add(cartItem);

        when(authService.getCurrentEmployee()).thenReturn(buyer);
        when(cartRepository.findByBuyer(buyer)).thenReturn(Optional.of(cart));

        cartService.updateCartItemQuantity(10L, 5);

        assertEquals(5, cartItem.getQuantity());
        verify(cartItemRepository).save(cartItem);
    }

    @Test
    void testClearCart_Success() {
        cart.getItems().add(cartItem);

        when(authService.getCurrentEmployee()).thenReturn(buyer);
        when(cartRepository.findByBuyer(buyer)).thenReturn(Optional.of(cart));

        cartService.clearCart();

        verify(cartItemRepository).deleteAll(cart.getItems());
        verify(cartRepository).save(cart);
        assertTrue(cart.getItems().isEmpty());
    }

    @Test
    void testAddToCart_BookNotFound() {
        when(authService.getCurrentEmployee()).thenReturn(buyer);
        when(cartRepository.findByBuyer(buyer)).thenReturn(Optional.of(cart));
        when(bookRepository.findById(999L)).thenReturn(Optional.empty());

        assertThrows(RuntimeException.class, () -> cartService.addToCart(999L, 1));
    }

    @Test
    void testRemoveFromCart_CartNotFound() {
        when(authService.getCurrentEmployee()).thenReturn(buyer);
        when(cartRepository.findByBuyer(buyer)).thenReturn(Optional.empty());

        assertThrows(RuntimeException.class, () -> cartService.removeFromCart(10L));
    }

    @Test
    void testUpdateCartItemQuantity_BookNotInCart() {
        when(authService.getCurrentEmployee()).thenReturn(buyer);
        when(cartRepository.findByBuyer(buyer)).thenReturn(Optional.of(cart));

        assertThrows(RuntimeException.class, () -> cartService.updateCartItemQuantity(10L, 5));
    }
}
