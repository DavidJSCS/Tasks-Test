import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';



// This service will promt messages depending the number in type
// 1 alert messagebox
// 2 SnackBar
// 3 console log
// default console error

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {

  constructor(private _snackBar: MatSnackBar) { }
  

  showMessage(MyMmessage: string, showType: number) {
    switch(showType) { 
          case 1: {
        alert(MyMmessage);
        break;
      } 
          case 2: {
        this._snackBar.open(MyMmessage, "", { duration: 2000, });
        break;
      } 
          case 3: {
        console.log(MyMmessage);
              
        break;
      } 
        default: {
        console.error(MyMmessage);; 
        break;
      }
     } 
   }


 }

