

import React from 'react';
import styles from './index.less'; 
 
export default ({item}) => {
    const {score, title, by, url, host, timeStamp} = item;
    
    return (
        <div className={styles.item}>
            <div className={styles.score}>{score}</div>
            <div className={styles.itemInfo}>
                <span>
                    <a href={url} target="_blank" rel="noopener noreferrer">{title}</a>  
                    <span className={styles.host}>{` (${host})`}</span> 
                </span>
                <span> 
                    by &nbsp;<span className={styles.underline}>{`${by}`}</span>
                    <span>{` ${timeStamp} ago | `}</span> 
                    <span className={styles.underline}>{`${8} comments`}</span>
                </span>
            </div>
        </div>
    )
}