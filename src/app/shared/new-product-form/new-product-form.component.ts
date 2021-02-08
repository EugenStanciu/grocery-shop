import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Product } from '../model/product.model';
import { StateService } from './../services/state.service';
@Component({
  selector: 'app-new-product-form',
  templateUrl: './new-product-form.component.html',
  styleUrls: ['./new-product-form.component.scss'],
})
export class NewProductFormComponent implements OnInit {
  submitted: boolean;
  product: Product;
  products: Product[] = [];

  constructor(private stateService: StateService) {}

  ngOnInit(): void {
    this.product = new Product();
    this.submitted = false;
  }

  saveProduct(isValidForm, newProductForm: NgForm) {
    this.submitted = true;
    if (isValidForm) {
      this.stateService.saveProduct(this.product);
      this.submitted = false;
      this.product = new Product();
      newProductForm.resetForm();
    }
  }
}
