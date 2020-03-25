import React, { useState } from "react";
import "./Dashboard.css";
import dp from "./logo/dp.png";
import Datatable from "../Datatable/Datatable";
import Addstudent from "../Addstudent/Addstudent";
import { Layout, Avatar, Menu, Breadcrumb } from "antd";
import Title from "antd/lib/typography/Title";
const { Header, Footer, Sider, Content } = Layout;

function Dashboard() {
  const [state, setState] = useState({
    collapsed: false,
    table: false,
    add: false,
    course: false,
    info: false
  });

  const onCollapse = collapsed => {
    setState({ ...state, collapsed });
  };

  const handleMenuClick = event => {
    //console.log("event: ", event);
    setState({
      ...state,
      table: false,
      add: false,
      course: false,
      info: false,
      [event.key]: !state[event.key]
    });
  };

  return (
    <div className="App">
      <Layout>
        <Header style={{ padding: 10 }}>
          <Avatar style={{ float: "right" }} src={dp} />
          <Title style={{ color: "white" }} level={3}>
            Student data
          </Title>
        </Header>
        <Layout>
          <Sider
            collapsible
            collapsed={state.collapsed}
            onCollapse={onCollapse}
          >
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["4"]}
              onClick={handleMenuClick}
            >
              <Menu.Item key="table">
                <span className="nav-text">Student table</span>
              </Menu.Item>
              <Menu.Item key="add">
                <span className="nav-text">Add student</span>
              </Menu.Item>
              <Menu.Item key="course">
                <span className="nav-text">Course</span>
              </Menu.Item>
              <Menu.Item key="info">
                <span className="nav-text">Information table</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ padding: "0 50px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>Data</Breadcrumb.Item>
              </Breadcrumb>

              <div style={{ background: "#fff", padding: 24, minHeight: 580 }}>
                {state.table && <Datatable />}
                {state.add && <Addstudent />}
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>Copy right-alakdam</Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default Dashboard;
