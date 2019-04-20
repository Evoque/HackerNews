
import React from 'react';
import {Input, Button, Collapse} from 'antd';
// import he from 'he';
import linker from 'Utils/linker';
import parse from 'html-react-parser';
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

const comment = {
    "by": "chipotle_coyote",
    "id": 19705269,
    "kids": [19705676, 19705743, 19705330],
    "parent": 19704486,
    "text": "While I&#x27;ve naturally gravitated toward the &quot;capitalize and use the imperative,&quot; I&#x27;ve never been down with the &quot;good commit messages are 50 characters or less&quot; mantra. Why 50? Is there an important tool that breaks if my commit message is 55, 60 or even (gasp) 70 characters? Is there a real case to be made that &quot;Add total vocab entries per capsule limitation&quot; is a good commit message that becomes an utter irresponsible trash fire if one spells the entire word &quot;vocabulary?&quot;<p>Yes, short, clear commit messages are good. I&#x27;m not saying &quot;write a paragraph&quot;; I&#x27;m not even saying that it&#x27;s bad to have an arbitrary maximum length beyond which a commit message can be considered poor form. It&#x27;s just that 50 is a <i>weirdly</i> arbitrary choice.",
    "time": 1555745299,
    "type": "comment"
};

const subComment = {
    "by": "nicoburns",
    "id": 19705676,
    "parent": 19705269,
    "text": "I completely disregard this rule. http://www.google.cn ",
    "time": 1555754618,
    "type": "comment"
};
const subComment1 = {
    "by": "nicoburns",
    "id": 19705111,
    "parent": 19705269,
    "text": "I completely disregard this rule. I find it much more helpful to be able to include more context in the message (even the first line).<p>I have a similar policy about line-lengths in code files. Sure, lines can be too long, but I find that codebases with strict line-length policies tend to have the opposite problem: too much vertical drift which makes it hard to see the big-picture of what is going on in the file.",
    "time": 1555754618,
    "type": "comment"
}; 

const comment1 = {
    "by": "chipotle_coyote1",
    "id": 19705270,
    "kids": [19705676, 19705743, 19705330],
    "parent": 19704486,
    "text": "While I&#x27;ve naturally gravitated https://www.baidu.com arbitrary choice.",
    "time": 1555745299,
    "type": "comment"
};

const Panel = Collapse.Panel;

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
                    <TextArea
                        placeholder="add comment here..."
                        autosize={{minRows: 3, maxRows: 15}}
                    />
                    <Button type="primary">add comment</Button>
                </div>
                <div className={styles.commentList}>
                    <Collapse bordered={false} defaultActiveKey={['1']}>
                        <Panel header="This is panel header 1" key="1">
                            <div>
                                <span>
                                    {parse(linker(comment.text, {
                                        attributes: {target: '_blank', rel: 'noopener noreferrer'}
                                    }))}
                                </span>

                            </div>
                            <div className={styles.subComment}>
                                <div className={styles.subCommentItem}>
                                    <span>
                                        {parse(linker(subComment.text, {
                                            attributes: {target: '_blank', rel: 'noopener noreferrer'}
                                        }))}
                                    </span>
                                    <span> by droop 1 hour ago</span>
                                </div>
                                <div className={styles.subCommentItem}>
                                    {parse(linker(subComment1.text, {
                                        attributes: {target: '_blank', rel: 'noopener noreferrer'}
                                    }))}
                                </div>
                                {/* <span className={styles.labelBtn}>add comment</span> */}
                                <span className={styles.labelBtn}>
                                    show <strong>12</strong> more comments
                                </span>
                            </div>
                        </Panel>
                        <Panel header="This is panel header 2" key="2">
                            {parse(linker(comment1.text, {
                                attributes: {target: '_blank', rel: 'noopener noreferrer'}
                            }))}
                        </Panel>
                    </Collapse>
                </div>
            </div>
        )
    }

}