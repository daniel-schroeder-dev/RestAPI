/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Table, Tag } from "antd";
const { Column, ColumnGroup } = Table;

const data = [
  {
    key: "1",
    name: "John",
    birthday: "1992-02-28",
    address: "New York No. 1 Lake Park",
    city: "Helsinki",
    zipcode: "00500",
    phone: "0000000",
    email: "anni.anonen@testing.fi",
    courses: [1]
  },
  {
    key: "2",
    name: "Jim",
    birthday: "1992-02-28",
    city: "Helsinki",
    address: "London No. 1 Lake Park",
    zipcode: "00500",
    phone: "0000000",
    email: "anni.anonen@testing.fi",
    courses: [1, 2]
  },
  {
    key: "3",
    name: "Joe",
    birthday: "1992-02-28",
    city: "Helsinki",
    address: "Sidney No. 1 Lake Park",
    zipcode: "00500",
    phone: "0000000",
    email: "anni.anonen@testing.fi",
    courses: [1]
  }
];

function Datatable() {
  return (
    <div>
      <div style={{ paddingLeft: "800px" }}>
        <input
          placeholder="Search student"
          onSearch={value => console.log(value)}
          style={{ width: "200px", height: "30px" }}
        />
      </div>

      <Table dataSource={data}>
        <ColumnGroup title="Student Details">
          <Column title="Name" dataIndex="name" key="name" />
          <Column title="Date of birth" dataIndex="birthday" key="birthday" />
          <Column title="Address" dataIndex="address" key="address" />
          <Column title="Zipcode" dataIndex="zipcode" key="zipcode" />
          <Column title="City" dataIndex="city" key="city" />
          <Column title="Phone" dataIndex="phone" key="phone" />
          <Column
            title="Courses"
            dataIndex="courses"
            key="courses"
            render={courses => (
              <span>
                {courses.map(tag => (
                  <Tag color="blue" key={tag}>
                    {tag}
                  </Tag>
                ))}
              </span>
            )}
          />
          <Column
            title="Action"
            key="action"
            render={(text, record) => (
              <span>
                <a href="#">Delete</a>
              </span>
            )}
          />
        </ColumnGroup>
      </Table>
    </div>
  );
}

export default Datatable;
