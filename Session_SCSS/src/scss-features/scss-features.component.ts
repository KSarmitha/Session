import { Component } from '@angular/core';

@Component({
  selector: 'app-scss-features',
  imports: [],
  template: `
    <main>
      <h1 id="heading">SCSS</h1>
      <span class="label1">1. Variables </span><br />
      <!-- font-size: $base-font * 2; - app.component.sccs -->
      <span class="label2">2. Mixins </span><br />
      <button class="primary-btn">Primary Button</button> <br />
      <button class="secondary-btn">Secondary Button</button> <br />

      <span class="built-in">3. Functions </span><br />
      <span class="built-in">4. Extensions </span><br />
      <!-- commented in app-component.scss -->
      <span class="built-in">5. Inheritance </span><br />
      <!-- card, alert-card - ap.component.scss-->
      <div class="card">Hi!</div>

      <br />

      <div class="alert-card">Alert</div>
      <!-- H1 font-size -->
      <div class="mt-2">
        <h2>Bottom</h2>
      </div>
    </main>
  `,
  styleUrl: './scss-features.component.scss',
})
export class ScssFeaturesComponent {}
