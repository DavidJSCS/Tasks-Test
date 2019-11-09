import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Jsonp} from '@angular/http';
import { Observable } from 'rxjs';
import {xkcdcomic} from '../xkcdcomic';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
  
})
export class XkcdImporterService {
  private xkcdJSONUrl: string = 'api/hhttp://xkcd.com/ID/info.0.json';  // URL to web API using JSON

  private xkcdJSONPUrl: string = 'http://dynamic.xkcd.com/api-0/jsonp/comic/ID?callback=JSONP_CALLBACK'; // URL to web API using JSONP

  
  

  constructor(private http: Http,private jsonp: Jsonp) {
  }
    
  getComicJSONP(id:number): Observable<xkcdcomic> {
    if (id!=null){
    let finalURL=this.xkcdJSONPUrl.replace('ID',id.toString());
    console.log(finalURL)
    return this.jsonp.request(finalURL).pipe(map(res=>res.json()))
  }
  else{
    return null;
  }
}

    
 
  //this will not work cause CORS directives
  getComicJSON(): Observable<xkcdcomic> {
    return this.http.get(this.xkcdJSONUrl)
      .pipe(map(this.extractData))
      .pipe(catchError(this.handleError));
  }
  
  private extractData(res: Response) {
    let body = res.json().results.map(item => {
        return new xkcdcomic(
            item.month,
            item.num,
            item.year,
            item.safe_title,
            item.artranscript,
            item.alt,
            item.img,
            item.title,
            item.day
        );
    });

      return body;

  }



  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
