import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  feedback = {
    name: '',
    score: ''
  };

  onSubmit() {
    console.log('Feedback submitted:', this.feedback);
    
    // Reset the form fields
    this.feedback = {
      name: '',
      score: ''
    };
  }
}
