import { Component } from '@angular/core';

@Component({
  selector: 'app-pseudo-selector',
  imports: [],
  template: `
     <section class="example">
        <h2>1. :hover</h2>
        <button class="hover-example">Hover over me!</button>

        <h2>2. :focus</h2>
        <input type="text" class="focus-example" placeholder="Click to focus on me!">

        <h2>3. :nth-child</h2>
        <ul class="list-example">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
        </ul>
    </section>
  `,
  styleUrl: './pseudo-selector.component.css'
})
export class PseudoSelectorComponent {

}
