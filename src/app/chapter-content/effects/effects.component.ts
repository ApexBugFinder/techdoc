import { Component, OnInit } from '@angular/core';
import { Store, select  } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromMenu from '../../menus/state';
import * as MenuActions from '../../menus/state/menu-actions';
import {ChapterContent, defaultChapterContent} from '../models/chapterContent';

export const effectsChapterInfo: ChapterContent = {
  index: 13,
  name: 'effects',
  heading: 'Effects',
  address: 'chapterContent/effects'
};

@Component({
  selector: 'app-effects',
  templateUrl: './effects.component.html',
  styleUrls: ['./effects.component.scss']
})
export class EffectsComponent implements OnInit {


  constructor(private menuStore: Store<fromMenu.State>) {

   }

  ngOnInit(): void {




      this.menuStore.dispatch(new MenuActions.SetCurrentChapter(effectsChapterInfo));


  }
}
