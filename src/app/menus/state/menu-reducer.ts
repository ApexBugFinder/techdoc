import { ChapterContent, chapterContentListing, defaultChapterContent } from 'src/app/chapter-content/models/chapterContent';
import { MenuActions, MenuActionTypes } from './menu-actions';



export interface MenuState {
    chapterListing: ChapterContent[];
    currentChapter: ChapterContent;
}


const initialState: MenuState = {

    currentChapter: {
      index: 0,
      name: "default",
      address: "ab",
      heading: "No Heading",
    },


    chapterListing:
     [ {
        index: 1,
        name: "introduction",
        heading: "Introduction",
        address: "chapterContent/introduction",
      },
     {
        index: 2,
        name: "reduxPattern",
        heading: "Redux Pattern",
        address: "chapterContent/reduxPattern",
      },
      {
        index: 3,
        name: "gettingStarted",
        heading: "Getting Started",
        address: "chapterContent/gettingStarted",
      },
     {
        index: 4,
        name: "state",
        heading: "Immutable State",
        address: "chapterContent/immutableState",
      },
     {
        index: 5,
        name: "initState",
        heading: "Initialize State",
        address: "chapterContent/initializeState",
      },
       {
        index: 6,
        name: "featureStateManagement",
        heading: "Feature State Management",
        address: "chapterContent/featureStateManagement",
      },
      {
        index: 7,
        name: "strongTyping",
        heading: "Strong-Typing - Feature State Management",
        address: "chapterContent/strongTyping",
      },
     {
        index: 8,
        name: "creatingSelectors",
        heading: "Creating Selectors",
        address: "chapterContent/creatingFeatureSelectors",
      },
    {
        index: 9,
        name: "actions",
        heading: "Actions",
        address: "chapterContent/actions",
      },
       {
        index: 10,
        name: "dispatchingActions",
        heading: "Dispatching Actions",
        address: "chapterContent/dispatchingActions",
      },
      {
        index: 11,
        name: "reducers",
        heading: "Reducers",
        address: "chapterContent/reducer",
      },
       {
        index: 12,
        name: "utilizingFeatureSelectors",
        heading: "Utilizing Feature Selectors",
        address: "chapterContent/utilizingFeatureSelectors",
      },
     {
        index: 13,
        name: "effects",
        heading: "Effects",
        address: "chapterContent/effects",
      },
     {
        index: 14,
        name: "devTools",
        heading: "Dev Tools",
        address: "chapterContent/devTools",
      }]
    };





export function menuReducer(state= initialState, action: MenuActions): MenuState {
    switch (action.type) {
        case MenuActionTypes.SET_CHAPTERLISTING:
            return {
                ...state,
                chapterListing: action.payload
            };

        case MenuActionTypes.CLEAR_CHAPTERLISTING:
            return {
                ...state,
                chapterListing: []
            };

        case MenuActionTypes.SET_CURRENT_CHAPTER:
            return {
                ...state,
                currentChapter: action.payload
            };
        case MenuActionTypes.CLEAR_CURRENT_CHAPTER:
            return {
                ...state,
                currentChapter: defaultChapterContent
            };

        default:
            return {
              ...state
            };
    }
}
