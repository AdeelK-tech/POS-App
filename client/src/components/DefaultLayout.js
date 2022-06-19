import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  UnorderedListOutlined,
  CopyOutlined,
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/DefaultLayout.css";
const { Header, Sider, Content } = Layout;

const DefaultLayout = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <h2 className="text-center text-light mt-4">POS</h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[window.location.pathname]}
        >
          <Menu.Item key={"/"} icon={<HomeOutlined />} label={"Home"}>
            <Link to={"/"}>Home</Link>
          </Menu.Item>

          <Menu.Item
            key={"/items"}
            icon={<UnorderedListOutlined />}
            label={"Items"}
          >
            <Link to={"/items"}>Items</Link>
          </Menu.Item>

          <Menu.Item
            key={"/customers"}
            icon={<UserOutlined />}
            label={"Customers"}
          >
            <Link to={"/customers"}>Customers</Link>
          </Menu.Item>

          <Menu.Item key={"/bills"} icon={<CopyOutlined />} label={"Bills"}>
            <Link to={"/bills"}>Bills</Link>
          </Menu.Item>

          <Menu.Item key={"/logout"} icon={<LogoutOutlined />} label={"Logout"}>
            <Link to={"/items"}>Logout</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default DefaultLayout;
