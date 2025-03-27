import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapApiService {
  private baseUrl = 'https://api.worldbank.org/v2/';

  constructor(private http:HttpClient) { }

  getCountryDetails(code: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}country/${code}?format=json`).pipe(
      map((response) => {
        if (!response || response.length < 2 || !response[1]) {
          return null;
        }
        
        const country = response[1][0]; 
        return {
          name: country.name,
          capital: country.capitalCity || 'N/A',
          region: country.region.value || 'N/A',
          income: country.incomeLevel.value || 'N/A',
          latitude: country.latitude || 'N/A',
          longitude: country.longitude || 'N/A'
        };
      })
    );
  }
}
