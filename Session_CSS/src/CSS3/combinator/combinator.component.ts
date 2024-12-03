import { Component } from '@angular/core';

@Component({
  selector: 'app-combinator',
  imports: [],
  template: `
    <!-- Descendant Combinator -->
    <h3>Descendant Combinator (A B)</h3>
    <div class="descendant">
      <div>
        <p>This paragraph is inside a div, so it's red.</p>
      </div>
    </div>
    <p>This paragraph is not styled.</p>


    <!-- Child Combinator -->
    <h3>Child Combinator (A > B)</h3>
    <div class="child">
      <p>This paragraph is directly inside the div, so it's blue.</p>
      <div>
        <p>This paragraph is nested, so it's not styled.</p>
      </div>
    </div>


    <!-- Next Sibling Combinator -->
    <h3>Next Sibling Combinator (A + B)</h3>
    <div class="adjacent">Div before a paragraph</div>
    <p>This paragraph is adjacent to the div, so it's green.</p>
    <p>This paragraph is not styled.</p>


    <!-- Subsequent-sibling Combinator -->
    <h3>Subsequent-sibling Combinator (A ~ B)</h3>
    <div class="general">Div before several paragraphs</div>
    <p>This paragraph is a sibling of the div, so it's purple.</p>
    <p>This paragraph is also a sibling, so it's purple too.</p>


    <!-- Example -->
    <ul class="items">
      <li>Item One</li>
      <li>Item Two</li>
        <ul>
          <li>Item 2a</li>
          <li>Item 2b</li>
        </ul>
      <li>Item Three</li>
    </ul>
  `,
  styleUrl: './combinator.component.css',
})
export class CombinatorComponent {}
