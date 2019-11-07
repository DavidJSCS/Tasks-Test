import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tsk-menu',
  templateUrl: './tsk-menu.component.html',
  styleUrls: ['./tsk-menu.component.css']
})
export class TskMenuComponent implements OnInit {

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
