import { Component } from '@angular/core';

@Component({
  selector: 'app-animation',
  imports: [],
  template: `
    <div class="animation-container">
        <!-- Bouncing Ball -->
        <div class="bouncing-ball"></div>

        <!-- Rotating Square -->
        <div class="rotating-square"></div>

        <!-- Fading Text -->
        <div class="fading-text">CSS Animation</div>
    </div>
  `,
  styleUrl: './animation.component.css'
})
export class AnimationComponent {

}
