import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 nikit=[
    {id:1, name:"Watch", price:1000},
    {id:2, name:"laptop", price:25000},
    {id:3, name:"book",price:250}
    
    ];

  constructor() { }

  ngOnInit(): void {
   
  }

}
