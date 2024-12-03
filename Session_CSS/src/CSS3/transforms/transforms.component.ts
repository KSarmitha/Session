import { Component } from '@angular/core';

@Component({
  selector: 'app-transforms',
  imports: [],
  template: `
     <div class="transform-container">
        <!-- Rotation -->
        <div class="box rotate">Rotate</div>

        <!-- Scaling -->
        <div class="box scale">Scale</div>

        <!-- Skew -->
        <div class="box skew">Skew</div>

        <!-- Translation -->
        <div class="box translate">Translate</div>
    </div>
  `,
  styleUrl: './transforms.component.css'
})
export class TransformsComponent {

}
