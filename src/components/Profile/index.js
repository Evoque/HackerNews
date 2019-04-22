import React from 'react';
import {Card, Avatar, Row, Icon, Skeleton} from 'antd';
import formatHelper from 'Utils/formatHelper';
import imgHead from 'Assets/head.png';
import styles from './index.less';

const centerStyle = {textAlign: 'center'};
const cardStyle = {width: 500, margin: '20px auto', borderRadius: '4px'};
const {Meta} = Card;
export default ({userInfo}) => {

    if (!userInfo) {
        return (
            <Card style={cardStyle} >
                <Skeleton loading={true} avatar active>
                    <Meta
                        avatar={<Avatar src={imgHead} />}
                    />
                </Skeleton>
            </Card>
        )
    }


    const {id, created, submitted} = userInfo;
    return (
        <Card style={cardStyle} >
            <Row style={centerStyle}>
                <Avatar size={64} src={imgHead} />
            </Row>
            <h2 style={centerStyle}>{id}</h2>
            <p style={centerStyle}>{`about ${id}`}</p>
            <Row className={styles.info}>
                <Icon type="home" />
                <span>{`${id}'s address`}</span>
            </Row>
            <Row className={styles.info}>
                <Icon type="clock-circle" />
                <span>{`${formatHelper.calcTime(created)} ago`}</span>
            </Row>
            <Row className={styles.info}>
                <Icon type="heart" />
                <span>{`${submitted.length} submits`}</span>
            </Row>
        </Card>
    );
};