import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume.component';
import { ProfileComponent } from './profile/profile.component';
import { JobHistoryComponent } from './job-history/job-history.component';
import { SkillsComponent } from './skills/skills.component';
import { JobComponent } from './job-history/job/job.component';



@NgModule({
  declarations: [ResumeComponent, ProfileComponent, JobHistoryComponent, SkillsComponent, JobComponent],
  imports: [
    CommonModule
  ],
  entryComponents: [ProfileComponent, JobHistoryComponent, SkillsComponent],
  exports: [ResumeComponent]
})
export class ResumeModule { }
