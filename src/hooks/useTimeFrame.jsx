import { useState, useCallback, useEffect } from "react";
import { getTimeFrame } from "../utils/utils";

const useTimeFrameFilter = (senders) => {

  
  const [filtredSenders, setFiltredSenders] = useState();
  const [timeFrame, setTimeFrame] = useState({
    start: -Infinity,
    end: Infinity
  });
  const onSetTimeFrame = (start, end) => {
    const [startMSec, endMSec] = getTimeFrame(start, end);
    setTimeFrame({ start: startMSec, end: endMSec });
  };

  const timeFilter = useCallback(
    sender => {
      if (
        sender.date.getTime() > timeFrame.start &&
        sender.date.getTime() < timeFrame.end
      ) {
        return true;
      }
    },
    [timeFrame.end, timeFrame.start]
  );
  useEffect(() => {
    if(!senders){
      return
    }
    setFiltredSenders(senders.filter(sender => timeFilter(sender)));
  }, [senders, timeFilter]);

  return [filtredSenders, onSetTimeFrame];
};

export default useTimeFrameFilter;
