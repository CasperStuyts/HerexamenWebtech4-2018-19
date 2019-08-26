import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-boete-component',
  templateUrl: './boete-component.component.html',
  styleUrls: ['./boete-component.component.css']
})
export class BoeteComponentComponent implements OnInit {
  items;
form;
  constructor(   private formBuilder: FormBuilder,) {


  this.form = this.formBuilder.group({
      name: '',
      address: ''
    });

   }

  ngOnInit() {
  }

}
