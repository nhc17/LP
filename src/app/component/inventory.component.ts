import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface AlbumItem {
  labela: string;
  labelb: string;
  labelc: string;
  image: string;
 
}

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})

export class InventoryComponent implements OnInit {

  inventory: AlbumItem[] = [
  { labela: "Blue Hawaii", labelb: "Elvis Presley", labelc: "Rating: 5", image:"../elvisHawaii.jpg" },
  { labela: "Abbey", "labelb": "Beatles", labelc: "Rating: 10", image:"../beatlesAbbey.jpg"},
  { labela: "A Hard Day's Night", labelb: "Beatles", labelc: "Rating 4", image:"../beatlesHarday.jpg"}
];



@Input()
newInventory: EventEmitter<string>;

@Output()
itemSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.newInventory.subscribe(
      (item) => {
        console.log('New Album to be added: ', item);
        
      }
    );
  }

  processItem(n: number) {
   
    console.log('inventory: ', this.inventory[n].labela);
    this.itemSelected.next(this.inventory[n].labela)
  }
  
  
}


