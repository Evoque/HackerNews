

// import * as serviceGlobal from './../services/serviceGlogal';
import {STORIES} from 'Common/constants';


export default {

  namespace: 'modelGlobal',

  state: {
    currentStory: STORIES[0].value,
    stories: []
  },

  subscriptions: {
    setup({dispatch, history}) {
      history.listen(() => {
      });
    },
  },

  effects: {
    *QUERY_STORY_IDS({payload: {type}}, {call, put}) {
      yield put({type: 'save', payload: {currentStory: type}});
      // const ids = yield call(serviceGlobal.fetchStoryIDSByType, type);
      // ids: ids.splice(0, 10)
      yield put({type: 'QUERY_STORIES', payload: {}});
    },
    *QUERY_STORIES({payload: {ids}}, {call, put}) {
      // const stories = yield call(serviceGlobal.fetchStories, ids);
      // console.log(stories);
      var tempStories = [
        {
          by: "chwolfe",
          descendants: 0,
          id: 19698598,
          score: 17,
          time: 1555673078,
          title: "Learning Parser Combinators with Rust",
          type: "story",
          url: "https://bodil.lol/parser-combinators/",
          __lastUpdated: 1555677549809,
        },
        {
          by: "directionless",
          descendants: 5,
          id: 19698834,
          kids: [19699022, 19698985, 19698997, 19698975],
          score: 20,
          time: 1555675630,
          title: "Fastly S-1",
          type: "story",
          url: "https://www.sec.gov/Archives/edgar/data/1517413/000119312519111675/d702138ds1.htm",
          __lastUpdated: 1555677549810,
        },
        {
          by: "sohkamyung",
          descendants: 105,
          id: 19695595,
          kids: [19695817, 19696962, 19695831, 19698787, 19697151, 19698341, 19697509, 19696531, 19696125, 19695736, 19697648, 19696057, 19695998, 19695938, 19696670, 19696734, 19695677],
          score: 432,
          time: 1555629108,
          title: "Mozilla WebThings",
          type: "story",
          url: "https://hacks.mozilla.org/2019/04/introducing-mozilla-webthings/",
          __lastUpdated: 1555677549810,
        }
      ];
      yield new Promise(r => setTimeout(r, 500));
      yield put({type: 'save', payload: {stories: tempStories}});
    }
  },

  reducers: {
    save(state, action) {
      return {...state, ...action.payload};
    },
  },

};
