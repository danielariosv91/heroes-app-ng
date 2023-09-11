import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../auth/pages/layout/layout.component';
import { NewComponent } from './pages/new/new.component';
import { SearchComponent } from './pages/search/search.component';
import { ListComponent } from './pages/list/list.component';
import { HeroComponent } from './pages/hero/hero.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'new', component: NewComponent },
      { path: 'search', component: SearchComponent },
      { path: 'edit/:id', component: NewComponent },
      { path: 'list', component: ListComponent },
      { path: ':id', component: HeroComponent },
      { path: '**', redirectTo: 'list' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
