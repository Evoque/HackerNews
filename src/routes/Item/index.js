
import React from 'react';
import styles from './index.less';

const item = {
    by: "directionless",
    descendants: 5,
    id: 19698834,
    kids: [19699022, 19698985, 19698997, 19698975],
    score: 20,
    time: 1555675630,
    title: "Fastly S-1",
    type: "story",
    url: "https://www.sec.gov/Archives/edgar/data/1517413/000119312519111675/d702138ds1.htm",
    host: 'sec.gov',
    timeStamp: '2 hours',
    __lastUpdated: 1555677549810
};

export default class Item extends React.Component {
 
    render() {
        return (
            <div>
                <div className={styles.itemHeader}>
                    <div>
                        <span>{item.title}</span>
                        <span>{` (${item.host}) `}</span>
                        <span></span>
                    </div>
                </div>
                <div className={styles.commentList}>

                </div>
            </div>
        )
    }

}