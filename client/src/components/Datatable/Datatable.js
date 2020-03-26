import React, { useState, useEffect } from "react";
import { logEntry } from "../Api/Api";
import { deleteStudent } from "../Api/Api";

function Datatable() {
  const [total, settotal] = useState([]);
  const [searchItem, setsearchItem] = useState({
    item: ""
  });
  const [data, setdata] = useState([]);
  const [filteredNames, setFilteredNames] = useState([]);
  const handleChange = e => {
    setsearchItem({ item: e.target.value });
    setFilteredNames(
      data.filter(list => {
        return list.name.toLowerCase().includes(searchItem.item.toLowerCase());
      })
    );
  };

  const getEntries = async () => {
    const logEntries = await logEntry();
    settotal(logEntries.count);
    setdata(logEntries.students);
  };

  const deleteData = async _id => {
    console.log(_id); // this should be that _id from the student
    await deleteStudent(_id);
  };

  useEffect(() => {
    getEntries();
  }, []);

  return (
    <div>
      <div style={{ paddingLeft: "800px" }}>
        <input
          placeholder="Search student"
          onChange={handleChange}
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
          {/* note this change! */}
          {filteredNames.length === 0 ? (
            <p>Student not found</p>
          ) : (
            filteredNames.map(name => {
              return (
                <tr>
                  <td>{name.name}</td>
                  <td>{name.city}</td>
                  <td>{name.address}</td>
                  <td>{name.phone}</td>
                  <td>{name.email}</td>
                  <td>
                    <a
                      className="waves-effect red btn-small"
                      onClick={() => deleteData(name._id)}
                    >
                      Delete
                    </a>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Datatable;
