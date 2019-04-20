
import React from 'react';
import {Input, Button} from 'antd';
import styles from './index.less';

const {TextArea} = Input;
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

        const kidsLen = item.kids.length;
        const commentStr = kidsLen > 1 ? ` ${kidsLen} comments` : ` ${kidsLen} comment`;
        return (
            <div className={styles.itemContainer}>
                <div className={styles.itemHeader}>
                    <div>
                        <h1 className={styles.title}>{item.title}</h1>
                        <span>{` (${item.host}) `}</span>
                    </div>
                    <div>
                        <span>{`${item.score} points by `}</span>
                        <span className={styles.author}>{item.by}</span>
                        <span>{` ${item.timeStamp} ago |`}</span>
                        <span>{commentStr}</span>
                    </div>
                    <TextArea placeholder="add comment here..." autosize={{minRows: 2}} />
                    <Button type="primary">add comment</Button>
                </div>
                <div className={styles.commentList}>

                </div>
            </div>
        )
    }

}