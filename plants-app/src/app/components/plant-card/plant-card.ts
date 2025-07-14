import { AfterViewInit, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import GLightbox from 'glightbox';

@Component({
  selector: 'app-plant-card',
  imports: [CommonModule],
  templateUrl: './plant-card.html',
  styleUrl: './plant-card.css'
})
export class PlantCard {
  @Input() name!: string;
  @Input() sort!: string;
  @Input() price!: string;
  @Input() coverImageUrl!: string;
  @Input() hoverImageUrl!: string;
  @Input() gallery!: { href: string; title: string; }[];

  hovered: boolean = false;

  lightbox: any;

  // Use GLightbox to open the gallery
  openGallery() {
    this.lightbox = GLightbox({
      // @ts-expect-error - elements is supported, just not typed
      elements: this.gallery,
      loop: true,
      touchNavigation: true
    });
    this.lightbox.open();
  }

  onMouseEnter(event: MouseEvent) {
    this.hovered = true;
  }

  onMouseLeave(event: MouseEvent) {
    this.hovered = false;
  }
}
