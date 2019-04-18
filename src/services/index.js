
import request from '../utils/request'; 
import BaseUrl from './config';

 
 
export function queryList() {
  return request({
    url: `${BaseUrl}`,  
    // config: { headers }
  });
}

 