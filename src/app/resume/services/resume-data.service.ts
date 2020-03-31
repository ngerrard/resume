import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResumeDataService {

  constructor() { }

  getData<T>(data: T) {
    return new BehaviorSubject<T>(data);
  }
}
