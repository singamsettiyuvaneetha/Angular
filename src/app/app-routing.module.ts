import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BranchesComponent } from './branches/branches.component';
import { CoursesComponent } from './courses/courses.component';
import { PlacementsComponent } from './placements/placements.component';
import { YearComponent } from './year/year.component';

const routes: Routes = [
  {path:'branches',component:BranchesComponent},
  { path:'courses',component:CoursesComponent},
  { path:'placements',component:PlacementsComponent},
  { path:'year',component:YearComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
