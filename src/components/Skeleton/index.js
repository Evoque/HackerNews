import React from "react";
import { Skeleton } from "antd";
import styles from './index.less';

export default () =>
  new Array(12)
    .fill(1)
    .map((x, idx) => (
      <Skeleton className={styles.skeletonItem} key={idx} active avatar paragraph={{ rows: 1 }} />
    ));
