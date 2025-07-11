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
}
