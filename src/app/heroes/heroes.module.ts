import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { MaterialModule } from '../material/material.module';
import { ListComponent } from './pages/list/list.component';
import { CardComponent } from './components/card/card.component';


@NgModule({
  declarations: [
    ListComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    MaterialModule
  ]
})
export class HeroesModule { }
