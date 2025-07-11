import { AfterViewInit, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import GLightbox from 'glightbox';

@Component({
  selector: 'app-plant-card',
  imports: [CommonModule],
  templateUrl: './plant-card.html',
  styleUrl: './plant-card.css'
})
export class PlantCard implements AfterViewInit {
  @Input() name!: string;
  @Input() price!: number;
  @Input() coverImageUrl!: string;
  @Input() hoverImageUrl!: string; 

  hovered: boolean = false;

  ngAfterViewInit(): void {
  GLightbox({ selector: '.glightbox' });
}

  onMouseEnter(event: MouseEvent) {
    this.hovered = true;
  }

  onMouseLeave(event: MouseEvent) {
    this.hovered = false;
  }

}
