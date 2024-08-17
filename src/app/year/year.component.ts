import { Component } from '@angular/core';

@Component({
  selector: 'app-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.css']
})
export class YearComponent {
  feedback = {
    rating: '',
    message: ''
  };

  onSubmit() {
    console.log('Feedback submitted:', this.feedback);
    
    // Reset the form fields
    this.feedback = {
      rating: '',
      message: ''
    };
  }
}
