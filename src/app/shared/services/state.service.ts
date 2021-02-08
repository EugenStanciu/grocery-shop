import { Injectable, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class StateService implements OnInit {
  product: Product;
  products: Product[] = [];
  columns: [];
  dataReady = new BehaviorSubject(false);
  columnReady = new BehaviorSubject(false);
  user = new BehaviorSubject(null);

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {
    this.getProducts().then((data) => {
      this.products = data;
      this.dataReady.next(true);
    });

    this.getColumns().then((data) => {
      this.columns = data;
      this.columnReady.next(true);
    });
  }

  ngOnInit() {}

  saveProduct(product: Product) {
    this.products.push(product);
    this.product = new Product();
    this.messageService.add({
      severity: 'success',
      summary: 'Add new product',
      detail: 'New product was added successfuly!',
    });
  }

  getProducts() {
    return this.http
      .get<any>('assets/potato_sales.json')
      .toPromise()
      .then((res) => <Product[]>res.data)
      .then((data) => {
        return data;
      });
  }
  getColumns() {
    return this.http
      .get<any>('assets/potato_sales.json')
      .toPromise()
      .then((res) => <[]>res.column)
      .then((data) => {
        return data;
      });
  }
}
