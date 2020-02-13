import React, { useState } from "react";
import { Layout } from "antd";
import "antd/dist/antd.css";
import "./app.scss";
import Circles from "../circles/circles";
import FinTable from "../table/table";
import getData from "../../utils/dataBase";
import getTitles from "../../utils/getTitles";
import { english } from "../../constance/constants";
import OptionsRow from "../options-row/options-row";

import useTimeFrame from "../../hooks/useTimeFrame";
const { Header, Content, Footer } = Layout;
const App = () => {
  const [senders] = useState(getData(200));
  const [pageSize, setPageSize] = useState(5);
  const [languages, setLanguages] = useState(english);
  const [currentSender, setCurrentSender] = useState(senders[0]);
  const languagesTitles = getTitles(languages);
  const { debit, credit, color } = currentSender;
  const onPickRow = sender => {
    setCurrentSender(sender);
  };

  const [filtredSenders, onSetTimeFrame] = useTimeFrame(senders);
  return (
    <Layout>
      <Header className="header">Finance App</Header>
      <Content>
            <Circles debit={debit} credit={credit} color={color} />
            <OptionsRow
              setPageSize={setPageSize}
              onSetTimeFrame={onSetTimeFrame}
            />
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
