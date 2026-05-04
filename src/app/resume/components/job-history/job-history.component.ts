import { Component } from '@angular/core';
import { JOBHISTORY } from '../../data/mock-jobs';
import { ResumeDataService } from '../../services/resume-data.service';
import { JobComponent } from './job/job.component';

@Component({
    selector: 'app-resume-job-history',
    templateUrl: './job-history.component.html',
    styleUrls: ['./job-history.component.scss'],
    standalone: true,
    imports: [JobComponent],
})
export class JobHistoryComponent {
  readonly jobs = this.jobHistoryService.getData(JOBHISTORY);

  constructor(private jobHistoryService: ResumeDataService) {}
}
