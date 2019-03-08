import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {ReviewService} from './services/review.service';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatInputModule,
  MatMenuModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatExpansionModule} from '@angular/material';
import { ReviewListComponent } from './review-list/review-list.component';
import { ReviewUpdateComponent } from './review-update/review-update.component';
import { ReviewAddComponent } from './review-add/review-add.component';
import { UpcomingUpdateComponent } from './upcoming-update/upcoming-update.component';
import { UpcomingListComponent } from './upcoming-list/upcoming-list.component';
import { UpcomingAddComponent } from './upcoming-add/upcoming-add.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
  {
    path: 'review',
    component: ReviewListComponent
  },
  {
    path: 'addreview',
    component: ReviewAddComponent
  },
  {
    path: 'edit/:id',
    component: ReviewUpdateComponent
  },
  {
    path: 'addUpcoming',
    component: UpcomingAddComponent
  },
  {
  path: 'upcoming',
  component: UpcomingListComponent
  },
  {
    path: 'edit2/:id',
    component: UpcomingUpdateComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }

];


@NgModule({
  declarations: [
    AppComponent,
    ReviewListComponent,
    ReviewUpdateComponent,
    ReviewAddComponent,
    UpcomingUpdateComponent,
    UpcomingListComponent,
    UpcomingAddComponent,
    NotFoundComponent

  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatMenuModule
  ],
  providers: [ReviewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
