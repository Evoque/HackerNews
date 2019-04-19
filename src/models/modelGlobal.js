

import * as serviceGlobal from './../services/serviceGlogal';
import axios from 'axios';
import Firebase from 'firebase/app';
import 'firebase/database';

function createAPI({config, version}) {
  Firebase.initializeApp(config)
  return Firebase.database().ref(version)
}


const api = createAPI({
  version: '/v0',
  config: {
    databaseURL: 'https://hacker-news.firebaseio.com'
  }
})

function fetch(child) {
  console.log(`fetching ${child}...`)
  return new Promise((resolve, reject) => {
    api.child(child).once('value', snapshot => {
      const val = snapshot.val()
      // mark the timestamp when this item is cached
      if (val) val.__lastUpdated = Date.now();
      resolve(val)
    }, reject)
  })
}

export default {

  namespace: 'modelGlobal',

  state: {},

  subscriptions: {
    setup({dispatch, history}) {
      history.listen(() => {

        // axios({
        //   method: 'get',
        //   url: 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty',
        //   responseType: 'application/json'
        // }).then(resp => {
        //   console.log(resp);
        // }) 
        fetch('topstories')
          .then(a => {
            console.log(a);
          })


      });
    },
  },

  effects: {
    // *fetch({ payload }, { call, put }) {  
    //   yield put({ type: 'save' });
    // },
    *QUERY_LIST({payload: {type}}, {call}) {
      console.log('wh')
      const result = yield call(serviceGlobal.fetchStoriesByType, type);
      console.log(result);
    }
  },

  reducers: {
    save(state, action) {
      return {...state, ...action.payload};
    },
  },

};
