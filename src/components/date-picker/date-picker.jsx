import React from "react";
import { DatePicker } from "antd";
const { RangePicker } = DatePicker;

const MyDatePicker = ({onChange}) => {
  return (
    <RangePicker
    onChange={onChange}
      dateRender={current => {
        const style = {};
        if (current.date() === 1) {
          style.border = "1px solid #1890ff";
          style.borderRadius = "50%";
        }
        return (
          <div className="ant-calendar-date" style={style}>
            {current.date()}
          </div>
        );
      }}
    />
  );
};


export default MyDatePicker;
