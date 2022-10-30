import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  amountOfStudents : number = 2;
  myName : string = "Yonathan Nahmias"
  studentsArr : any = [
    {name:"Yossi",age:45},
    {name:"Hagit",age:32},
    {name:"Avi Bitter",age:50},
  ];

  studentsNames : string[] = ["Yossi","Hagit"];
  animalsNames : Array<string> = ["Dog","Cat"];

  IsTeacher : boolean = false;
  IsStudent : Boolean = true;

  title : string = "Hello";

  numbers : Array<number> = [10,20,30];

  x: Number = 2;
  y: Number = 0;

  giraffeUrl: string =
  'https://img.freepik.com/premium-vector/giraffe-watercolor_119039-27.jpg?w=2000';

  constructor() { 
    this.printMyName('Yonathan');
  }

  ngOnInit(): void {
  }

  printMyName(name:string):void {
     console.log(`My name is: ${name}`);
  }

  buttonClicked (): void {
    console.log('Button clicked');
  }
}
