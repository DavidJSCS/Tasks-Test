import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dinamic-table',
  templateUrl: './dinamic-table.component.html',
  styleUrls: ['./dinamic-table.component.css']
})
export class DinamicTableComponent implements OnInit {

  constructor() { }

  //public plainTable:string="";
  public formatedTable:string="";



  ngOnInit() {
  }


  convert(plainTable:string){
    let tmpStr:string="";
    tmpStr=(plainTable.replace(/<[^>]*>?/g, ''));    
    tmpStr=(tmpStr.replace(/\|\|/g, '</td></tr><tr><td>'));
    tmpStr=(tmpStr.replace(/\|/g, '</td><td>'));


    
    this.formatedTable="<table border=1><tr><td>"+tmpStr+'</tr></td></table>';
    console.log(this.formatedTable);
  }

}
