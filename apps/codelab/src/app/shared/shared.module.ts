import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CodeDemoModule } from '@codelab/code-demos';
import { CodelabComponentsModule } from '../components/codelab-components.module';
import { ButtonsNavBarModule } from '../components/buttons-nav-bar/buttons-nav-bar.module';
import { SlidesModule } from '@codelab/slides';

import { FullLayoutComponent } from '../containers';
import { SyncModule } from '../codelabs/sync/sync.module';

@NgModule({
  declarations: [FullLayoutComponent],
  imports: [
    HttpClientModule,
    FormsModule,
    RouterModule,
    CodeDemoModule,
    CodelabComponentsModule,
    SlidesModule,
    ButtonsNavBarModule,
    SyncModule,
  ],
  exports: [
    FullLayoutComponent,
    HttpClientModule,
    FormsModule,
    CodeDemoModule,
    CodelabComponentsModule,
    SlidesModule,
    ButtonsNavBarModule
  ],
  providers: []
})
export class SharedModule {
}
