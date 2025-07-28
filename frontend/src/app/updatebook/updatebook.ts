import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-updatebook',
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './updatebook.html',
  styleUrl: './updatebook.css'
})
export class Updatebook {
updateForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.updateForm = this.fb.group({
      id: ['', Validators.required],
      title: ['', Validators.required],
      author: ['', Validators.required],
      description: ['', Validators.required],
      bookType: ['', Validators.required],
      department: ['', Validators.required],
      pdfUrl: ['', Validators.required],
      price: ['', Validators.required],
      imageUrl: ['', Validators.required]
    });
  }

onSubmit() {
  const bookId = this.updateForm.value.id;
  const body = { ...this.updateForm.value };
  delete body.id;

  const token = localStorage.getItem('token');// Replace this with actual token from storage or auth service

  this.http.put(`http://localhost:8080/consultadd/books/updatebook/${bookId}`, body, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  }).subscribe({
    next: (res) => {
      alert('✅ Book updated successfully');
    },
    error: (err) => {
      if (err.status === 403) {
        alert('❌ Book not found with this ID');
      } else if (err.status === 404) {
        alert('🚫 Forbidden: You are not authorized to update this book');
      } else {
        alert('⚠️ Error updating book. Please try again.');
        console.error('Error:', err);
      }
    }
  });
}

}
