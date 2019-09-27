import { Component, OnInit } from '@angular/core';
import {log } from '../../module/log';
import {LogService} from '../../services/log.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {
  isNew:boolean=true;
  id:string;
  text:string;
  date:any;

  constructor(private logService:LogService) { }

  ngOnInit() {
    //subcribe to the selectegLog observable
    this.logService.selectedLog.subscribe(log =>{
      if(log.id!==null){
        this.isNew=false;
        this.id=log.id;
        this.text=log.text;
        this.date=log.date;
      }
    })
  }
  onSubmit(){
    //check if new log
    if(this.isNew){
      //create a new log
      const newLog={
        id:this.generateId(),
        text:this.text,
        date:new Date()
      }
      //add log
      this.logService.addLog(newLog);
    }else{
      //create log to be update log
      const upLog={
        id:this.id,
        text:this.text,
        date:new Date()
      }
      //update log
      this.logService.updateLog(upLog);

    }
    
  }
  generateId(){
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

}
