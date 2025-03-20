import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { JobHistoryComponent } from './components/job-history/job-history.component';
import { JobComponent } from './components/job-history/job/job.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ResumeComponent } from './resume.component';



@NgModule({
    declarations: [ResumeComponent, ProfileComponent, JobHistoryComponent, SkillsComponent, JobComponent],
    imports: [
        CommonModule
    ],
    exports: [ResumeComponent]
})
export class ResumeModule { }
