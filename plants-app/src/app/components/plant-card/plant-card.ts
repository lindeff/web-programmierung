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
  @Input() price!: number;
  @Input() coverImageUrl!: string;
  @Input() hoverImageUrl!: string; 

  hovered: boolean = false;

  lightbox: any;

  gallery = [
    { href: 'assets/bvep.jpg', title: 'Main view' },
    { href: 'assets/background-house.jpg', title: 'Side view' },
  ];

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
