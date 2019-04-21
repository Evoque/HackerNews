import React from 'react';
import {Card, Avatar, Row, Icon} from 'antd';
import storageHelper from 'Utils/storageHelper';
import formatHelper from 'Utils/formatHelper';
import styles from './Profile.less';

const centerStyle = {textAlign: 'center'};

export default () => {
    const user = storageHelper.loginnedUser();
    const {id, created, submitted} = user
    return (
        <Card style={{width: 500, margin: '20px auto'}} >
            <Row style={centerStyle}>
                <Avatar size={64} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
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