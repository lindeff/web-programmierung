import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './components/footer/footer';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'plants-app';

  lightbox = GLightbox({
    selector: '.glightbox'
  });
}
