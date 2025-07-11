import { Component } from '@angular/core';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [Header, NgStyle],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

}
