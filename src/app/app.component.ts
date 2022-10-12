import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'to do list';
  welcome = ''

  passtochild = 'Passed data from parent to child'
  constructor() {
    setTimeout(() => {
      this.welcome = "Welcome";
    }, 1000);
  }

}


