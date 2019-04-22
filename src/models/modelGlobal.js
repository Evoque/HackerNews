

import * as serviceGlobal from './../services/serviceGlogal';
import formatHelper from 'Utils/formatHelper';
import storageHelper from 'Utils/storageHelper';

const initStories = new Array(1);
const visitedIDs = storageHelper.getVisitedIDs();
const user = storageHelper.getUser();

/** user Cache */
let Cache_User = {};

/**
 * story cache 
 * ```json
 * {
 *   "top": {
 *        __lastUpdated: 11111,
 *        IDs: [],
 *        stories: []
 *    }
 * }
 * ```
 */
let Cache_Story = {};
export default {

  namespace: 'modelGlobal',

  state: {
    totalIDs: [],
    visitedIDs: visitedIDs,
    // currentPage: 1,

    /**
     * {
     *   "top": 1,
     *   "new": 2
     * }
     */
    pageInfo: {},
    pageSize: 15,
    stories: initStories,
    userInfo: user,
    // 其他用户信息
    otherUser: undefined,
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

      console.log(Cache_Story);
      const cacheStory = Cache_Story[type];
      // less than 1 minutes use caches
      if (cacheStory && (Date.now() - cacheStory.__lastUpdated) < 30 * 1000) {
        console.log('use cache');
        console.log(Date.now() - cacheStory.__lastUpdated);
        const {IDs, stories} = cacheStory;
        yield put({type: 'save', payload: {totalIDs: IDs, stories}});
        return;
      }

      console.log(`fetch  ${type}`);
      const ids = yield call(serviceGlobal.fetchStoryIDSByType, type);

      Cache_Story[type] = {__lastUpdated: Date.now(), IDs: ids};
      yield put({type: 'save', payload: {totalIDs: ids}});
      yield put({type: 'QUERY_STORIES', payload: {type, page: 1}});

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
    *QUERY_STORIES({payload: {type, page}}, {call, put, select}) {
 
      console.log(`fetch: ${type}, page: ${page}`);
      const {pageInfo, totalIDs, pageSize} = yield select(state => state.modelGlobal);
      yield put({type: 'save', payload: {pageInfo: {...pageInfo, [type]: page}}});
      const start = (page - 1) * pageSize;
      const aimIDs = totalIDs.slice(start, start + pageSize);
      const stories = (yield call(serviceGlobal.fetchStories, aimIDs))
        .map(x => ({
          ...x,
          host: formatHelper.extractHost(x.url),
          timeStamp: formatHelper.calcTime(x.time)
        }));

      Cache_Story[type].__lastUpdated = Date.now();
      Cache_Story[type].stories = stories;
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
