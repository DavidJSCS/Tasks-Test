import { Component, OnInit } from '@angular/core';
import { MessageServiceService } from '../message-service.service';




@Component({
  selector: 'app-tsk-menu',
  templateUrl: './tsk-menu.component.html',
  styleUrls: ['./tsk-menu.component.css']
})
export class TskMenuComponent implements OnInit {

  constructor(private messager:MessageServiceService){}

  ngOnInit() {
  }

}
