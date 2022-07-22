import { TestBed, ComponentFixture } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import {
  ChapterContent,
  defaultChapterContent,
  defaultChapterContentListing,
} from "../chapter-content/models/chapterContent";
import { select, StoreModule, MemoizedSelector } from "@ngrx/store";
import * as MenuActions from "../menus/state/menu-actions";
import { provideMockStore, MockStore } from "@ngrx/store/testing";

import { MenusModule } from "../menus/menus.module";
import * as fromMenu from "../menus/state";
import { SharedModule } from "../helpers/shared.module";
import { HeaderComponent } from "../header/header.component";
import { menuReducer, MenuState } from "../menus/state/menu-reducer";
import { reducers } from "../app.module";
import { ChapterContentModule } from "../chapter-content/chapter-content.module";
import { ChapterHeadingComponent } from "../chapter-heading/chapter-heading.component";
import { By } from "@angular/platform-browser";

describe("Chapter Heading Component", () => {
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
  let fixture: ComponentFixture<ChapterHeadingComponent>;
  let component: ChapterHeadingComponent;
  let mockCurrentChapterSelector: MemoizedSelector<MenuState, ChapterContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ChapterContentModule,
        SharedModule,
        MenusModule,
        StoreModule.forRoot(reducers),
      ],
      declarations: [ChapterHeadingComponent],
      providers: [provideMockStore()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterHeadingComponent);
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

  it(`should have as title No Heading to begin with`, () => {
    const fixture = TestBed.createComponent(ChapterHeadingComponent);
    const app = fixture.componentInstance;
    const expected = defaultChapterContent.heading;
    expect(app.heading).toEqual(expected);
  });

  it(`should have an h3 element with the current Chapter set to index 8, heading Creating Selectors`, () => {
    const component = fixture.componentInstance;
    const creatingSelectorsChapterListing = defaultChapterContentListing.find(
      (i) => i.index == 8
    );
    mockCurrentChapterSelector.setResult(creatingSelectorsChapterListing);
    menuStore.refreshState();
    fixture.detectChanges();
    const h3 : HTMLElement= fixture.debugElement.query(By.css("#headingTitle")).nativeElement;
    expect(h3.textContent).toEqual(creatingSelectorsChapterListing.heading);
  });

  it(`should change Heading title to 'Reducers' when NGRX state changes current Chapter to index 11`, () => {
    const reducersFeatureChapterListing = defaultChapterContentListing.find(
      (i) => i.index == 11
    );
    mockCurrentChapterSelector.setResult(reducersFeatureChapterListing);
    menuStore.refreshState();
    fixture.detectChanges();

    expect(fixture.componentInstance.heading).toEqual(
      reducersFeatureChapterListing.heading
    );
  });

  it(`should change Heading title to 'Utilizing Feature Selectors' when NGRX state changes current Chapter to index 12`, () => {
    const utilizingFeatureChapterListing = defaultChapterContentListing.find(
      (i) => i.index == 12
    );
    mockCurrentChapterSelector.setResult(utilizingFeatureChapterListing);
    menuStore.refreshState();
    fixture.detectChanges();

    expect(fixture.componentInstance.heading).toEqual(
      utilizingFeatureChapterListing.heading
    );
  });

  it(`should change Heading title to 'Effects' when NGRX state changes current Chapter to index 13`, () => {
    const effectsChapterListing = defaultChapterContentListing.find(
      (i) => i.index == 13
    );
    mockCurrentChapterSelector.setResult(effectsChapterListing);
    menuStore.refreshState();
    fixture.detectChanges();

    expect(fixture.componentInstance.heading).toEqual(
      effectsChapterListing.heading
    );
  });
});
