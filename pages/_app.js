import React from 'react';
import {Layout, Button, Menu} from 'antd';
import styles from '../styles/Layout.module.css';
import HeaderView from '../components/layout/Header';
import SiderView from '../components/layout/Sider';
// require('../styles/variables.less');
import '../styles/globals.less'
const { Content } = Layout;


function MyApp({ Component, pageProps }) {
  return (
    <Layout className={styles.layout}>
      <SiderView />
      <Layout className="site-layout">
        <HeaderView />
        <Content className={styles.content}>
          <Component {...pageProps} />
        </Content>
      </Layout>
    </Layout>
  )
}

export default MyApp
