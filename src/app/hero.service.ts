import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  
  messageSource = new BehaviorSubject<string>("default message");
  mushroomIdentified = this.messageSource.asObservable();

  constructor() { }
  
  changeMessage(message: string) {
    this.messageSource.next(message);
  }
}
