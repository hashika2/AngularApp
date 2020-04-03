import { Component, OnInit } from '@angular/core';
import { TestService} from '../test.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  public employees= []

  constructor(private _employeeService : TestService) { }

  ngOnInit() {
    this._employeeService.getEmployees()
      .subscribe(date => this.employees = date);

  }

}
