import { Component } from '@angular/core';

@Component({
  selector: 'app-tailwind',
  imports: [],
  template: `
    <nav class="bg-gray-800 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <a href="#" class="text-lg font-bold">MySite</a>
          </div>

          <!-- Hamburger Icon (Mobile) -->
          <div class="md:hidden">
            <input type="checkbox" id="menu-toggle" class="peer hidden" />
            <label
              for="menu-toggle"
              class="block cursor-pointer p-2 rounded-md hover:bg-gray-700"
            >
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </label>
          </div>

          <!-- Desktop Menu -->
          <div class="hidden md:flex space-x-4">
            <a href="#" class="hover:bg-gray-700 px-3 py-2 rounded-md">Home</a>
            <a href="#" class="hover:bg-gray-700 px-3 py-2 rounded-md">About</a>
            <a href="#" class="hover:bg-gray-700 px-3 py-2 rounded-md"
              >Services</a
            >
            <a href="#" class="hover:bg-gray-700 px-3 py-2 rounded-md"
              >Contact</a
            >
          </div>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div class="peer-checked:block hidden md:hidden bg-gray-700">
        <a href="#" class="block px-4 py-2 text-sm hover:bg-gray-600">Home</a>
        <a href="#" class="block px-4 py-2 text-sm hover:bg-gray-600">About</a>
        <a href="#" class="block px-4 py-2 text-sm hover:bg-gray-600"
          >Services</a
        >
        <a href="#" class="block px-4 py-2 text-sm hover:bg-gray-600"
          >Contact</a
        >
      </div>
    </nav>
  `,
  styles: ``,
})
export class TailwindComponent {}
