import { TestBed, ComponentFixture } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import {
  ChapterContent,
  defaultChapterContent,
  defaultChapterContentListing,
} from "../../chapter-content/models/chapterContent";
import { select, StoreModule, MemoizedSelector } from "@ngrx/store";
import * as MenuActions from "../../menus/state/menu-actions";
import { provideMockStore, MockStore } from "@ngrx/store/testing";

import { MenusModule } from "../../menus/menus.module";
import * as fromMenu from "../../menus/state";
import { SharedModule } from "../../helpers/shared.module";
import { HeaderComponent } from "../../header/header.component";
import { menuReducer, MenuState } from "../../menus/state/menu-reducer";
// import { reducers } from "../../app.module";
import { reducers } from '../../menus/state';
import * as fromRoot from '../../app.module';



import { ChapterContentModule } from "../../chapter-content/chapter-content.module";

import { By } from "@angular/platform-browser";
import { IntroductionComponent } from "./introduction.component";

describe("**** Introduction Component Testing ****", () => {
  let menuStore: MockStore<{
    currentChapter: ChapterContent;
    chapterListing: ChapterContent[];
  }>;

  const defaultCurrentChapter = {
    index: 0,
    name: "default",
    address: "ab",
    heading: "No Heading",
  };
  const initialState = {
    currentChapter: defaultCurrentChapter,
    chapterListing: defaultChapterContentListing,
  };

  const initialState2 = {
    selectors: [
      {
        selector: "getCurrentChapter",
        value: defaultCurrentChapter,
      },
      {
        selector: "getChapterListing",
        value: defaultChapterContentListing,
      },
    ],
  };
  let fixture: ComponentFixture<IntroductionComponent>;
  let component: IntroductionComponent;
  let mockCurrentChapterSelector: MemoizedSelector<MenuState, ChapterContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ChapterContentModule,
        SharedModule,
        MenusModule,
        StoreModule.forRoot(fromRoot.reducers)


      ],
      declarations: [IntroductionComponent],
      providers: [provideMockStore()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroductionComponent);
    menuStore = TestBed.inject(MockStore);
    mockCurrentChapterSelector = menuStore.overrideSelector(
      fromMenu.getCurrentChapter,
      defaultCurrentChapter
    );
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it("should create the app", () => {
    expect(component).toBeTruthy();
  });




});
