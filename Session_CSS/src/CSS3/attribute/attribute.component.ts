import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute',
  imports: [],
  template: `
    <article data-attribute="featured">
      <img
        src="https://images.unsplash.com/photo-1717297808345-b740e9846158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgyOTQyNzZ8&ixlib=rb-4.0.3&q=80&w=400"
        alt=""
      />
      <h2>Article Title</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum,
        numquam tempora! Unde delectus officiis maiores ullam natus reiciendis
        esse. Laboriosam ea provident aut explicabo fuga natus, labore maiores
        corrupti corporis!
      </p>
    </article>

    <article>
      <img
        src="https://images.unsplash.com/photo-1717297808345-b740e9846158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgyOTQyNzZ8&ixlib=rb-4.0.3&q=80&w=400"
        alt=""
        test="auto"
      />
      <h2>Article Title</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum,
        numquam tempora! Unde delectus officiis maiores ullam natus reiciendis
        esse. Laboriosam ea provident aut explicabo fuga natus, labore maiores
        corrupti corporis!
      </p>
    </article>

    <article>
      <img
        src="https://images.unsplash.com/photo-1717297808345-b740e9846158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgyOTQyNzZ8&ixlib=rb-4.0.3&q=80&w=400"
        alt=""
      />
      <h2>Article Title</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum,
        numquam tempora! Unde delectus officiis maiores ullam natus reiciendis
        esse. Laboriosam ea provident aut explicabo fuga natus, labore maiores
        corrupti corporis!
      </p>
    </article>
  `,
  styleUrl: './attribute.component.css',
})
export class AttributeComponent {}
