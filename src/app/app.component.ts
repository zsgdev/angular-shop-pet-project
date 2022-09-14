import { products as data } from './data/products';
import { IProduct } from './models/product';
import {Component, OnInit} from '@angular/core';
import {ProductService} from "./services/product.service";
import {Observable, tap} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-pet-project';
  // products: IProduct[] = []
  loading = false
  products$: Observable<IProduct[]>
  term = ''

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.loading = true
    this.products$ = this.productService.getAll().pipe(
      tap(() => this.loading = false)
    )
    // this.productService.getAll().subscribe((products) => {
    //   this.products = products
    //   this.loading = false
    // })
  }
}
