import { Component, OnInit } from '@angular/core';
import { Store, select  } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromMenu from '../../menus/state';
import * as MenuActions from '../../menus/state/menu-actions';
import {ChapterContent, defaultChapterContent} from '../models/chapterContent';

export const stateChapterInfo: ChapterContent = {
  index: 4,
  name: 'state',
  heading: 'Immutable State',
  address: 'chapterContent/immutableState'
};

@Component({
  selector: 'app-immutable-state',
  templateUrl: './immutable-state.component.html',
  styleUrls: ['./immutable-state.component.scss']
})
export class ImmutableStateComponent implements OnInit {

  constructor(private menuStore: Store<fromMenu.State>) {

   }

  ngOnInit(): void {


      this.menuStore.dispatch(new MenuActions.SetCurrentChapter(stateChapterInfo));


  }

}
