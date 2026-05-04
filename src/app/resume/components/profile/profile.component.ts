import { Component } from '@angular/core';
import { PROFILE } from '../../data/mock-profile';
import { ResumeDataService } from '../../services/resume-data.service';

@Component({
    selector: 'app-resume-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
    standalone: true,
})
export class ProfileComponent {
  readonly profile = this.profileService.getData(PROFILE);

  constructor(private profileService: ResumeDataService) {}
}
