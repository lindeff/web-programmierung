import { Component } from '@angular/core';
import { Header } from '../components/header/header';
import { NgStyle } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [Header, NgStyle, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  onSubmit(form: NgForm): void {
  if (form.valid) {
    console.log('Formulardaten:', form.value);
  } else {
    console.warn('Formular ist ungültig.');
  }
}
}
