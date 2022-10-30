import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employees-table',
  templateUrl: './employees-table.component.html',
  styleUrls: ['./employees-table.component.css']
})
export class EmployeesTableComponent implements OnInit {
employees : any = {};
  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.employees = this.employeeService.getEmployees();
  }
}
