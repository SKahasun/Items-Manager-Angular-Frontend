import { Component } from '@angular/core';
import { Item } from 'src/app/models/item';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent {
  item: Item = new Item();
  constructor(
    private svc:DataService
  ) { }
  
  onSubmitForm() {
    this.svc.postItem(this.item).subscribe(x => console.log("item added")
    )
  }

}
