import { Component, OnInit } from '@angular/core';
import { Profile } from './models/profile';
import { ProfileService } from './services/profile.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-resume-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profile$: Observable<Profile>;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profile$ = this.profileService.getProfile();
  }

}
