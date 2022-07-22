import { Action } from '@ngrx/store';
import { ChapterContent } from '../../chapter-content/models/chapterContent';

export enum MenuActionTypes {
    SET_CHAPTERLISTING = '[MENU] SET CHAPTER LISTING',
    CLEAR_CHAPTERLISTING = '[MENU] CLEAR CHAPTER LISTING',

    SET_CURRENT_CHAPTER = '[MENU] SET CURRENT CHAPTER',
    CLEAR_CURRENT_CHAPTER = '[MENU] CLEAR CURRENT CHAPTER'
}

export class SetChapterListing implements Action {
    readonly type = MenuActionTypes.SET_CHAPTERLISTING;
    constructor(public payload: ChapterContent[]) {}
}

export class ClearChapterListing implements Action {
    readonly type = MenuActionTypes.CLEAR_CHAPTERLISTING;

}

export class SetCurrentChapter implements Action {
    readonly type = MenuActionTypes.SET_CURRENT_CHAPTER;
    constructor(public payload: ChapterContent) {}
}

export class ClearCurrentChapter implements Action {
    readonly type = MenuActionTypes.CLEAR_CURRENT_CHAPTER;

}

export type MenuActions = SetChapterListing
                        |   ClearChapterListing
                        |   SetCurrentChapter
                        |   ClearCurrentChapter
                        ;
