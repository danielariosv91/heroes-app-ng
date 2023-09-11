import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './auth/pages/layout/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutHeroeComponent } from './heroes/pages/layout-heroe/layout-heroe.component';

@NgModule({
  declarations: [
    AppComponent, 
    LayoutHeroeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
