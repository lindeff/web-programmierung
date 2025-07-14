import { AfterViewInit, Component } from '@angular/core';
import { Header } from '../components/header/header';
import { CommonModule } from '@angular/common';
import GLightbox from 'glightbox';

@Component({
  selector: 'app-details',
  imports: [Header, CommonModule],
  templateUrl: './details.html',
  styleUrl: './details.css'
})
export class Details implements AfterViewInit {
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
}
