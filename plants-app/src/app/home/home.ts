import { NgStyle } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { PlantCard } from '../components/plant-card/plant-card';
import { Header } from '../components/header/header';

@Component({
  selector: 'app-home',
  imports: [NgStyle, Header, PlantCard],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  anthuriumCards = [
    {
      name: 'Anthurium BVEP/Antolakii',
      price: 'NFS',
      coverImageUrl: 'assets/cover-bvep.png',
      hoverImageUrl: 'assets/bvep.jpg',
      gallery: [
        { href: 'assets/bvep.jpg', title: 'Main view' },
        { href: 'assets/background-house.jpg', title: 'Side view' },
      ]
    },
    {
      name: 'Anthurium Mr. Worldwide',
      price: 'NFS',
      coverImageUrl: 'assets/cover-mr-worldwide.png',
      hoverImageUrl: 'assets/mr-worldwide.jpg'
    },
    {
      name: 'Anthurium DocBlock Zara \'29\' x (Michelle x Zara) \'28\'',
      price: 'NFS',
      coverImageUrl: 'assets/zamiza.png',
      hoverImageUrl: 'assets/zamiza.jpg'
    }
  ];
}
