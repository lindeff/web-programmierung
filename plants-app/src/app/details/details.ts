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

  anthuriumVarieties = [
    {
      name: 'Anthurium andraeanum',
      image: 'assets/anthurium-andraeanum.jpg',
      description: 'Bekannt für seine glänzenden roten Hochblätter und den gelben Kolben. Ein Klassiker unter den Zimmerpflanzen.'
    },
    {
      name: 'Anthurium clarinervium',
      image: 'assets/anthurium-clarinervium.jpg',
      description: 'Samtige, herzförmige Blätter mit auffälliger weißer Aderung. Besonders als Blattschmuckpflanze beliebt.'
    },
    {
      name: 'Anthurium crystallinum',
      image: 'assets/anthurium-crystallinum.jpg',
      description: 'Ähnlich wie clarinervium, jedoch mit größeren, filigraneren Blättern.'
    }
  ];
}
