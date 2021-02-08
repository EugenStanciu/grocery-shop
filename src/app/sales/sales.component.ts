import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/model/product.model';
import { StateService } from './../shared/services/state.service';
@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss'],
})
export class SalesComponent implements OnInit {
  constructor(private stateService: StateService) {}

  productDialog: boolean;
  products: Product[] = [];
  products2: Product[] = [];
  product: Product;
  lastYearTotal: number;
  submitted: boolean;
  thisYearTotal: number;
  columns: [];

  ngOnInit() {
    this.stateService.dataReady.subscribe((response) => {
      if (response) {
        this.products = this.stateService.products;
      }
    });

    this.stateService.columnReady.subscribe((response) => {
      if (response) {
        this.columns = this.stateService.columns;
      }
    });
  }

  openNew() {
    this.product = new Product();
    this.submitted = false;
    this.productDialog = true;
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }
}
