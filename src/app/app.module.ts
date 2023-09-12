import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from './auth/pages/layout/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutHeroeComponent } from './heroes/pages/layout-heroe/layout-heroe.component';
import { MaterialModule } from './material/material.module';
import { HeroesModule } from './heroes/heroes.module';


@NgModule({
  declarations: [
    AppComponent,
    LayoutHeroeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    SharedModule,
    MaterialModule,
    HeroesModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
