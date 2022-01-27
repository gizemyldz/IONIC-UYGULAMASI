import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root'
})
export class CartService {
 
  private data = [
    {
      category: 'Menüler',
      expanded: true,
      products: [
        { id: 0, name: 'Whooper', price: '29'  },
        { id: 1, name: 'Big King', price: '28' },
        { id: 2, name: 'Cheeseburger', price: '24' },
        { id: 3, name: 'Chicken', price: '26' }
      ]
    },
    {
      category: 'Çıtır Lezzetler',
      products: [
        { id: 4, name: 'Çıtır Peynir', price: '11' },
        { id: 5, name: 'Chicken Tender', price: '10' }
      ]
    },
    {
      category: 'Delight Ürünler',
      products: [
        { id: 6, name: 'Hot Wrap Menü', price: '16' },
        { id: 7, name: 'Tavuklu Salata', price: '17' },
        { id: 8, name: 'Akdeniz salata', price: '17' }
      ]
    }
  ];
 
  private cart = [];
 
  constructor() { }
 
  getProducts() {
    return this.data;
  }
 
  getCart() {
    return this.cart;
  }
 
  addProduct(product) {
    this.cart.push(product);
  }
}

/*
import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root'
})
export class CartService {
 
  private data = [
    {
      category: 'Menüler',
      expanded: true,
      products: [
        { id: 0, name: 'Whooper Menü', price: '29,95₺' },
        { id: 1, name: 'Big King Menü', price: '28,50₺' },
        { id: 2, name: 'Cheeseburger Menü', price: '24,50₺' },
        { id: 3, name: 'Chicken  Menü', price: '26,50₺' }
      ]
    },
    {
      category: 'Çıtır Lezzetler',
      products: [
        { id: 4, name: 'Çıtır Peynir(6 adet)', price: '11,95₺' },
        { id: 5, name: 'Chicken Tenders(4 adet)', price: '9,95₺' },
        { id: 6, name: 'Chicken Wings(8 adet)', price: '14,50₺' }
      ]
    },
    {
      category: 'Delight Ürünler',
      products: [
        { id: 7, name: 'Hot Wrap Menü ', price: '15,95₺' },
        { id: 8, name: 'Tavuklu Salata', price: '16,95₺' },
        { id: 9, name: 'Akdeniz Salata', price: '16,95₺' }
      ]
    }
  ];
 
  private cart = [];
 
  constructor() { }
 
  getProducts() {
    return this.data;
  }
 
  getCart() {
    return this.cart;
  }
 
  addProduct(product) {
    this.cart.push(product);
  }
}  */
/*
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
} */
