import { Component } from '@angular/core';

@Component({
  selector: 'app-placements',
  templateUrl: './placements.component.html',
  styleUrls: ['./placements.component.css']
})
export class PlacementsComponent {
  feedback = {
    company: '',
    lpa: ''
  };

  companies = [
    'Google',
    'IBM',
    'Microsoft',
    'Amazon',
    'Facebook',
    'Apple',
    'Netflix'
  ];
  onSubmit() {
    console.log('Placement feedback submitted:', this.feedback);
    this.feedback = {
      company: '',
      lpa: ''
    };
  }
}
