

import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-updatedonations',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './updatedonations.html',
  styleUrl: './updatedonations.css'
})
export class Updatedonations implements OnInit {
  //users: any[] = [];
  donations: any[] = [];
  filteredUsers: any[] = [];
  searchId: number | null = null;

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
      this.filteredUsers = [...this.donations]; // Set filteredUsers after data is fetched
    },
    error: (error) => {
      console.error('Error fetching donations:', error);
    }
  });
}

  searchUser(): void {
    if (this.searchId == null || this.searchId.toString().trim() === '') {
      this.filteredUsers = [...this.donations];
      return;
    }

    const found = this.donations.filter(donation => donation.id === this.searchId);

    if (found.length > 0) {
      this.filteredUsers = found;
    } else {
      alert('No Result Found');
      this.filteredUsers = [...this.donations];
    }
  }

  approveRequest(id: number) {
    const token = localStorage.getItem('token'); // Get admin JWT token
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const url = `http://localhost:8080/api/donations/${id}/status`;

    this.http.put(url, { status: 'APPROVED' }, { headers }).subscribe({
      next: (res) => {
        alert('Donation Approved Successfully');
        console.log('Success:', res);
      },
      error: (err) => {
        console.error('Error approving donation:', err);
        alert('Failed to approve donation');
      }
    });
  }

  rejectRequest(id: number) {
    const token = localStorage.getItem('token'); // Get admin JWT token
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const url = `http://localhost:8080/api/donations/${id}/status`;

    this.http.put(url, { status: 'REJECTED' }, { headers }).subscribe({
      next: (res) => {
        alert('Donation Rejected Successfully');
        console.log('Success:', res);
      },
      error: (err) => {
        console.error('Error rejecting donation:', err);
        alert('Failed to reject donation');
      }
    });
  }
}
