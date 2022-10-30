import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'newApp';
  webName: string = 'Hackeru';

  count: number = 0;

  @ViewChild('avi', { static: true }) child!: ChildComponent;

  inc(): void {
    this.count++;
  }

  dec(): void {
    this.count--;
  }

  countChangedHandler(newCount: number): void {
    this.count = newCount;
  }
}