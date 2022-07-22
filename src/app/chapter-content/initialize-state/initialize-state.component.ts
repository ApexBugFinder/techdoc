import { Component, OnInit } from '@angular/core';
import { Store, select  } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromMenu from '../../menus/state';
import * as MenuActions from '../../menus/state/menu-actions';
import {ChapterContent, defaultChapterContent} from '../models/chapterContent';

export const initStateChapterInfo: ChapterContent =  {
  index: 5,
  name: 'initState',
  heading: 'Initialize State',
  address: 'chapterContent/initializeState'
};

@Component({
  selector: 'app-initialize-state',
  templateUrl: './initialize-state.component.html',
  styleUrls: ['./initialize-state.component.scss']
})
export class InitializeStateComponent implements OnInit {

  constructor(private menuStore: Store<fromMenu.State>) {

   }

  ngOnInit(): void {


      this.menuStore.dispatch(new MenuActions.SetCurrentChapter(initStateChapterInfo));

  }

}
