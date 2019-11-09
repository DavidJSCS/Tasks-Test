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
import { XkcdApiComponent } from './taskMenu/xkcd-api/xkcd-api.component';
import { XkcdImporterService } from './taskMenu/xkcd-importer.service';
import { HttpModule} from '@angular/http';
import { JsonpModule} from  '@angular/http';



@NgModule({
  declarations: [
    AppComponent,
    TskMenuComponent,
    TskConditionalButtonComponent,
    XkcdApiComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpModule,
    JsonpModule

  ],
  providers: [MessageServiceService,XkcdImporterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
