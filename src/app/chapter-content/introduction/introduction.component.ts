import { Component, OnInit } from '@angular/core';
import { Store, select  } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromMenu from '../../menus/state';
import * as MenuActions from '../../menus/state/menu-actions';
import {ChapterContent, defaultChapterContent} from '../models/chapterContent';

export const introductionChapterInfo: ChapterContent = {
  index: 1,
  name: 'introduction',
  heading: 'Introduction',
  address: 'chapterContent/introduction'
};

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {


  constructor(private menuStore: Store<fromMenu.State>) {

   }

  ngOnInit(): void {


      this.menuStore.dispatch(new MenuActions.SetCurrentChapter(introductionChapterInfo));


  }
}
