import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from './models/job';
import { JobHistoryService } from './services/job-history.service';

@Component({
  selector: 'app-resume-job-history',
  templateUrl: './job-history.component.html',
  styleUrls: ['./job-history.component.scss']
})
export class JobHistoryComponent implements OnInit {
  jobs$: Observable<Job[]>;

  constructor(private jobHistoryService: JobHistoryService) { }

  ngOnInit(): void {
    this.jobs$ = this.jobHistoryService.getJobs();
  }

}
