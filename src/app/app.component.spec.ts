import { TestBed, ComponentFixture } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import {
  ChapterContent,
  chapterContentListing,
  defaultChapterContent,
  defaultChapterContentListing,
} from "./chapter-content/models/chapterContent";
import { select, StoreModule, MemoizedSelector} from "@ngrx/store";
import * as MenuActions from "./menus/state/menu-actions";
import { provideMockStore, MockStore } from "@ngrx/store/testing";
import { AppComponent } from "./app.component";
import { cold } from "jasmine-marbles";
import { MenusModule } from "./menus/menus.module";
import * as fromMenu from "./menus/state";
import { SharedModule } from "./helpers/shared.module";
import { HeaderComponent } from "./header/header.component";
import { menuReducer, MenuState } from "./menus/state/menu-reducer";
import { reducers } from "./app.module";
import { ChapterContentModule } from "./chapter-content/chapter-content.module";
import { ChapterHeadingComponent } from "./chapter-heading/chapter-heading.component";

describe("AppComponent", () => {
  let menuStore: MockStore<{
    currentChapter: ChapterContent,
    chapterListing: ChapterContent[]
  }>;

  const defaultCurrentChapter = {
      index: 0,
      name: "default",
      address: "ab",
      heading: "No Heading",
  }
  const initialState = {
    currentChapter: defaultCurrentChapter,
    chapterListing:   defaultChapterContentListing
  };

  const initialState2 = {
    selectors: [
      {
        selector: 'getCurrentChapter',
        value: defaultCurrentChapter
      },
      {
        selector: 'getChapterListing',
        value: defaultChapterContentListing
      }
    ]
  }
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let mockCurrentChapterSelector :MemoizedSelector<MenuState, ChapterContent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ChapterContentModule,
        SharedModule,
        MenusModule,
        StoreModule.forRoot(reducers)
      ],
      declarations: [AppComponent, HeaderComponent, ChapterHeadingComponent],
      providers: [provideMockStore()],
    }).compileComponents();
  });

  beforeEach( () => {
    fixture = TestBed.createComponent(AppComponent);
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

  it(`should have as title 'TechDocPage-NgVersion'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual("TechDocPage-NgVersion");
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement;
  //   expect(compiled.querySelector('title.mainTitle')?.contains('TechDocPage-NgVersion app is running!'));
  //  const component = fixture.componentInstance;
  // });
  // it("should return default chapter content", () => {
  //   const thisCurrentChapter: ChapterContent = {
  //     index: 0,
  //     name: "TEST",
  //     address: "TESTING ADDRESS",
  //     heading: "GIVE  ME TEST",
  //   };


  //   const expected = cold("(a|)", {
  //     a: thisCurrentChapter,
  //   });
  //   mockCurrentChapterSelector.setResult(thisCurrentChapter);
  //   fixture.detectChanges();

  //   expect().toBeObservable(
  //     expected
  //   );
  // });
});

