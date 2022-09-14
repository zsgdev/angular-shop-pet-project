import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  form = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ])
  })

  get title() {
    return this.form.controls
  }

  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.form.value)
  }

}
