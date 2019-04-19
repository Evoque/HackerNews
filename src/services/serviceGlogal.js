
import request from '../utils/request'; 
import Url from './config';

  
export function fetchStoriesByType(type) {
  return request({
    url:`${Url}/${type}stories.json?print=pretty`
  });
}