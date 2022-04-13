import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {
  // title = 'project-angular-first';
  // fruits: string[]=[];

  fruits: any[]=[
    {
      name: 'pommes',
      price: 1,
      origin: 'FRANCE'
    },
    {
      name: 'poire',
      price: 1,
      origin: 'SPAIN'
    },
    {
      name: 'banane',
      price: 1,
      origin: 'BELGIUM'
    }
  ]

  // tittlButton: string="";


  constructor() {
  }

  ngOnInit(): void {
    console.log("AppComponent=> ngOnInit");
    // this.title="welcome";
    // this.fruits = ["mandarine","poire","Pomme"];
    // this.tittlButton="Click here !"

  }

  ngOnDestroy(): void {
    console.log("AppComponent=> ngOnDestroy");
  }
}
