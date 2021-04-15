import React from 'react';
import {Layout, Button, Menu} from 'antd';
import styles from '../../styles/Layout.module.css';
import  Logo from '../../assets/logo.svg';
import Link from 'next/link';
const { Header, Footer, Sider, Content } = Layout;


/** Layout component for app **/
const LayoutView = ({ children }) => {
  return (
    <Layout className={styles.layout}>
      <Sider theme={'light'} className={styles.sider} width={256}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <small>Admin tools</small>
        <Menu theme="light" mode="vertical" defaultSelectedKeys={['2']}>
          <Menu.Item key="/dashboard">
            <Link href="/dashboard">
            Dashboard
            </Link>
          </Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header> Header Header Header Header Header</Header>
        <Content className={styles.content}>
          <ContentView/>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  )
};

export default LayoutView;