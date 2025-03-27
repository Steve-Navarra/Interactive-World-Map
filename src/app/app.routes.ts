import { Routes } from '@angular/router';
import { WorldMapComponent } from './world-map/world-map.component';

export const routes: Routes = [
  { path: '', redirectTo: 'world-map', pathMatch: 'full' },
  { path: 'world-map', component: WorldMapComponent },
];
