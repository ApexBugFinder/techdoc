import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActionReducer, ActionReducerMap, MetaReducer, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './helpers/shared.module';
import { HeaderComponent } from './header/header.component';
import { MenusModule } from './menus/menus.module';
import { ChapterHeadingComponent } from './chapter-heading/chapter-heading.component';
import { ChapterContentModule } from './chapter-content/chapter-content.module';
import { environment } from 'src/environments/environment.prod';
import * as fromMenu from './menus/state';
import { menuReducer, MenuState } from './menus/state/menu-reducer';
import { MenuActions } from './menus/state/menu-actions';
import { State } from './state/app.state';


export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}
export const reducers: ActionReducerMap<State, any> = {
  MenuState: fromMenu.reducers
}
export const metaReducers: MetaReducer<any>[] = [debug];
@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    MenusModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    ChapterContentModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({
      name: "NGRX - THE BASICS Dev Tools",
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
