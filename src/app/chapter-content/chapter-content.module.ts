import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChapterContentRoutingModule } from './chapter-content-routing.module';
import { ActionsComponent } from './actions/actions.component';
import { CreatingSelectorsComponent } from './creating-selectors/creating-selectors.component';
import { DevtoolsComponent } from './devtools/devtools.component';
import { DispatchingActionsComponent } from './dispatching-actions/dispatching-actions.component';
import { EffectsComponent } from './effects/effects.component';
import { FeatureStateManagementComponent } from './feature-state-management/feature-state-management.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { ImmutableStateComponent } from './immutable-state/immutable-state.component';
import { InitializeStateComponent } from './initialize-state/initialize-state.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { ReducersComponent } from './reducers/reducers.component';
import { ReduxPatternComponent } from './redux-pattern/redux-pattern.component';
import { StrongTypingComponent } from './strong-typing/strong-typing.component';
import { UtilizingFeatureSelectorsComponent } from './utilizing-feature-selectors/utilizing-feature-selectors.component';
import { ChapterContentShellComponent } from './chapter-content-shell/chapter-content-shell.component';
import { ChapterHeadingModule } from '../chapter-heading/chapter-heading.module';


@NgModule({
  declarations: [
    ActionsComponent,
    CreatingSelectorsComponent,
    DevtoolsComponent,
    DispatchingActionsComponent,
    EffectsComponent,
    FeatureStateManagementComponent,
    GettingStartedComponent,
    ImmutableStateComponent,
    InitializeStateComponent,
    IntroductionComponent,
    ReducersComponent,
    ReduxPatternComponent,
    StrongTypingComponent,
    UtilizingFeatureSelectorsComponent,
    ChapterContentShellComponent,
  ],
  imports: [
    CommonModule,
    ChapterContentRoutingModule,
    ChapterHeadingModule


  ]
})
export class ChapterContentModule { }
