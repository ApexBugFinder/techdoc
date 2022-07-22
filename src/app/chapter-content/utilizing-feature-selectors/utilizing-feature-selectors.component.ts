import { Component, OnInit } from '@angular/core';
import { Store, select  } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromMenu from '../../menus/state';
import * as MenuActions from '../../menus/state/menu-actions';
import {ChapterContent, defaultChapterContent} from '../models/chapterContent';

export const utilizingFeatureSelectorsChapterInfo: ChapterContent = {
  index: 12,
  name: 'utilizingFeatureSelectors',
  heading: 'Utilizing Feature Selectors',
  address: 'chapterContent/utilizingFeatureSelectors'
};

@Component({
  selector: 'app-utilizing-feature-selectors',
  templateUrl: './utilizing-feature-selectors.component.html',
  styleUrls: ['./utilizing-feature-selectors.component.scss']
})
export class UtilizingFeatureSelectorsComponent implements OnInit {

  constructor(private menuStore: Store<fromMenu.State>) {

   }

  ngOnInit(): void {

      this.menuStore.dispatch(new MenuActions.SetCurrentChapter(utilizingFeatureSelectorsChapterInfo));

  }

}
