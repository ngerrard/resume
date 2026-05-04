import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobComponent } from './job.component';
import { IJob } from '../../../models/job';

describe('JobComponent', () => {
  let component: JobComponent;
  let fixture: ComponentFixture<JobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobComponent);
    component = fixture.componentInstance;
    component.job = {
      company: 'TestCo',
      title: 'Test Title',
      startDate: new Date('2020-01-01'),
      endDate: new Date('2020-02-01'),
      location: 'Test City',
      description: 'Test description',
      skills: [],
    } as IJob;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
