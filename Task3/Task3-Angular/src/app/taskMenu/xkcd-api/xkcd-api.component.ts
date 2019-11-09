import { Component, OnInit } from '@angular/core';
import {XkcdImporterService} from '../xkcd-importer.service'
import { xkcdcomic } from 'src/app/xkcdcomic';

@Component({
  selector: 'app-xkcd-api',
  templateUrl: './xkcd-api.component.html',
  styleUrls: ['./xkcd-api.component.css']
})
export class XkcdApiComponent implements OnInit {

  constructor(private xkcdimporter:XkcdImporterService) { }

  public comic:xkcdcomic=null;
  public id:number=null;

  ngOnInit() {
  }


  getComic() {
    this.xkcdimporter.getComicJSONP(this.id).subscribe(item => this.initcomic(item)  );
   } 

  initcomic(item){
    this.comic= new xkcdcomic(
        item.month,
        item.num,
        item.year,
        item.safe_title,
        item.transcript,
        item.alt,
        item.img,
        item.title,
        item.day
    )
  }

  getID(id:number){
    this.id=id;
    console.log(this.id);
  }
  }




  


