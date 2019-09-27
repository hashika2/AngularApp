import { Injectable } from '@angular/core';
import{log} from '../module/log';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

import { Observable } from 'rxjs';
import{of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogService {
logs:log[];

private logSource=new BehaviorSubject<log>({id:null,text:null,date:null});

selectedLog=this.logSource.asObservable();

  constructor() { 
    this.logs=[
      {id:'1',text:'generated components', date:new Date('9/26/2019 1:22:23')},
      {id:'1',text:'remove components', date:new Date('9/26/2019 1:22:23')},
      {id:'1',text:'generated components', date:new Date('9/26/2019 1:22:23')}
    
    ]
  }
  getLogs(){
    return this.logs;
  }

  setFormLog(log:log){
    this.logSource.next(log);
  }
  addLog(log:log){
    this.logs.unshift(log);
  }
  updateLog(log:log){
    this.logs.forEach((cur,index)=>{
      if(log.id==cur.id){
        this.logs.splice(index,1);
      }
    });
    this.logs.unshift(log);
  }

  deleteLog(log:log){
    this.logs.forEach((cur,index)=>{
      if(log.id==cur.id){
        this.logs.splice(index,1);
      }
    });
    
  }
}
