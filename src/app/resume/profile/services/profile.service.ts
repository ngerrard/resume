import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Profile } from '../models/profile';
import { PROFILE } from '../data/mock-profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  getProfile(): Observable<Profile> {
    return new BehaviorSubject(PROFILE);
  }
}
