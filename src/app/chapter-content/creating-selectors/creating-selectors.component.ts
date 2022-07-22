import { Component, OnInit } from '@angular/core';
import { Store, select  } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromMenu from '../../menus/state';
import * as MenuActions from '../../menus/state/menu-actions';
import {ChapterContent, defaultChapterContent} from '../models/chapterContent';

export const creatingSelectorsChapterInfo: ChapterContent = {
  index: 8,
  name: 'creatingSelectors',
  heading: 'Creating Selectors',
  address: 'chapterContent/creatingFeatureSelectors'
};

@Component({
  selector: 'app-creating-selectors',
  templateUrl: './creating-selectors.component.html',
  styleUrls: ['./creating-selectors.component.scss']
})
export class CreatingSelectorsComponent implements OnInit {
  myHeading = 'creatingSelectors';
  currentChapter: ChapterContent = defaultChapterContent;

  constructor(private menuStore: Store<fromMenu.State>) {

   }

  ngOnInit(): void {

      this.menuStore.dispatch(new MenuActions.SetCurrentChapter(creatingSelectorsChapterInfo));


  }
}
