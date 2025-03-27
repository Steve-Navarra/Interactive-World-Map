import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WorldMapComponent } from "./world-map/world-map.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, WorldMapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Interactive_World_Map';
}
