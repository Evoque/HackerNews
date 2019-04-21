import React from "react";
import { Pagination } from "antd";

export default ({current, pageSize, total, onChange}) => {
  return (
    <Pagination
      key="pager"
      size="small" 
      style={{padding: '12px'}}
      current={current}
      pageSize={pageSize}
      total={total}
      onChange={onChange}
    />
  );
};
