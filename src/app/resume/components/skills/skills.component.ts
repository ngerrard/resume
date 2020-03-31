import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SKILLS } from '../../data/mock-skills';
import { ResumeDataService } from '../../services/resume-data.service';

@Component({
  selector: 'app-resume-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills$: Observable<string[]>;

  constructor(private skillsService: ResumeDataService) { }

  ngOnInit(): void {
    this.skills$ = this.skillsService.getData(SKILLS);
  }

}
