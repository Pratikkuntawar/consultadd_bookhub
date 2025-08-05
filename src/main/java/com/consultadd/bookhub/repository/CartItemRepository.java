package com.consultadd.bookhub.repository;

import com.consultadd.bookhub.model.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CartItemRepository extends JpaRepository<CartItem, Long> {
    void delete(CartItem item);
}
