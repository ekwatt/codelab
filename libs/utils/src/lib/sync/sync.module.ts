import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule, MatInputModule, MatMenuModule, MatSelectModule, MatTabsModule } from '@angular/material';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { LoginService } from '@codelab/firebase-login';
import { AllViewerValuesDirective } from '@codelab/utils/src/lib/sync/directives/all-viewer-values.directive';
import { SyncPlaygroundComponent } from './sync-playground/sync-playground.component';
import { SyncPlaygroundPresenterComponent } from './sync-playground/sync-playground-presenter/sync-playground-presenter.component';
import { SyncPlaygroundTestComponent } from './sync-playground/sync-playground-test/sync-playground-test.component';
import { SlidesModule } from '@codelab/slides';
import { FormsModule } from '@angular/forms';
import { QuestionsModule } from '@codelab/utils/src/lib/sync/components/questions/questions.module';
import { SyncDirectivesModule } from '@codelab/utils/src/lib/sync/directives/sync-directives.module';
import { SyncPollModule } from '@codelab/utils/src/lib/sync/components/poll/sync-poll.module';
import { SyncRegistrationModule } from '@codelab/utils/src/lib/sync/components/registration/sync-registration.module';
import { SyncButtonModule } from '@codelab/utils/src/lib/sync/sync-button/sync-button.module';
import { SyncSessionsModule } from '@codelab/utils/src/lib/sync/components/sync-sessions/sync-sessions.module';
import { LeaderboardModule } from '@codelab/utils/src/lib/sync/components/poll/sync-poll-presenter/leaderboard/leaderboard.module';

@NgModule({
  imports: [
    SyncDirectivesModule,
    SyncSessionsModule,
    CommonModule,
    MatButtonModule,
    MatSelectModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MatMenuModule,
    MatInputModule,
    SlidesModule,
    FormsModule,
    MatCardModule,
    MatTabsModule,
    SyncRegistrationModule,
    QuestionsModule,
    SyncPollModule,
    SyncButtonModule,
    LeaderboardModule,
  ],
  providers: [LoginService],
  declarations: [
    AllViewerValuesDirective,
    SyncPlaygroundComponent,
    SyncPlaygroundPresenterComponent,
    SyncPlaygroundTestComponent,
  ],
  exports: [
    AllViewerValuesDirective,
    SyncPlaygroundComponent,
  ],
})
export class SyncModule {
}
