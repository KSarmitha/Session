import { Component } from '@angular/core';

@Component({
  selector: 'app-pseudo-element',
  imports: [],
  template: `
    <section class="element">
      <h3>1. Using <code>::before</code> to add content</h3>
      <p class="before-element">This is a paragraph with a pseudo-element before it.</p>

      <h3>2. Using <code>::after</code> to add content</h3>
      <p class="after-element">This is a paragraph with a pseudo-element after it.</p>

      <h3>3. Combining <code>::before</code> and <code>::after</code></h3>
      <p class="before-after-element">This paragraph has both pseudo-elements before and after it.</p>

      <h3>4. Combining <code>::first-letter</code> and <code>::first-line</code> </h3>
      <p class="first-letter-element">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum,
        numquam tempora! Unde delectus officiis maiores ullam natus reiciendis
        esse. Laboriosam ea provident aut explicabo fuga natus, labore maiores
        corrupti corporis!
      </p>
    </section>
  `,
  styleUrl: './pseudo-element.component.css'
})
export class PseudoElementComponent {

}
