import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tsk-conditional-button',
  templateUrl: './tsk-conditional-button.component.html',
  styleUrls: ['./tsk-conditional-button.component.css']
})
export class TskConditionalButtonComponent implements OnInit {

  constructor() { }

  public count:number=0;

  BClick() {
    this.count++;   
  }

  BReset() {
    this.count=0;   
  }

  ngOnInit() {
  }

}
