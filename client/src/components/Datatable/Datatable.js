/* eslint-disable import/first */
import React, { useState, useEffect } from "react";
import { Table, Tag } from "antd";
const { Column, ColumnGroup } = Table;
import { logEntry } from "../Api/Api";

function Datatable() {
  const [info, setinfo] = useState([]);
  const [total, settotal] = useState([]);
  const getEntries = async () => {
    const logEntries = await logEntry();
    console.log(logEntries);
    settotal(logEntries.count);
    setinfo(logEntries.students);
  };

  useEffect(() => {
    getEntries();
  }, []);
  return (
    <div>
      <div style={{ paddingLeft: "800px" }}>
        <input
          placeholder="Search student"
          onSearch={value => console.log(value)}
          style={{ width: "200px", height: "30px" }}
        />
      </div>
      <p>Total student: {total} </p>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {info.map(list => {
            return (
              <tr>
                <td>{list.name}</td>
                <td>{list.city}</td>
                <td>{list.address}</td>
                <td>{list.phone}</td>
                <td>{list.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Datatable;
