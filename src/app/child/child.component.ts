import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() name : string = "";
  @Input() childCount: number = 0;

  @Output() countChanged : EventEmitter<number> = new EventEmitter();

  college : string = 'Hackeru';
  constructor() { }

  ngOnInit(): void {
  }

  inc(): void {
    this.childCount++;
    this.countChanged.emit(this.childCount);
  }

  dec(): void {
    this.childCount--;
    this.countChanged.emit(this.childCount);
  }

  print() :void {
    console.log(this.college);
  }
}
