import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  title = 'angular-pet-project';
  // products: IProduct[] = []
  loading = false
  term = ''

  constructor(
    public productService: ProductService,
    public modalService: ModalService
  ) {
  }

  ngOnInit(): void {
    // this.loading = true
    // this.products$ = this.productService.getAll().pipe(
    //   tap(() => this.loading = false)
    // )
    this.productService.getAll().subscribe((products) => {
      this.loading = false
    })
  }
}
