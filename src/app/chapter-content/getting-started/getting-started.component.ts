import { Component, OnInit } from '@angular/core';
import { Store, select  } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromMenu from '../../menus/state';
import * as MenuActions from '../../menus/state/menu-actions';
import {ChapterContent, defaultChapterContent} from '../models/chapterContent';

export const gettingStartedChapterInfo: ChapterContent = {
  index: 3,
  name: 'gettingStarted',
  heading: 'Getting Started',
  address: 'chapterContent/gettingStarted'
};

@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.scss']
})
export class GettingStartedComponent implements OnInit {

  constructor(private menuStore: Store<fromMenu.State>) {

   }

  ngOnInit(): void {

      this.menuStore.dispatch(new MenuActions.SetCurrentChapter(gettingStartedChapterInfo));


  }

}
