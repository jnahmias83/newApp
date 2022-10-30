import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
employees : any = {};
  constructor(private employeeService:EmployeeService) {}

  ngOnInit(): void {
    this.employees = this.employeeService.getEmployees();
  }
}
