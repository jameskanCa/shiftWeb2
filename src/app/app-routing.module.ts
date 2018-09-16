import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { RatingComponent } from './rating/rating.component';


const routes: Routes = [
  {
    //initial route
    path: 'Main',
    // component property lets us specify which component resides at that path.
    component: MainScreenComponent,
  },
  {
    //initial route
    path: 'Approval',
    // component property lets us specify which component resides at that path.
    component: RatingComponent,
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
