import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lp';

  albumList: string[] = [];

  returnItem = new EventEmitter<string>();

  newItem(item: string) {

    for (let i of this.albumList) {
      if (item == i)
      return;
    }
    
    console.log('>>>> new album: ', item);
    this.albumList.push(item);
  }

  deleteItem(item: string) {
    console.log('deleting album: ', item);
    this.returnItem.next(item);
  }
}
