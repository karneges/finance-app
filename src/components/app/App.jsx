import React, { useState, useEffect } from "react";
import { Layout } from "antd";
import "antd/dist/antd.css";
import "./app.scss";
import Circles from "../circles/circles";
import FinTable from "../table/table";
import getTitles from "../../utils/getTitles";
import { english } from "../../constance/constants";
import OptionsRow from "../options-row/options-row";
import getFinanceData from "../../services/finance-service";
import useTimeFrameFilter from "../../hooks/useTimeFrame";
const { Header, Content } = Layout;
const App = () => {
  const [senders, setSenders] = useState([]);
  const [pageSize, setPageSize] = useState(5);
  const [languages] = useState(english);
  const [currentSender, setCurrentSender] = useState({});
  const languagesTitles = getTitles(languages);
  const { debit = 0, credit = 0, color = "red" } = currentSender;

  useEffect(() => {
    getFinanceData(1000).then(res => setSenders(res));
  }, []);

  const onPickRow = sender => {
    setCurrentSender(sender);
  };

  const [filtredSenders, onSetTimeFrame] = useTimeFrameFilter(senders);
  return (
    <Layout style={{ backgroundColor: "white" }}>
      <Header className="header">
        <h1>Finance App </h1>
      </Header>
      <Content>
        <Circles debit={debit} credit={credit} color={color} />
        <OptionsRow setPageSize={setPageSize} onSetTimeFrame={onSetTimeFrame} />
        <FinTable
          data={filtredSenders}
          pageSize={+pageSize}
          titles={languagesTitles}
          onPicRow={onPickRow}
        />
      </Content>
    </Layout>
  );
};

export default App;
