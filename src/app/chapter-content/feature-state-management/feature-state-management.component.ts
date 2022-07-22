import { Component, OnInit } from '@angular/core';
import { Store, select  } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromMenu from '../../menus/state';
import * as MenuActions from '../../menus/state/menu-actions';
import {ChapterContent, defaultChapterContent} from '../models/chapterContent';

export const featureStateManagementChapterInfo: ChapterContent =  {
  index: 6,
  name: 'featureStateManagement',
  heading: 'Feature State Management',
  address: 'chapterContent/featureStateManagement'
};

@Component({
  selector: 'app-feature-state-management',
  templateUrl: './feature-state-management.component.html',
  styleUrls: ['./feature-state-management.component.scss']
})
export class FeatureStateManagementComponent implements OnInit {

  myHeading = 'featureStateManagement';
  currentChapter: ChapterContent = defaultChapterContent;
  chaptList$: Observable<ChapterContent[]>;
  constructor(private menuStore: Store<fromMenu.State>) {
    this.chaptList$ = this.menuStore.pipe(select(fromMenu.getChapterListing));
   }

  ngOnInit(): void {
    this.chaptList$.subscribe(aa => {
      console.log(aa);
      this.currentChapter = aa.find(i => i.name === this.myHeading) as ChapterContent;

      this.menuStore.dispatch(new MenuActions.SetCurrentChapter(this.currentChapter));
    });

  }

}
