import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  template: `
    <h2 class="text-2xl font-bold mb-4">Đây là trang liên hệ</h2>
    <p>Email: example@gmail.com</p>
  `,
})
export class ContactComponent {}