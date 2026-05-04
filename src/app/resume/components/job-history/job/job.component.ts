import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IJob } from '../../../models/job';

@Component({
    selector: 'app-resume-job',
    templateUrl: './job.component.html',
    styleUrls: ['./job.component.scss'],
    standalone: true,
    imports: [DatePipe],
})
export class JobComponent {

  @Input() job: IJob;
}
