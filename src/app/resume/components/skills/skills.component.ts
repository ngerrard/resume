import { Component } from '@angular/core';
import { SKILLS } from '../../data/mock-skills';
import { ResumeDataService } from '../../services/resume-data.service';

@Component({
    selector: 'app-resume-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss'],
    standalone: false
})
export class SkillsComponent {
  readonly skills = this.skillsService.getData(SKILLS);

  constructor(private skillsService: ResumeDataService) {}
}
