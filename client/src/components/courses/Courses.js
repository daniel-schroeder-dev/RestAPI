/* eslint-disable import/first */
import React, { useState, useEffect } from "react";
import { courseData } from "../Api/Api";
import moment from "moment";

function Datatable() {
  const [info, setinfo] = useState([]);
  const [total, settotal] = useState([]);
  const getEntries = async () => {
    const logEntries = await courseData();
    console.log(logEntries);
    settotal(logEntries.count);
    setinfo(logEntries.courses);
  };

  useEffect(() => {
    getEntries();
  }, []);
  return (
    <div>
      <p>Total courses: {total} </p>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Startdate</th>
            <th>Enddate</th>
          </tr>
        </thead>

        <tbody>
          {info.map(list => {
            return (
              <tr>
                <td>{list.name}</td>
                <td>{moment(list.startdate).format("LLLL")}</td>
                <td>{moment(list.enddate).format("LLLL")}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Datatable;
