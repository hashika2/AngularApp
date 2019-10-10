import { Component, OnInit, ModuleWithComponentFactories } from '@angular/core';
import {Form} from '@angular/forms';

@Component({
  selector: 'app-create-component',
  templateUrl: './create-component.component.html',
  styleUrls: ['./create-component.component.css']
})
export class CreateComponentComponent implements OnInit {

  name = 'No Content';
  nodeModel = '';

  onPressed() {
    this.name = this.nodeModel;
  }
  constructor() { }

  ngOnInit() {
  }

}
