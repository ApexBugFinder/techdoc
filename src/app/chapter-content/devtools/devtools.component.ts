import { Component, OnInit } from '@angular/core';
import { Store, select  } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromMenu from '../../menus/state';
import * as MenuActions from '../../menus/state/menu-actions';
import {ChapterContent,  defaultChapterContent} from '../models/chapterContent';
export const devToolsChapterInfo: ChapterContent = {
  index: 14,
  name: 'devTools',
  heading: 'Dev Tools',
  address: 'chapterContent/devTools'
};

@Component({
  selector: 'app-devtools',
  templateUrl: './devtools.component.html',
  styleUrls: ['./devtools.component.scss']
})
export class DevtoolsComponent implements OnInit {

  myHeading = 'devTools';
  currentChapter: ChapterContent = defaultChapterContent;

  constructor(private menuStore: Store<fromMenu.State>) {

   }

  ngOnInit(): void {

      this.menuStore.dispatch(new MenuActions.SetCurrentChapter(devToolsChapterInfo));


  }

}
