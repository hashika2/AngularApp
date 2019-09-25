import { Component } from '@angular/core';
import { NgModule,ElementRef, ViewChild, AfterViewInit, AfterContentInit} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
 // styleUrls: ['./app.component.sass'],
 // moduleId: module.id,    // fully resolved filename; defined at module load time
 
})

export class AppComponent {
 serverElements=[{type:'server',name:'Testserver',content:'just a text'}];
}
