import { Component } from '@angular/core';
import { User } from './Models/user.model';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['angular', 'react'];
  userModel = new User('tin', 'angular', '6h', true);
  errorMessage = '';

  constructor(private _enrollmentService: EnrollmentService) {}

  onSubmit() {
    this._enrollmentService.enroll(this.userModel).subscribe(
      data => console.log('success', data),
      error => this.errorMessage = error.statusText
    )
  }
}
