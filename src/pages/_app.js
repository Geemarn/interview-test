import React from "react";
import { Layout, Button, Menu } from "antd";
import styles from "../styles/Layout.module.css";
import HeaderView from "../components/layout/Header";
import SiderView from "../components/layout/Sider";
// require('../styles/variables.less');
import "../styles/globals.css";
import { useRouter } from "next/router";

const { Content } = Layout;

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  //retrieving route path name router
  const pageTitle = router.pathname.split("/")[1];
  return (
    <Layout className={styles.layout}>
      <SiderView />
      <Layout className="site-layout">
        <HeaderView title={pageTitle} />
        <Content className={styles.content}>
          <Component {...pageProps} />
        </Content>
      </Layout>
    </Layout>
  );
}

export default MyApp;
