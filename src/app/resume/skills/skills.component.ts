import { Component, OnInit } from '@angular/core';
import { SkillsService } from './services/skills.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-resume-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills$: Observable<string[]>;

  constructor(private skillsService: SkillsService) { }

  ngOnInit(): void {
    this.skills$ = this.skillsService.getSkills();
  }

}
