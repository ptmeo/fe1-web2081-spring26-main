import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterLink],
  template: `
    <h2 class="text-2xl font-bold mb-4">Danh sách sản phẩm</h2>
    <ul class="list-disc list-inside text-left max-w-xs mx-auto">
      <li class="mb-2">
        <a routerLink="/products/laptop" class="text-blue-500 hover:underline">Laptop</a>
      </li>
      <li class="mb-2">
        <a routerLink="/products/phone" class="text-blue-500 hover:underline">Phone</a>
      </li>
      <li class="mb-2">
        <a routerLink="/products/tablet" class="text-blue-500 hover:underline">Tablet</a>
      </li>
    </ul>
  `,
})
export class ProductListComponent {}