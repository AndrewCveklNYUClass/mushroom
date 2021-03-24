import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
//import 'rxjs/add/operator/map';
import { environment } from '../environments/environment';
import Mushroom from './models/mushroom.model';

@Injectable({
  providedIn: 'root'
})
export class MushroomService {
  
  mushroomsUrl = `${environment.apiUrl}/mushrooms`;

  constructor(private http: HttpClient) { }
  
  public getMushrooms(): Observable<Mushroom[]> {
    return this.http
      .get(this.mushroomsUrl)
      .pipe(map(response => response['data'] as Mushroom[]));
  }
  
  public getMushroomById(id: string): Observable<Mushroom> {
    return this.http
    .get(`${this.mushroomsUrl}/${id}`)
    .pipe(map(response => response['data'] as Mushroom));
  }

}
