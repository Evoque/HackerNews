

import React from 'react';
import styles from './index.less';

 
export default ({item}) => {
    const {score, title, by, url, time} = item;
    return (
        <div className={styles.item}>
            <div className={styles.score}>{score}</div>
            <div className={styles.itemInfo}>
                <span>{title}</span>
                <span>by {by} hour ago | 8 comments</span>
            </div>
        </div>
    )
}