import React from "react";
import "antd/dist/antd.css";
import { Table} from "antd";
import "./table.scss";
import SenderCell from "./sender-cell";
const FinTable = ({ data, pageSize,titles,onPicRow}) => {
  const columns = [
    {
      key: '1',
      title: titles.id,
      dataIndex: "transaction_id",
      sorter: (a, b) => a.transaction_id - b.transaction_id,
      defaultSortOrder: "descend"
    },
    {
      key: '2',
      title: titles.date,
      dataIndex: "date",
      render: date => date.toLocaleString(),
      sorter: (a, b) => a.date.getTime() - b.date.getTime()
    },
    {
      key: '3',
      title: titles.debit,
      dataIndex: "debit",
      sorter: (a, b) => a.debit - b.debit
    },
    {
      key: '4',
      title: titles.credit,
      dataIndex: "credit",
      sorter: (a, b) => a.credit - b.credit
    },
    {
      key: '5',
      title: titles.sender,
      dataIndex: "sender",
      render: (item, { color }) => <SenderCell sender={item} color={color} />,
      sorter: (a, b) => a.sender.match(/\d+/) - b.sender.match(/\d+/)
    },
    {
      key: '6',
      title: titles.receiver,
      dataIndex: "receiver",
      sorter: (a, b) => a.receiver.match(/\d+/) - b.receiver.match(/\d+/)
    }
  ];

  return (
    <Table
    rowKey={(el)=>el.transaction_id}
      bordered={true}
      className="table"
      columns={columns}
      dataSource={data}
      size="middle"
      pagination={{ pageSize: pageSize }}
      onRow ={
        (row)=> {
          return {
            onClick: () =>onPicRow(row)
            
          }
        }
      }
    />
  );
};

export default FinTable;
