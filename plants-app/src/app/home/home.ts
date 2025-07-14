import { NgStyle } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { PlantCard } from '../components/plant-card/plant-card';
import { Header } from '../components/header/header';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [NgStyle, Header, PlantCard, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  carouselItems = [
    {
      name: 'collection-anthurium',
      buttonText: 'Zur Kollektion',
      imageUrl: 'assets/monstera-aurea-noise.jpg',
      active: true
    },
    {
      name: 'info-anthurium',
      buttonText: 'Infos über Anthurium',
      imageUrl: 'assets/monstera-albo-noise.jpg',
      active: false
    }
  ];

  anthuriumCards = [
    {
      name: 'Anthurium BVEP/Antolakii',
      price: 'NFS',
      coverImageUrl: 'assets/cover-bvep.png',
      hoverImageUrl: 'assets/bvep.jpg',
      gallery: [
        { href: 'assets/bvep.jpg', title: 'Ausgehärtes Blatt' },
        { href: 'assets/bvep2.jpg', title: 'Blatt im Tageslicht' },
        { href: 'assets/bvep3.jpg', title: 'Blatt im Tageslicht' },
        { href: 'assets/bvep4.jpg', title: 'Ausrollendes Blatt' },
      ]
    },
    {
      name: 'Anthurium Mr. Worldwide',
      price: 'NFS',
      coverImageUrl: 'assets/cover-mr-worldwide.png',
      hoverImageUrl: 'assets/mr-worldwide.jpg',
      gallery: [
        { href: 'assets/mr-worldwide.jpg', title: 'Ausgehärtes Blatt' },
      ]
    },
    {
      name: 'Anthurium DocBlock Zara \'29\' x (Michelle x Zara) \'28\'',
      price: 'NFS',
      coverImageUrl: 'assets/zamiza.png',
      hoverImageUrl: 'assets/zamiza.jpg',
      gallery: [
        { href: 'assets/zamiza.jpg', title: 'Ausgehärtes Blatt im Tageslicht' },
        { href: 'assets/zamiza3.jpg', title: 'Blatt 2 in der Vitrine' },
        { href: 'assets/zamiza2.jpg', title: 'Blatt 3' },
      ]
    }
  ];
}
