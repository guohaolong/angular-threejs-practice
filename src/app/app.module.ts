import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IndexComponent } from './components/index/index.component';
import { HouseViewComponent } from './components/house-view/house-view.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HouseViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
