import { AfterViewInit, Component } from '@angular/core';
import { Header } from '../components/header/header';
import { CommonModule } from '@angular/common';
import GLightbox from 'glightbox';

@Component({
  selector: 'app-details',
  imports: [Header, CommonModule],
  templateUrl: './blog.html',
  styleUrl: './blog.css'
})
export class Blog implements AfterViewInit {
  ngAfterViewInit(): void {
    GLightbox({
      selector: '.glightbox',
    });
  }

  carouselItems = [
    {
      name: 'Pflanzenvitrine',
      description: 'IKEA FABRIKÖR mit LED-Beleuchtung und Belüftung',
      imageUrl: 'assets/greenhouse-cabinet.jpg',
      active: true
    },
    {
      name: 'Grow-Tent',
      description: 'Spider Farmer mit Grow-Lights und Ventilator',
      imageUrl: 'assets/grow-tent.jpg',
      active: false
    }
  ]

    breederVideos = [
    {
      url: 'https://www.youtube.com/watch?v=t4rPIBKM824&t',
      title: 'Doc Block besucht von OnlyPlants',
      imageUrl: 'https://img.youtube.com/vi/t4rPIBKM824/maxresdefault.jpg',
      imageAlt: "Doc Block Interview"
    },
    {
      url: 'https://www.youtube.com/watch?v=PPehcVUjqzw',
      title: 'SKG besucht von OnlyPlants',
      imageUrl: 'https://img.youtube.com/vi/PPehcVUjqzw/maxresdefault.jpg',
      imageAlt: "SKG Interview"
    }
  ]
}