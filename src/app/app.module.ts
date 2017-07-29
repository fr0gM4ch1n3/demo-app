import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ListModule } from './list/list.module';
import { ShowModule } from './show/show.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    ListModule,
    ShowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
