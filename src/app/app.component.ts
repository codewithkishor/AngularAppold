import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularApp';
  name = 'Kishor';
  empCount;
  data = {
    name: 'Codemind',
    dept: 'IT'
  }
  constructor(){
   // this.getValueFromServer();
  }
  
}

