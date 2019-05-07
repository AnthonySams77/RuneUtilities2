import { Component, OnInit } from '@angular/core';
import { ItemDataService, IItem } from '../item-data.service';

@Component({
  selector: 'app-bh-shop',
  templateUrl: './bh-shop.component.html',
  styleUrls: ['./bh-shop.component.css']
})
export class BhShopComponent implements OnInit {
  itemsArray:Array<IItem> = [];
  constructor(private itemDataService:ItemDataService) {
  }
  //parseFloat("59.7k".split("k")[0]) * 1000
  ngOnInit() {
  }

}
