import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import {
  ChapterContent,
  chapterContentListing,
} from "./chapter-content/models/chapterContent";
import { Store, select } from "@ngrx/store";
import * as fromMenu from "./menus/state";
import * as MenuActions from "./menus/state/menu-actions";

import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "TechDocPage-NgVersion";
  chaptList$: Observable<ChapterContent[] | undefined>;
  currentChapter$: Observable<ChapterContent>;

  constructor(private chapterStore: Store<fromMenu.State>, private router:Router) {
    this.chaptList$ = this.chapterStore.pipe(
      select(fromMenu.getChapterListing)
    );
    this.currentChapter$ = this.chapterStore.pipe(select(fromMenu.getCurrentChapter));
  }
  ngOnInit(): void {
    this.currentChapter$.subscribe((curr: ChapterContent) => {
      console.log('current chapter index #: ' + curr.index);
      if (curr.index > 0) {
        this.router.navigate([curr.address]);
      }

    })
  }
}
