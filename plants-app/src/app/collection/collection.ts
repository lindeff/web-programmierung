import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { PlantCard } from '../components/plant-card/plant-card';
import { Header } from '../components/header/header';

@Component({
  selector: 'app-collection',
  imports: [NgStyle, Header, PlantCard],
  templateUrl: './collection.html',
  styleUrl: './collection.css'
})
export class Collection {
  anthuriumCards = [
    {
      name: 'Anthurium BVEP/Antolakii',
      sort: 'Wildart',
      price: 'TBD',
      coverImageUrl: 'assets/bvep.jpg',
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
      sort: 'Hybrid',
      price: 'TBD',
      coverImageUrl: 'assets/mr-worldwide.jpg',
      hoverImageUrl: 'assets/mr-worldwide.jpg',
      gallery: [
        { href: 'assets/mr-worldwide.jpg', title: 'Ausgehärtes Blatt' },
      ]
    },
    {
      name: 'Anthurium DocBlock Zara \'29\' x (Michelle x Zara) \'28\'',
      sort: 'Hybrid',
      price: 'TBD',
      coverImageUrl: 'assets/zamiza.jpg',
      hoverImageUrl: 'assets/zamiza.jpg',
      gallery: [
        { href: 'assets/zamiza.jpg', title: 'Ausgehärtes Blatt im Tageslicht' },
        { href: 'assets/zamiza3.jpg', title: 'Blatt 2 in der Vitrine' },
        { href: 'assets/zamiza2.jpg', title: 'Blatt 3' },
      ]
    },
    {
      name: 'Anthurium DocBlock Dark Handsome x Red Velvet Cake',
      sort: 'Hybrid',
      price: 'TBD',
      coverImageUrl: 'assets/dh-rvc3.jpg',
      hoverImageUrl: 'assets/dh-rvc3.jpg',
      gallery: [
        { href: 'assets/dh-rvc3.jpg', title: 'Blatt im Tageslicht' },
        { href: 'assets/dh-rvc.jpg', title: 'Ausgehärtes Blatt' },
        { href: 'assets/dh-rvc2.jpg', title: 'Blatt in der Entwicklung' },
      ]
    },
    {
      name: 'Anthurium (Papillilaminum \'Fort Sherman\' x Red Vein Dark Phoenix) x Portillae',
      sort: 'Hybrid',
      price: 'TBD',
      coverImageUrl: 'assets/(fs-rvdp)-port.jpg',
      hoverImageUrl: 'assets/(fs-rvdp)-port.jpg',
      gallery: [
        { href: 'assets/(fs-rvdp)-port.jpg', title: 'Ausgehärtes Blatt mit Weitem Sinus und roten Venen' }
      ]
    },
    {
      name: 'Anthurium Sp. Silver Peru Wide Sinus x Papillilaminum \'Fort Sherman\'',
      sort: 'Hybrid',
      price: 'TBD',
      coverImageUrl: 'assets/peru-fs.jpg',
      hoverImageUrl: 'assets/peru-fs.jpg',
      gallery: [
        { href: 'assets/peru-fs.jpg', title: 'Blatt mit Weitem Sinus' }
      ]
    },
    {
      name: 'Anthurium Queen Crystallinum x King of Spades',
      sort: 'Hybrid',
      price: 'TBD',
      coverImageUrl: 'assets/queen-crystal-kos.jpg',
      hoverImageUrl: 'assets/queen-crystal-kos.jpg',
      gallery: [
        { href: 'assets/queen-crystal-kos.jpg', title: 'Ausgehärtes Blatt im Tageslicht' }
      ]
    },
    {
      name: 'Anthurium Ace of Spades x (Papillilaminum \'Fort Sherman\' x \'Ralph Lynam\')',
      sort: 'Hybrid',
      price: 'TBD',
      coverImageUrl: 'assets/aos-(fs-rl).jpg',
      hoverImageUrl: 'assets/aos-(fs-rl).jpg',
      gallery: [
        { href: 'assets/aos-(fs-rl).jpg', title: 'Ausgehärtes Blatt im Tageslicht' }
      ]
    },
        {
      name: 'Anthurium Forgetii \'Ghost\'',
      sort: 'Wildart',
      price: 'TBD',
      coverImageUrl: 'assets/forgetii-ghost.jpg',
      hoverImageUrl: 'assets/forgetii-ghost.jpg',
      gallery: [
        { href: 'assets/forgetii-ghost.jpg', title: 'Ausgehärtes Blatt in der Vitrine' }
      ]
    },
  ];
}
