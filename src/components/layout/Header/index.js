import React from "react";
import { Layout, Row, Col } from "antd";
import Head from "next/head";
import styles from "../../../styles/header.module.css";
import mainStyles from "../../../styles/Layout.module.css";
import SearchIcon from "../../../assets/search-icon.svg";
import NotifyIcon from "../../../assets/notify-icon.svg";
import { useRouter } from "next/router";

const { Header } = Layout;

const HeaderView = (props) => {
  const { title } = props;
  return (
    <Header className={`${mainStyles.header} site-layout-background`}>
      <Head>
        <title>Interview Test</title>
      </Head>
      <Row justify="space-around">
        <Col xs={24} sm={12} md={8} lg={12} xl={8}>
          <p className={styles.small_text}>Hi Dash UI8,</p>
          <p className={styles.large_text}>{title}</p>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={8}>
          <SearchIcon
            style={{ position: "relative", top: 4, marginRight: 10 }}
          />{" "}
          Search
        </Col>
        <Col
          xs={24}
          sm={12}
          md={8}
          lg={6}
          xl={8}
          style={{ position: "relative" }}
        >
          <NotifyIcon style={{ position: "relative", top: 14 }} />
          <div className={mainStyles.circle}>28</div>
        </Col>
      </Row>
    </Header>
  );
};

export default HeaderView;
