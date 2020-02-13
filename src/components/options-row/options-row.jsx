import React from "react";
import { Row, Col } from "antd";
import MyDatePicker from "../date-picker/date-picker";
import PageSizeChnager from "../page-size-changer/page-size-changer";

const OptionsRow = ({setPageSize,onSetTimeFrame}) => {
  return (
    <Row type="flex" justify="space-between">
      <Col>
        <MyDatePicker onChange={([start,end])=>onSetTimeFrame(start,end)}/>
      </Col>
      <Col>
        <PageSizeChnager onChange={setPageSize}/>
      </Col>
    </Row>
  );
};

export default OptionsRow
