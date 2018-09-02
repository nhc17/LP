import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';

import { NgForm, NgModel } from '@angular/forms'



@Component({
  selector: 'app-lp',
  templateUrl: './lp.component.html',
  styleUrls: ['./lp.component.css']
})

export class LpComponent implements OnInit {

  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }

      return value;
  }

@ViewChild('lpForm')
lpForm: NgForm;

  
 nameInput: NgModel;
  


 constructor() { }

  ngOnInit() {
    
  }



  addAlbum(lpForm: NgForm) {
    console.log('fields: ', this.lpForm.value);
    this.lpForm.resetForm();
  }
}
