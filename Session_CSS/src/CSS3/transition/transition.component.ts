import { Component } from '@angular/core';

@Component({
  selector: 'app-transition',
  imports: [],
  template: `
    <div class="transition-container">
      <!-- Button Hover Effect -->
      <!-- <button class="hover-button">Hover Me</button> -->

      <img
        src="https://cdn.pixabay.com/photo/2022/07/07/10/46/woman-7306978_960_720.jpg"
        alt=""
      />

      <!-- Color Transition -->
      <!-- <div class="color-box">Hover to Change Color</div> -->

      <!-- Size and Rotation Transition -->
      <!-- <div class="resize-rotate">Hover to Resize & Rotate</div> -->
    </div>
  `,
  styleUrl: './transition.component.css',
})
export class TransitionComponent {}
