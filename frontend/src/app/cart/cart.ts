
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [FormsModule,CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart implements OnInit {

  cartItems: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart(): void {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.get<any[]>('http://localhost:8080/buyer/cart/view', { headers }).subscribe({
      next: (res) => {
        this.cartItems = res;
        console.log(this.cartItems)
        // Initialize quantity if needed
        this.cartItems.forEach(item => {
          if (!item.quantity) item.quantity = 1;
        });
      },
      error: (err) => {
        console.error('Error loading cart:', err);
      }
    });
  }

updateItem(item: any): void {
  const token = localStorage.getItem('token');
  const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

  const payload = {
    bookId: item.bookId,     // Ensure this property exists in your response
    quantity: item.quantity  // Updated quantity bound via ngModel
  };

  this.http.put('http://localhost:8080/buyer/cart/update', payload, { headers })
    .subscribe({
      next: () => {
        alert('Quantity updated successfully!');
        this.loadCart(); // Refresh cart if needed
      },
      error: (err) => {
        console.error('Update failed', err);
        alert('Failed to update quantity');
      }
    });
}

clearCart() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    this.http.delete('http://localhost:8080/buyer/cart/clear', { headers }).subscribe(
      (response) => {
        this.cartItems = [];
        alert('Cart cleared successfully');
      },
      (error) => {
        console.error('Error clearing cart', error);
      }
    );
  }

  removeItem(item: any): void {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

  this.http.delete('http://localhost:8080/buyer/cart/remove', {
    headers,
    body: { bookId: item.bookId }
  }).subscribe({
    next: () => {
      this.cartItems = this.cartItems.filter(cart => cart.bookId !== item.bookId);
    },
    error: err => {
      console.error('Error removing item:', err);
    }
  });
}

increaseQuantity(item: any): void {
  item.quantity = (item.quantity || 1) + 1;
}

decreaseQuantity(item: any): void {
  if (item.quantity > 1) {
    item.quantity--;
  }
}


}
