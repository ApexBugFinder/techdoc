import { Component, OnInit } from '@angular/core';
import { Store, select  } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromMenu from '../../menus/state';
import * as MenuActions from '../../menus/state/menu-actions';
import {ChapterContent, defaultChapterContent} from '../models/chapterContent';

export const strongTypingChapterInfo: ChapterContent = {
  index: 7,
  name: 'strongTyping',
  heading: 'Strong-Typing - Feature State Management',
  address: 'chapterContent/strongTyping'
};

@Component({
  selector: 'app-strong-typing',
  templateUrl: './strong-typing.component.html',
  styleUrls: ['./strong-typing.component.scss']
})
export class StrongTypingComponent implements OnInit {

  constructor(private menuStore: Store<fromMenu.State>) {

   }

  ngOnInit(): void {


      this.menuStore.dispatch(new MenuActions.SetCurrentChapter(strongTypingChapterInfo));


  }

}
