import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';

@Component({
  selector: 'app-main-text-design',
  standalone: true,
  imports: [FlexModule,CommonModule],
  templateUrl: './main-text-design.component.html',
  styleUrl: './main-text-design.component.css'
})
export class MainTextDesignComponent {
  isHovered = false;

  onHover() {
    this.isHovered = true;
  }

  onLeave() {
    this.isHovered = false;
  }
}
