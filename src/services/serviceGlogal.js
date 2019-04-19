import Firebase from 'firebase/app';
import 'firebase/database';

function createAPI({config, version}) {
  Firebase.initializeApp(config)
  return Firebase.database().ref(version)
}

function fetch(urlpath) { 
  return new Promise((resolve, reject) => {
    api.child(urlpath).once('value', snapshot => {
      const val = snapshot.val() 
      if (val) val.__lastUpdated = Date.now();
      resolve(val)
    }, reject)
  })
}
 
const api = createAPI({
  version: '/v0',
  config: {
    databaseURL: 'https://hacker-news.firebaseio.com'
  }
})
  
export function fetchStoryIDSByType(type) { 
  return fetch(`${type}stories`); 
}
 
export function fetchUser(id){
  return fetch(`user/${id}`);
}

export function fetchStoryByID(id){
  return fetch(`item/${id}`);
}

export function fetchStories(ids){
  return Promise.all(ids.map(id => fetchStoryByID(id)));
}



