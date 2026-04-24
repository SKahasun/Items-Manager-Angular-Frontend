import { Component } from '@angular/core';
import { Item } from 'src/app/models/item';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
  item: Item[] = [];
  constructor(
    private svc:DataService
  ) { }
  
  ngOnInit() {
    this.svc.getItems().subscribe(x => {
      this.item = x;
    })
  }
}
