import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { monacoReady } from '@codelab/code-demos';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../../../codelab/src/environments/environment';

export const angularFire = AngularFireModule.initializeApp(
  environment.firebaseConfig
);


const routes = [
  {
    path: 'binary',
    loadChildren: () => import('./modules/binary/binary.module').then(m => m.BinaryModule),
    name: 'Binary',
    description: 'Learn about Binary in JS',
    page: 'bonus',
    prod: true
  },
  {
    path: 'gomoku',
    loadChildren: () => import('./modules/gomoku/gomoku.module').then(m => m.GomokuModule),
    name: 'Gomoku',
    description: 'Gomoku',
    page: 'bonus',
    prod: true
  },
  {
    path: 'cellular-automation',
    loadChildren:
      () => import('./modules/cellular-automation/cellular-automation.module').then(m => m.CellularAutomationModule),
    name: 'Image inclusion',
    description: 'Image inclusion'
  },
  {
    path: 'ii',
    loadChildren: () => import('./modules/ii/ii.module').then(m => m.IiModule),
    name: 'Image inclusion',
    description: 'Image inclusion'
  },
  {
    path: 'music',
    loadChildren: () => import('./modules/music/music.module').then(m => m.MusicModule),
    name: 'Music',
    description: 'Music'
  }, {
    path: 'webassembly',
    loadChildren: () => import('./modules/webassembly/webassembly.module').then(m => m.WebassemblyModule),
    name: 'webassembly',
    description: 'webassembly'
  },
  {
    path: 'svg',
    loadChildren: () => import('./modules/svg/svg.module').then(m => m.SvgModule),
    name: 'Svg + Angular',
    description: 'SVG '
  },
  {
    path: 'regex',
    loadChildren: () => import('./modules/regex/regex.module').then(m => m.RegexModule),
    name: 'Regex',
    description: 'Regex '
  },
  {
    path: 'ast',
    loadChildren: () => import('./modules/ast/ast.module').then(m => m.AstModule),
    name: 'Ast + Angular',
    description: 'SVG '
  },
  {
    path: 'svg-race',
    loadChildren: () => import('./modules/svg-race/svg-race.module').then(m => m.SvgRaceModule),
    name: 'SVG Race',
    description: 'SVG '
  },
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
    name: 'Home',
    description: 'Home'
  }, {
    path: 'sync',
    loadChildren: () => import('./modules/sync/sync.module').then(m => m.SyncModule),
    name: 'Sync',
    description: 'Sync Session'
  },
  {
    path: 'test',
    loadChildren: () => import('./modules/test/test.module').then(m => m.TestModule),
    name: 'Home',
    description: 'Home'
  },
  {
    path: 'qna',
    loadChildren: () => import('./modules/qna/qna.module').then(m => m.QnaModule),
    name: 'Q&A',
  },
  {
    path: 'msk',
    loadChildren: () => import('./modules/msk/msk.module').then(m => m.MskModule),
    name: 'Angular Moscow Meetup',
  }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    angularFire
  ],
  providers: [
    {
      provide: 'ROUTES',
      useValue: []
    },
    {
      provide: APP_INITIALIZER,
      useValue: monacoReady,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class KirjsModule {
}
