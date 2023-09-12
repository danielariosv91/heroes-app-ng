import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-heroe',
  templateUrl: './layout-heroe.component.html',
  styles: [
  ]
})
export class LayoutHeroeComponent {
  public sidenavItems = [
    { label: 'Hero List', icon: 'label', url: './list' },
    { label: 'Add Hero', icon: 'add', url: './new-hero' },
    { label: 'Search Hero', icon: 'search', url: './search' },
  ]
}
