import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResumeDataService {

  getData<T>(data: T) {
    return signal<T>(data);
  }
}
