import { Component, OnInit } from '@angular/core';
import { Store, select  } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromMenu from '../../menus/state';
import * as MenuActions from '../../menus/state/menu-actions';
import {ChapterContent, defaultChapterContent} from '../models/chapterContent';

export const dispatchingActionsChapterInfo: ChapterContent = {
  index: 10,
  name: 'dispatchingActions',
  heading: 'Dispatching Actions',
  address: 'chapterContent/dispatchingActions'
};


@Component({
  selector: 'app-dispatching-actions',
  templateUrl: './dispatching-actions.component.html',
  styleUrls: ['./dispatching-actions.component.scss']
})
export class DispatchingActionsComponent implements OnInit {

  constructor(private menuStore: Store<fromMenu.State>) {

   }

  ngOnInit(): void {

      this.menuStore.dispatch(new MenuActions.SetCurrentChapter(dispatchingActionsChapterInfo));


}
}
