import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Job } from '../models/job';
import { JOBHISTORY } from '../data/mock-jobs';

@Injectable({
  providedIn: 'root'
})
export class JobHistoryService {

  constructor() { }

  getJobs(): Observable<Job[]> {
    return new BehaviorSubject(JOBHISTORY);
  }
}
