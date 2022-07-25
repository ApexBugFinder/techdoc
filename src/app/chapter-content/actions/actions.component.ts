import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import * as fromMenu from "../../menus/state";
import * as MenuActions from "../../menus/state/menu-actions";
import {
  ChapterContent,
  chapterContentListing,
  defaultChapterContent,
} from "../models/chapterContent";
export const actionsChapterInfo: ChapterContent = {
  index: 9,
  name: "actions",
  heading: "Actions",
  address: "chapterContent/actions",
};

@Component({
  selector: "app-actions",
  templateUrl: "./actions.component.html",
  styleUrls: ["./actions.component.scss"],
})
export class ActionsComponent implements OnInit {
  myHeading = "actions";
  currentChapter: ChapterContent = defaultChapterContent;
  chaptList$: Observable<ChapterContent[] | undefined | null>;

  constructor(private menuStore: Store<fromMenu.State>) {
    this.chaptList$ = this.menuStore.pipe(select(fromMenu.getChapterListing));
  }

  ngOnInit(): void {
    this.chaptList$.subscribe((aa) => {
      console.log(aa);
      if (aa) {
              this.currentChapter = aa.find((i) => i.name === this.myHeading) as ChapterContent;
              this.menuStore.dispatch(new MenuActions.SetCurrentChapter(this.currentChapter));
      }




    });
  }
}
