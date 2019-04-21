

import * as serviceGlobal from './../services/serviceGlogal';
import {STORIES} from 'Common/constants';
import formatHelper from 'Utils/formatHelper';
import storageHelper from 'Utils/storageHelper';

const initStories = new Array(1);
export default {

  namespace: 'modelGlobal',

  state: {
    currentStoryType: STORIES[0].value,
    totalIDs: [],
    currentPage: 1,
    pageSize: 15,
    stories: initStories,
    userInfo: undefined
  },

  subscriptions: {
    setup({dispatch, history}) {
      history.listen(() => {
      });
    },
  },

  effects: {
    *QUERY_STORY_IDS({payload: {type}}, {call, put}) {
      if (!type) return;
      console.log(`fetch  ${type}`);
      yield put({type: 'save', payload: {currentStoryType: type, stories: initStories}});
      const ids = yield call(serviceGlobal.fetchStoryIDSByType, type);
      yield put({type: 'save', payload: {totalIDs: ids}});
      yield put({type: 'QUERY_STORIES', payload: {page: 1}});
    },

    /**
     * ```
     * {
     *  by: "chwolfe",
     *  descendants: 0,
     *  id: 19698598,
     *  score: 17,
     *  time: 1555673078,
     *  title: "Learning Parser Combinators with Rust",
     *  type: "story",
     *  url: "https://bodil.lol/parser-combinators/",
     *  __lastUpdated: 1555677549809,
     *  }
     * ```
     *    **对story字段进行预处理**
     *   1. extract url host;
     *   2. calc time (_ hours ago)
     *   3. ..
     *   4. 经测试，数十次请求的速度并不会特别慢
     */
    *QUERY_STORIES({payload: {page}}, {call, put, select}) {
      yield put({type: 'save', payload: {currentPage: page}});
      const {totalIDs, pageSize} = yield select(state => state.modelGlobal);
      const start = (page - 1) * pageSize;
      const aimIDs = totalIDs.slice(start, start + pageSize);
      const stories = (yield call(serviceGlobal.fetchStories, aimIDs))
        .map(x => ({
          ...x,
          host: formatHelper.extractHost(x.url),
          timeStamp: formatHelper.calcTime(x.time)
        }));
      yield put({type: 'save', payload: {stories}});
    },

    *QUERY_USER({payload: {username}}, {call, put}) {
      const userInfo = yield call(serviceGlobal.fetchUser, username);
      storageHelper.setUser(userInfo);
      yield put({type: 'save', payload: {userInfo}});
    }

  },

  reducers: {
    save(state, action) {
      return {...state, ...action.payload};
    },
  },

};
