import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generations',
  templateUrl: './generations.component.html',
  styleUrls: ['./generations.component.css']
})
export class GenerationsComponent implements OnInit {

  constructor() { }
  generation: string[] =["I","II","III", "IV","V","VI","VII"]
  ngOnInit(): void {
  }

}
