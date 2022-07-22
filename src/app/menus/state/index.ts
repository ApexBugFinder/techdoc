import * as fromRoot from '../../state/app.state';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { menuReducer, MenuState } from './menu-reducer';
import * as menuActions from './menu-actions';
import { chapterContentListing } from '../../chapter-content/models/chapterContent';


export interface State extends fromRoot.State {
    menuState: MenuState;
}
export const reducers: ActionReducerMap<State, any> = {
  menuState: menuReducer,
};
const getMenuFeatureState = createFeatureSelector<MenuState>('menus');

export const getChapterListing = createSelector(
    getMenuFeatureState,
    state => state.chapterListing
);

export const getCurrentChapter = createSelector(
    getMenuFeatureState,
    state => state.currentChapter
);
