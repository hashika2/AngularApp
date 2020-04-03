import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  public name = "Hashika";
  public array = ["test1","test2","test3"];
  @Input() public appDate;
  @Output() public childEvent = new EventEmitter();

  public empployees =[
    {num:1,name:"hashika",email:"hashi@gmail.com"},
    {num:2,name:"kamal",email:"hashi@gmail.com"},
    {num:3,name:"anil",email:"hashi@gmail.com"}
  ]

  constructor() { }

  ngOnInit() {
  }
  fireEvent() {
    this.childEvent.emit('hello friend')
  }
  getName(){
    return "Hello friend";
  }

}
