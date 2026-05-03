import { Component } from '@angular/core';
import { JOBHISTORY } from '../../data/mock-jobs';
import { ResumeDataService } from '../../services/resume-data.service';

@Component({
    selector: 'app-resume-job-history',
    templateUrl: './job-history.component.html',
    styleUrls: ['./job-history.component.scss'],
    standalone: false
})
export class JobHistoryComponent {
  readonly jobs = this.jobHistoryService.getData(JOBHISTORY);

  constructor(private jobHistoryService: ResumeDataService) {}
}
