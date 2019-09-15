import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserWindowModule } from '@codelab/browser';
import { CommonModule } from '@angular/common';
import { SlidesModule } from '@codelab/slides';
import { environment } from '../../../environments/environment';
import { FeedbackMessageTableComponent } from './feedback-message-table/feedback-message-table.component';
import { MatButtonModule, MatCardModule, MatMenuModule, MatSelectModule, MatTableModule, MatIconModule, MatDatepickerModule, MatNativeDateModule, MatInputModule, MatFormFieldModule, MatExpansionModule } from '@angular/material';
import { FeedbackComponent } from './feedback.component';

export const angularFire = AngularFireModule.initializeApp(
  environment.firebaseConfig
);

@NgModule({
  imports: [
    RouterModule,
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
  declarations: [FeedbackComponent, FeedbackMessageTableComponent],
  exports: [FeedbackComponent],
  entryComponents: [FeedbackComponent],
})

export class FeedbackModule {}

