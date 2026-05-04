import { Component } from '@angular/core';
import { JobHistoryComponent } from './components/job-history/job-history.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SkillsComponent } from './components/skills/skills.component';

@Component({
    selector: 'app-resume',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.scss'],
    standalone: true,
    imports: [ProfileComponent, SkillsComponent, JobHistoryComponent],
})
export class ResumeComponent {}
