import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MushroomIdentificationComponent } from './mushroom-identification/mushroom-identification.component';
import { HomeComponent } from './home/home.component';
import { MushroomService } from './mushroom.service';


@NgModule({
  declarations: [
    AppComponent,
    MushroomIdentificationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MushroomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
