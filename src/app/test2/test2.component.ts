import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2',
  template: '<h3>This is my first Angular Project</h3>',
 
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {
  count: number =0;
  firstName :string = 'Rocky'
  constructor() { }

  ngOnInit() {
  }

  onButtonClick(){
    let counts = this.count +=1;

    console.log(counts);
    
  }
  onKeyUp(value) {
    console.log('$event', value.target.value)
  }
}
