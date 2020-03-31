import { Component, Input, OnInit } from '@angular/core';
import { IJob } from '../../../models/job';

@Component({
  selector: 'app-resume-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {

  @Input() job: IJob;

  constructor() { }

  ngOnInit(): void {
  }

}
