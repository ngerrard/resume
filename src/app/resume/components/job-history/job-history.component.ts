import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { JOBHISTORY } from '../../data/mock-jobs';
import { IJob } from '../../models/job';
import { ResumeDataService } from '../../services/resume-data.service';

@Component({
  selector: 'app-resume-job-history',
  templateUrl: './job-history.component.html',
  styleUrls: ['./job-history.component.scss']
})
export class JobHistoryComponent implements OnInit {
  jobs$: Observable<IJob[]>;

  constructor(private jobHistoryService: ResumeDataService) {}

  ngOnInit(): void {
    this.jobs$ = this.jobHistoryService.getData(JOBHISTORY);
  }
}
