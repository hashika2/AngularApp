import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.sass']
})
export class CockpitComponent implements OnInit {
  newServerName='';
  newServerContent='';
  serverElements: any;

  constructor() { }

  ngOnInit() {
  }
  onAddServer(){
    this.serverElements.push({
      type:'server',
      name:this.newServerName,
      content:this.newServerContent
    })
  }

  onRemoveServer(){
    this.serverElements.push({
      type:'blueprint',
      name:this.newServerName,
      content:this.newServerContent
    })
  }
}
