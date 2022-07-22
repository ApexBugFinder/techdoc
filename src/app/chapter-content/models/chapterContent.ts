import {actionsChapterInfo } from '../actions/actions.component';
import { creatingSelectorsChapterInfo } from '../creating-selectors/creating-selectors.component';
import { devToolsChapterInfo } from '../devtools/devtools.component';
import { dispatchingActionsChapterInfo } from '../dispatching-actions/dispatching-actions.component';
import { effectsChapterInfo } from '../effects/effects.component';
import { featureStateManagementChapterInfo } from '../feature-state-management/feature-state-management.component';
import { gettingStartedChapterInfo } from '../getting-started/getting-started.component';
import { stateChapterInfo } from '../immutable-state/immutable-state.component';
import { initStateChapterInfo } from '../initialize-state/initialize-state.component';
import { introductionChapterInfo } from '../introduction/introduction.component';
import { reducersChapterInfo } from '../reducers/reducers.component';
import { reduxPatternChapterInfo } from '../redux-pattern/redux-pattern.component';
import { strongTypingChapterInfo } from '../strong-typing/strong-typing.component';
import { utilizingFeatureSelectorsChapterInfo } from '../utilizing-feature-selectors/utilizing-feature-selectors.component';

export interface ChapterContent {
    index: number;
    name: string;
    address: string;
    heading: string;
}

export const chapterContentListing: ChapterContent[] = [
    introductionChapterInfo,
    reduxPatternChapterInfo,
    gettingStartedChapterInfo,
    stateChapterInfo,
    initStateChapterInfo,
    featureStateManagementChapterInfo,
    strongTypingChapterInfo,
    creatingSelectorsChapterInfo,
    actionsChapterInfo,
    dispatchingActionsChapterInfo,
    reducersChapterInfo,
    utilizingFeatureSelectorsChapterInfo,
    effectsChapterInfo,
    devToolsChapterInfo,


];
export const defaultChapterContentListing: ChapterContent[] = [
  
    {
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
    },

];
export const defaultChapterContent: ChapterContent = {
    index: 0,
    name: 'default',
    address: '',
    heading: 'No Heading'
};
