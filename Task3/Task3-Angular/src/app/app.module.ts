import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TskMenuComponent } from './taskMenu/tsk-menu/tsk-menu.component';
import { TskConditionalButtonComponent } from './taskMenu/tsk-conditional-button/tsk-conditional-button.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MessageServiceService } from './taskMenu/message-service.service';



@NgModule({
  declarations: [
    AppComponent,
    TskMenuComponent,
    TskConditionalButtonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule,
    MatSnackBarModule

  ],
  providers: [MessageServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
