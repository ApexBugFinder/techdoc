import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChapterContent, defaultChapterContent } from '../models/chapterContent';
import { Store, select} from '@ngrx/store';
import * as fromMenu from '../../menus/state';
import * as MenuActions from '../../menus/state/menu-actions';
@Component({
  selector: "app-bottom-nav",
  templateUrl: "./bottom-nav.component.html",
  styleUrls: ["./bottom-nav.component.scss"],
})
export class BottomNavComponent implements OnInit {
  nextChapter: ChapterContent = defaultChapterContent;
  previousChapter: ChapterContent = defaultChapterContent;
  currentChapter: ChapterContent = defaultChapterContent;

  currentChapter$: Observable<ChapterContent | undefined | null>;
  chaptList$: Observable<ChapterContent[] | undefined | null>;
  localChaptListing: ChapterContent[] | undefined | null = [];
  chapterlistingLength: number = 0;
  constructor(private menuStore: Store<fromMenu.State>) {
      this.currentChapter$ = this.menuStore.pipe(select(fromMenu.getCurrentChapter));
      this.chaptList$ = this.menuStore.pipe(select(fromMenu.getChapterListing));
  }

  ngOnInit(): void {
    this.chaptList$.subscribe((chapterListing: ChapterContent[] | undefined | null) => {
      if (chapterListing) {
        this.localChaptListing = chapterListing;
        this.chapterlistingLength = this.localChaptListing.length - 1;
        this.currentChapter$.subscribe((curr: ChapterContent | undefined | null) => {
          if (curr) {
            this.currentChapter = curr;
            // Set NEXT
            if (this.currentChapter.index <= chapterListing.length - 1) {
              this.nextChapter = chapterListing.find((i) => i.index == this.currentChapter.index + 1) as ChapterContent;

            }
            // SET PREVIOUS
            if (curr) {
              if (this.currentChapter.index > 1) {
                this.previousChapter = chapterListing.find((i) => i.index == this.currentChapter.index - 1) as ChapterContent;

              }
            }


        }
    });
      }
    });

  }

  onPrevious() {
    this.menuStore.dispatch(new MenuActions.SetCurrentChapter(this.previousChapter));
  }
  onNext() {
    this.menuStore.dispatch(new MenuActions.SetCurrentChapter(this.nextChapter)
    );
  }
}
