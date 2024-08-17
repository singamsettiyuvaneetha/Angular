import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel

import { AppRoutingModule } from './app-routing.module'; // Import AppRoutingModule for routing
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BranchesComponent } from './branches/branches.component';
import { CoursesComponent } from './courses/courses.component'; // Ensure the path is correct
import { PlacementsComponent } from './placements/placements.component'; // Ensure the path is correct
import { YearComponent } from './year/year.component'; // Ensure the path is correct

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    BranchesComponent,
    CoursesComponent, // Declare CoursesComponent here
    PlacementsComponent, // Declare PlacementsComponent here
    YearComponent // Declare YearComponent here
  ],
  imports: [
    BrowserModule,
    FormsModule, // Import FormsModule for ngModel
    AppRoutingModule // Import routing module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
