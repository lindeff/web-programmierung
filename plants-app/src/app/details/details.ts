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
      name: 'Anthurium Antolakii (BVEP/Black Velvet Eastern Panama)',
      origin: 'Wildart aus Guna Yala, Panama',
      imageUrl: 'assets/bvep.jpg',
      active: true
    },
    {
      name: 'Anthurium Mr. Worldwide',
      origin: 'Hybrid von \'Indo Portillae\' und \'NSE Portillae\'',
      imageUrl: 'assets/mr-worldwide.jpg',
            active: false
    },
    {
      name: 'Anthurium DocBlock Zara \'29\' x (Michelle x Zara) \'28\'',
      origin: 'Hybrid von DocBlock',
      imageUrl: 'assets/zamiza.jpg',
            active: false
    }
  ]
}
