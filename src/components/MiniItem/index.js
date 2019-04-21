

import React from 'react';
import classnames from 'classnames'
import styles from './index.less'; 
 
export default ({item, onItemClick, visited}) => {
    const {id, score, title, by, url, host, timeStamp} = item;
    
    const handleClick = () => {
        onItemClick && onItemClick(id);
    } 
    return (
        <div className={classnames(styles.item, {[styles.visited]: visited})}>
            <div className={styles.score}>{score}</div>
            <div className={styles.itemInfo}>
                <span>
                    <a href={url} target="_blank" rel="noopener noreferrer" onMouseDown={handleClick}>{title}</a>  
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