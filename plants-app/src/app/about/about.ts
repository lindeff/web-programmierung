import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { Header } from '../components/header/header';

@Component({
  selector: 'app-about',
  imports: [NgStyle, Header],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {

}
