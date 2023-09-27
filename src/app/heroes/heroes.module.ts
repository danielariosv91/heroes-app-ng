import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { MaterialModule } from '../material/material.module';
import { ListComponent } from './pages/list/list.component';
import { CardComponent } from './components/card/card.component';
import { HeroImagePipe } from './pipes/hero-image.pipe';
import { HeroComponent } from './pages/hero/hero.component';
import { LayoutHeroeComponent } from './pages/layout-heroe/layout-heroe.component';
import { NewComponent } from './pages/new/new.component';
import { SearchComponent } from './pages/search/search.component';


@NgModule({
  declarations: [
    LayoutHeroeComponent,
    HeroComponent,
    ListComponent,
    NewComponent,
    SearchComponent,
    CardComponent,
    HeroImagePipe
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    MaterialModule
  ]
})
export class HeroesModule { }
