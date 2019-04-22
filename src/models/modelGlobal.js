

import * as serviceGlobal from './../services/serviceGlogal';
import {STORIES} from 'Common/constants';
import formatHelper from 'Utils/formatHelper';
import storageHelper from 'Utils/storageHelper';

const initStories = new Array(1);
const visitedIDs = storageHelper.getVisitedIDs();
const user = storageHelper.getUser();
const initType = STORIES[0].value;

/** user Cache */
let Cache_User = {};
export default {

  namespace: 'modelGlobal',

  state: {
    currentStoryType: initType,
    totalIDs: [],
    visitedIDs: visitedIDs,
    currentPage: 1,
    pageSize: 15,
    stories: initStories,
    userInfo: user,
    // 其他用户信息
    otherUser: undefined,

    // 限制请求频度
    loadingTime: Date.now(),
    loadingType: undefined
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
      yield put({
        type: 'save', payload: {
          currentStoryType: type,
          stories: initStories,
          loadingTime: Date.now(),
          loadingType: type
        }
      });
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
    },
    *QUERY_OTHER_USER({payload: {by}}, {call, put, select}) {

      const cacheUser = Cache_User[by];
      let otherUser;
      if (cacheUser && Date.now() - cacheUser.__lastUpdated < 5 * 60 * 1000) {
        otherUser = cacheUser;
      } else {
        console.log(`fetch user: ${by}`);
        yield put({type: 'save', payload: {otherUser: undefined}});
        otherUser = yield call(serviceGlobal.fetchUser, by);
        Cache_User[by] = otherUser;
      }
      yield put({type: 'save', payload: {otherUser}});
    }

  },

  reducers: {
    save(state, action) {
      return {...state, ...action.payload};
    },
    saveVisitedIDs(state, {payload: {id}}) {
      return {...state, visitedIDs: {...state.visitedIDs, [id]: true}}
    }
  },

};
