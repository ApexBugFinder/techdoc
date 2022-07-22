import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionsComponent } from './actions/actions.component';
import { ChapterContentShellComponent } from './chapter-content-shell/chapter-content-shell.component';
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

const routes: Routes = [

  { path: 'chapterContent',
    component: ChapterContentShellComponent,
    children: [
      {path: '', redirectTo: 'introduction', pathMatch:'full'},
  { path: 'introduction', component: IntroductionComponent },
  { path: 'reduxPattern', component: ReduxPatternComponent },
  { path: 'gettingStarted', component: GettingStartedComponent },
  { path: 'immutableState', component: ImmutableStateComponent },
  { path: 'initializeState', component: InitializeStateComponent },
  { path: 'featureStateManagement', component: FeatureStateManagementComponent },
  { path: 'strongTyping', component: StrongTypingComponent },
  { path: 'creatingFeatureSelectors', component: CreatingSelectorsComponent },
  { path: 'actions', component: ActionsComponent },
  { path: 'dispatchingActions', component: DispatchingActionsComponent },
  { path: 'reducer', component: ReducersComponent},
  { path: 'utilizingFeatureSelectors', component: UtilizingFeatureSelectorsComponent },
  { path: 'effects', component: EffectsComponent },
  { path: 'devTools', component: DevtoolsComponent },
  //  { path: 'chapterContent',
  //   redirectTo: 'chapterContent/introduction',
  //   pathMatch: 'full'},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChapterContentRoutingModule { }
