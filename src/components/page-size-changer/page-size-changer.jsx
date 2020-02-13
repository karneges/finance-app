import React from "react";
import { Select } from "antd";
const { Option } = Select;

const PageSizeChnager = ({onChange}) => {
  return (
    <Select defaultValue="Rows Count" style={{ width: 120 }} onChange={onChange}>
      <Option value="5">5</Option>
      <Option value="10">10</Option>
      <Option value="15">15</Option>
    </Select>
  );
};

export default PageSizeChnager;
