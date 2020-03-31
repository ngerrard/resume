import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PROFILE } from '../../data/mock-profile';
import { IProfile } from '../../models/profile';
import { ResumeDataService } from '../../services/resume-data.service';

@Component({
  selector: 'app-resume-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profile$: Observable<IProfile>;

  constructor(private profileService: ResumeDataService) { }

  ngOnInit(): void {
    this.profile$ = this.profileService.getData(PROFILE);
  }

}
