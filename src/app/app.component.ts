import { Component, OnInit } from "@angular/core";
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
  chaptList$: Observable<any>;

  constructor(private chapterStore: Store<fromMenu.State>) {
    this.chaptList$ = this.chapterStore.pipe(
      select(fromMenu.getChapterListing)
    );
  }
  ngOnInit(): void {}
}
