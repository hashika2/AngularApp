import { Component, OnInit } from '@angular/core';
import { TestService} from '../test.service';
import { error } from 'protractor';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  public employees= [];
  public errorMessage;

  constructor(private _employeeService : TestService) { }

  ngOnInit() {
    this._employeeService.getEmployees()
      .subscribe(date => this.employees = date,
                 error=> this.errorMessage = error);

  }

}
