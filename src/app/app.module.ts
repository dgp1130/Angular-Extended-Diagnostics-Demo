import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent, FavoriteFruitComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    FavoriteFruitComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
