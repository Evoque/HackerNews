

import React from 'react';
import styles from './index.less'; 
 
export default ({item}) => {
    const {score, title, by, url, host, time} = item;
    
    return (
        <div className={styles.item}>
            <div className={styles.score}>{score}</div>
            <div className={styles.itemInfo}>
                <span>
                    <a href={url} target="_blank" rel="noopener">{title}</a>  
                    <span className={styles.host}>{` (${host})`}</span> 
                </span>
                <span>by {by} hour ago | 8 comments</span>
            </div>
        </div>
    )
}