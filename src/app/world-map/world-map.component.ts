import { Component } from '@angular/core';
import { MapApiService } from '../map-api/map-api.service';

@Component({
  selector: 'app-world-map',
  imports: [],
  templateUrl: './world-map.component.html',
  styleUrl: './world-map.component.css'
})
export class WorldMapComponent {
  selectedCountry: any=null;
  constructor(private mapService: MapApiService) {}

  onCountrySelect(event: MouseEvent) {
    const target = event.target as SVGAElement;
    if (target.tagName === 'path') {
      const countryId = target.id.toUpperCase(); 

      
      this.mapService.getCountryDetails(countryId).subscribe((data: any) => {
        if (data) {
          this.selectedCountry = data;
        } else {
          this.selectedCountry = { error: "Country data not available." };
        }
      });
    }
  }
}