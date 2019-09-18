import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { NgModule } from '@angular/core';
import { FeedbackPageComponent } from './feedback-page.component';
import { RouterModule } from '@angular/router';
import { SlidesRoutes } from '@codelab/slides/src/lib/routing/slide-routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserWindowModule } from '@codelab/browser';

import { CommonModule } from '@angular/common';

import { SlidesModule } from '@codelab/slides';
import { environment } from '../../../../environments/environment';
import { DateRangeComponent } from './date-range/date-range.component';
import { FeedbackMessageTableComponent } from './feedback-message-table/feedback-message-table.component';

import {
  MatButtonModule, MatCardModule, MatMenuModule, MatSelectModule,
  MatTableModule, MatIconModule, MatDatepickerModule, MatNativeDateModule,
  MatInputModule, MatFormFieldModule, MatExpansionModule
} from '@angular/material';


const routes = RouterModule.forChild(SlidesRoutes.get(FeedbackPageComponent));

export const angularFire = AngularFireModule.initializeApp(
  environment.firebaseConfig
);

@NgModule({
  imports: [
    routes,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserWindowModule,
    angularFire,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SlidesModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatSelectModule,
    MatTableModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule

  ],
  declarations: [FeedbackPageComponent, DateRangeComponent, FeedbackMessageTableComponent],
  exports: [FeedbackPageComponent]
})
export class FeedbackPageModule { }
