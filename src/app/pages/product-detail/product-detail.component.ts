import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="productName">
      <h2 class="text-3xl font-bold">Đây là trang {{ productName | titlecase }}</h2>
    </div>
  `,
})
export class ProductDetailComponent implements OnInit {
  // inject ActivatedRoute để lấy tham số từ URL
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  productName = '';

  ngOnInit(): void {
    // Lấy tham số 'id' từ URL
    this.productName = this.activatedRoute.snapshot.params['id'];
  }
}