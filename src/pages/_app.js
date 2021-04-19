import React, { useState } from "react";
import { Layout, Button, Menu } from "antd";
import styles from "../styles/layout.module.css";
import HeaderView from "../components/layout/Header";
import SiderView from "../components/layout/Sider";
// require('../styles/variables.less');
import "../styles/globals.css";
import { useRouter } from "next/router";

const { Content } = Layout;

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  //set collapse state
  const [collapse, setCollapse] = useState(false);

  //retrieving route path name router
  const pageTitle = router.pathname.split("/")[1];
  return (
    <Layout className={styles.layout}>
      <SiderView setCollapse={setCollapse} collapse={collapse} />
      <Layout className="site-layout">
        <HeaderView
          title={pageTitle}
          collapse={collapse}
          setCollapse={setCollapse}
        />
        <Content
          className={styles.content}
          style={{ width: collapse ? "90%" : "78%" }}
        >
          <Component {...pageProps} collapse={collapse} />
        </Content>
      </Layout>
    </Layout>
  );
}

export default MyApp;
