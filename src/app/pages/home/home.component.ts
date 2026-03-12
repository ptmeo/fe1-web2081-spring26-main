import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <h1 class="text-4xl font-bold mb-4">Chào mừng đến với WEB2081 Angular</h1>
    <p>Đây là trang chủ của ứng dụng.</p>
  `,
})
export class HomeComponent {}