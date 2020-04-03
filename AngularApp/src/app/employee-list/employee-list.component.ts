import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { TestService } from '../test.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  public employees = []

  constructor(private _employeeService :TestService) { }

  ngOnInit() {
    this._employeeService.getEmployees()
      .subscribe(date => this.employees = date);

  }

}
