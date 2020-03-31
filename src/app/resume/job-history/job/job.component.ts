import { Component, OnInit, Input } from '@angular/core';
import { Job } from '../models/job';

@Component({
  selector: 'app-resume-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {

  @Input() job: Job;

  constructor() { }

  ngOnInit(): void {
  }

}