import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { SKILLS } from '../data/mock-skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor() { }

  getSkills(): Observable<string[]> {
    return new BehaviorSubject(SKILLS);
  }
}
