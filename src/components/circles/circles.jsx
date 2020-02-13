import React from "react";
import { Tooltip, Progress } from "antd";
import "./circles.scss";
import CircleText from "./circle-text";
import { calculatePercent } from "../../utils/utils";
const Circles = ({ debit, credit, color }) => {
  const [creditPersent, debitPercent] = calculatePercent(debit, credit);
  return (
    <div className="circles">
      <Tooltip>
        <Progress
          className="circles__circle"
          percent={100}
          successPercent={debitPercent}
          type="circle"
          format={() => <CircleText text={"Debit"} value={debit} />}
          strokeColor={color}
        />
      </Tooltip>
      <Tooltip>
        <Progress
          className="circles__circle"
          percent={100}
          successPercent={creditPersent}
          type="circle"
          format={() => <CircleText text={"Credit"} value={credit} />}
          strokeColor={color}
        />
      </Tooltip>
    </div>
  );
};
export default Circles;
