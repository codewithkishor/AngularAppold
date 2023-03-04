import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  title: string = 'Top 3 Bollywood Movies';

  // movies: Movie [] = [
  //   {title: '3 idiots', director:'Rajkumar', cast:'Amir', releaseDate:'2009' },
  //   {title: 'Rayba', director:'Rajkumar', cast:'Amir', releaseDate:'2009' }
  // ]
  constructor() { }

  ngOnInit() {
  }

}
