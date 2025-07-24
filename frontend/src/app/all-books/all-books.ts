// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-all-books',
//   imports: [],
//   templateUrl: './all-books.html',
//   styleUrl: './all-books.css'
// })
// export class AllBooks {

// }
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-books',
  imports: [RouterModule,CommonModule],
  templateUrl: './all-books.html',
  styleUrls: ['./all-books.css']
})
export class AllBooksComponent implements OnInit {
  books: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.books = [
  {
    "_id": "1",
    "title": "Rich Dad Poor Dad",
    "author": "Robert Kiyosaki",
    "price": 399,
    "imageUrl": "https://m.media-amazon.com/images/I/81BE7eeKzAL._SY522_.jpg",
    "description":"Rich Dad Poor Dad contrasts the financial philosophies of two father figures. The “rich dad” teaches about financial independence, investing, and entrepreneurship, while the “poor dad” represents traditional thinking around job security. Kiyosaki shares personal anecdotes to explain how financial education is key to building wealth. The book challenges the notion that a high income equals wealth. It stresses the importance of assets, passive income, and mindset. A must-read for those seeking financial freedom."
  },
  {
    "_id": "2",
    "title": "Wings of Fire",
    "author": "A.P.J. Abdul Kalam",
    "price": 320,
    "imageUrl": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRyz_vn6XSS75c3yovejeyvQ5nFLHtoyCsxJNjqRIdBSe-AWa33ahCWzZ4AzWQFa119fZH_wKFlYxvckeNN9cMFLZjznoJs",
    "description":"Wings of Fire is the inspiring autobiography of Dr. A.P.J. Abdul Kalam, India’s Missile Man and former President. The book traces his journey from a humble background to becoming one of India's most celebrated scientists. It showcases his dedication, resilience, and passion for science. Kalam reflects on his childhood, education, and significant contributions to India’s space and defense programs. It’s filled with lessons in leadership, perseverance, and patriotism. A motivational read for youth."
  },
  {
    "_id": "3",
    "title": "Think Like a Monk",
    "author": "Jay Shetty",
    "price": 299,
    "imageUrl": "https://m.media-amazon.com/images/I/81s6DUyQCZL._AC_UF1000,1000_QL80_.jpg",
    "description":"Jay Shetty blends ancient wisdom with practical advice in this transformative book. Drawing from his experience as a monk, Shetty teaches how to overcome negativity, find purpose, and train your mind for peace and clarity. The book explores detachment, discipline, gratitude, and mindfulness. It provides exercises and real-life stories to guide personal growth. Whether you're stressed or searching for direction, this book is a toolkit for inner peace. Deeply spiritual yet modern and accessible."
 },
   {
    "_id": "4",
    "title": "The Alchemist",
    "author": "Paulo Coelho",
    "price": 350,
    "imageUrl": "https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg",
    "description":"'The Alchemist' follows Santiago, a young shepherd on a journey to find treasure near the Egyptian pyramids. Along the way, he discovers deeper truths about life, dreams, and destiny. The book is a philosophical tale about following one’s heart and listening to omens. Coelho’s writing is poetic and full of symbolism. It emphasizes the importance of self-discovery and trusting the universe. A powerful story that inspires readers to chase their personal legends."
  },
  {
    "_id": "5",
    "title": "Atomic Habits",
    "author": "James Clear",
    "price": 450,
    "imageUrl": "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg",
    "description":"Atomic Habits is a groundbreaking guide to habit formation and behavior change. James Clear explains how small, consistent improvements lead to remarkable results over time. He breaks down the science of habits and offers actionable strategies for building good habits and breaking bad ones. With real-life examples and frameworks like the habit loop, the book is practical and empowering. It emphasizes identity change over goal setting. Perfect for anyone seeking long-term personal improvement."
  },
  {
    "_id": "6",
    "title": "The Power of Subconscious Mind",
    "author": "Joseph Murphy",
    "price": 280,
    "imageUrl": "https://m.media-amazon.com/images/I/71sBtM3Yi5L.jpg",
    "description":"Joseph Murphy explores the immense potential of the subconscious mind in shaping your life. The book combines spiritual principles with psychological insights to explain how thoughts influence outcomes. Murphy offers techniques like visualization and affirmations to reprogram the mind. He shares stories of healing, success, and transformation through positive thinking. This book teaches that beliefs shape reality. A classic for those interested in the law of attraction and mental empowerment."
  },
  {
    "_id": "7",
    "title": "Can't Hurt Me",
    "author": "David Goggins",
    "price": 499,
    "imageUrl": "https://delhibookmarket.com/wp-content/uploads/2023/09/Cant-Hurt-Me.jpg",
    "description":"David Goggins shares his journey from an abused child to a Navy SEAL and ultra-endurance athlete. 'Can’t Hurt Me' blends autobiography with self-help, showing how extreme discipline and mental toughness can overcome any limit. Goggins introduces the '40% rule'— when you think you're done, you're only 40% there. The book is brutally honest and inspiring, filled with pain, struggle, and triumph. It pushes readers to break excuses and build resilience. Not for the faint-hearted."
  },
  {
    "_id": "8",
    "title": "The 5 AM Club",
    "author": "Robin Sharma",
    "price": 399,
    "imageUrl": "https://m.media-amazon.com/images/I/71zytzrg6lL.jpg",
    "description":"In this motivational fable, Robin Sharma introduces a morning routine that can transform your life. The story follows an entrepreneur, artist, and a mentor who teaches the power of rising early. Sharma’s 20/20/20 formula — move, reflect, grow — is designed for peak performance. The book blends neuroscience, productivity, and storytelling. It emphasizes discipline, focus, and personal mastery. Ideal for readers seeking a productive lifestyle and mental clarity through early rising."
  },
  {
    "_id": "9",
    "title": "Ikigai",
    "author": "Héctor and Miralles",
    "price": 299,
    "imageUrl": "https://m.media-amazon.com/images/I/81l3rZK4lnL.jpg",
    "description":"Ikigai explores the Japanese concept of purpose and longevity. The authors travel to Okinawa, where people live long, fulfilling lives, to uncover their secrets. The book emphasizes balance — doing what you love, what you're good at, what the world needs, and what you can be paid for. It’s full of insights on mindfulness, simplicity, and healthy living. A mix of science, philosophy, and culture, 'Ikigai'helps readers find joy in daily life. Simple yet profound"
  },
  {
    "_id": "10",
    "title": "The Psychology of Money",
    "author": "Morgan Housel",
    "price": 350,
    "imageUrl": "https://m.media-amazon.com/images/I/71g2ednj0JL.jpg",
    "description":"Morgan Housel delves into the human side of finance, showing that how you behave with money matters more than how smart you are. The book includes 19 short stories that explain how people think about wealth, greed, and happiness. Housel argues that money decisions are often emotional and shaped by experiences. He stresses patience, risk-taking, and long-term thinking. It's a fresh perspective on building wealth and avoiding common financial mistakes. Insightful, relatable, and timeless."
  }
]

  }

  handleBookClick(bookId: string) {
    this.router.navigate(['/book', bookId]);
  }
}
