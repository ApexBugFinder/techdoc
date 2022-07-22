import { Component, OnInit, Input} from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ChapterContent } from '../chapter-content/models/chapterContent';
import * as fromMenu from '../menus/state';

@Component({
  selector: 'app-chapter-heading',
  templateUrl: './chapter-heading.component.html',
  styleUrls: ['./chapter-heading.component.scss']
})
export class ChapterHeadingComponent implements OnInit {

  currentChapter$: Observable<ChapterContent>;
  @Input() heading = 'No Heading';
  constructor(private menuStore: Store<fromMenu.State>) {
    this.currentChapter$ = this.menuStore.pipe(select(fromMenu.getCurrentChapter));
   }

  ngOnInit(): void {
    this.currentChapter$.subscribe(aa => {
      this.heading = aa.heading;
    })
    // this.heading = 'Introduction';
  }

}
