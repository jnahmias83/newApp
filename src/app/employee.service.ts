import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employeesArr: any = [
    { id: 1, name: 'Avi Bitter', age: 58 },
    { id: 2, name: 'Avri Gilad', age: 61 },
    { id: 3, name: 'Gal Gadot', age: 32 },
  ];

  constructor() { }

  getEmployees() : any {
    return this.employeesArr;
  }
}
