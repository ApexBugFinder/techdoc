import { Component, OnInit } from '@angular/core';
import { Store, select  } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromMenu from '../../menus/state';
import * as MenuActions from '../../menus/state/menu-actions';
import {ChapterContent, defaultChapterContent} from '../models/chapterContent';

export const reducersChapterInfo: ChapterContent = {
  index: 11,
  name: 'reducers',
  heading: 'Reducers',
  address: 'chapterContent/reducer'
};

@Component({
  selector: 'app-reducers',
  templateUrl: './reducers.component.html',
  styleUrls: ['./reducers.component.scss']
})
export class ReducersComponent implements OnInit {

  constructor(private menuStore: Store<fromMenu.State>) {

   }

  ngOnInit(): void {
      this.menuStore.dispatch(new MenuActions.SetCurrentChapter(reducersChapterInfo));

  }

}
