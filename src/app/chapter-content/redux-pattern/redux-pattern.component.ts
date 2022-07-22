import { Component, OnInit } from '@angular/core';
import { Store, select  } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromMenu from '../../menus/state';
import * as MenuActions from '../../menus/state/menu-actions';
import {ChapterContent, defaultChapterContent} from '../models/chapterContent';

export const reduxPatternChapterInfo: ChapterContent = {
  index: 2,
  name: 'reduxPattern',
  heading: 'Redux Pattern',
  address: 'chapterContent/reduxPattern'
};

@Component({
  selector: 'app-redux-pattern',
  templateUrl: './redux-pattern.component.html',
  styleUrls: ['./redux-pattern.component.scss']
})
export class ReduxPatternComponent implements OnInit {

  constructor(private menuStore: Store<fromMenu.State>) {

   }

  ngOnInit(): void {

      this.menuStore.dispatch(new MenuActions.SetCurrentChapter(reduxPatternChapterInfo));


  }

}
