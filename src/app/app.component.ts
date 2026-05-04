import { Component } from '@angular/core';
import { ResumeComponent } from './resume/resume.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [ResumeComponent],
})
export class AppComponent {
  title = 'resume';
}
