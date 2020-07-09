import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrls: ['./productslist.component.css']
})
export class ProductslistComponent implements OnInit {

  student=[
    {num:1,name:"GloryAutoTech",Email:"Rahulpatel@gmail.com"},
  ];

  constructor() {}

  ngOnInit(): void {
  }

}
