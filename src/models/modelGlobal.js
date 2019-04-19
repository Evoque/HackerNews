

import * as serviceGlobal from './../services/serviceGlogal';  
export default {

  namespace: 'modelGlobal',

  state: {},

  subscriptions: {
    setup({dispatch, history}) {
      history.listen(() => {
        dispatch({type: 'QUERY_LIST', payload: {type: 'top'}});
      });
    },
  },

  effects: { 
    *QUERY_LIST({payload: {type}}, {call}) { 
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
