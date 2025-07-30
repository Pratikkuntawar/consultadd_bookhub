
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // ✅ Import HttpClient
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-getalldonations',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './getalldonations.html',
  styleUrl: './getalldonations.css'
})
export class Getalldonations implements OnInit {
  donations: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchDonations();
  }

  fetchDonations(): void {
  const apiUrl = 'http://localhost:8080/api/donations/';
  const token = localStorage.getItem('token'); // Get token from localStorage

  if (!token) {
    console.error('JWT token not found');
    return;
  }

  const headers = {
    Authorization: `Bearer ${token}`
  };

  this.http.get<any[]>(apiUrl, { headers }).subscribe({
    next: (response) => {
      this.donations = response;
      console.log('All Donations:', this.donations);
    },
    error: (error) => {
      console.error('Error fetching donations:', error);
    }
  });
}

}
