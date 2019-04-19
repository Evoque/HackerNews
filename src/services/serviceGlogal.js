import Firebase from 'firebase/app';
import 'firebase/database';

function createAPI({config, version}) {
  Firebase.initializeApp(config)
  return Firebase.database().ref(version)
}

function fetch(child) {
  console.log(`fetching ${child}...`)
  return new Promise((resolve, reject) => {
    api.child(child).once('value', snapshot => {
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
  
export function fetchStoriesByType(type) { 
  return fetch(`${type}stories`); 
}