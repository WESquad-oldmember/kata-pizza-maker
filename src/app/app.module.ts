import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PizzaMakerComponent } from './pizza-maker/pizza-maker.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaMakerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
