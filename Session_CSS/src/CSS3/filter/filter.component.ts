import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  imports: [],
  template: `
     <div class="filter-container">
        <!-- Original Image -->
        <div class="filter-box">
            <img src="https://www.w3schools.com/cssref/pineapple.jpg" alt="Original Image">
            <p>Original</p>
        </div>

        <!-- Blur Effect -->
        <div class="filter-box blur">
            <img src="https://www.w3schools.com/cssref/pineapple.jpg" alt="Blur Effect">
            <p>Blur</p>
        </div>

        <!-- Brightness Effect -->
        <div class="filter-box brightness">
            <img src="https://www.w3schools.com/cssref/pineapple.jpg" alt="Brightness Effect">
            <p>Brightness</p>
        </div>

        <!-- Grayscale Effect -->
        <div class="filter-box grayscale">
            <img src="https://www.w3schools.com/cssref/pineapple.jpg" alt="Grayscale Effect">
            <p>Grayscale</p>
        </div>

        <!-- Sepia Effect -->
        <div class="filter-box sepia">
            <img src="https://www.w3schools.com/cssref/pineapple.jpg" alt="Sepia Effect">
            <p>Sepia</p>
        </div>

        <!-- Hue Rotate Effect -->
        <div class="filter-box hue-rotate">
            <img src="https://www.w3schools.com/cssref/pineapple.jpg" alt="Hue Rotate Effect">
            <p>Hue Rotate</p>
        </div>
    </div>
  `,
  styleUrl: './filter.component.css'
})
export class FilterComponent {

}
