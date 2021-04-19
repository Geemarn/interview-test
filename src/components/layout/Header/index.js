import React from "react";
import { Layout, Row, Col } from "antd";
import Head from "next/head";
import styles from "../../../styles/header.module.css";
import mainStyles from "../../../styles/layout.module.css";
import SearchIcon from "../../../assets/search-icon.svg";
import NotifyIcon from "../../../assets/notify-icon.svg";
import { useRouter } from "next/router";
import BurgerIcon from "../../../assets/burger-icon.svg";

const { Header } = Layout;

const HeaderView = (props) => {
  const { title, collapse, setCollapse } = props;
  return (
    <Header
      className={mainStyles.header}
      style={{ width: collapse ? "85.4%" : "78%", marginLeft: collapse && 60 }}
    >
      <Head>
        <title>Interview Test</title>
      </Head>
      <div className={styles.header_content}>
        <div>
          <p className={styles.small_text}>Hi Dash Biden,</p>
          <p className={styles.large_text}>{title}</p>
        </div>
        <div className={styles.header_content_left}>
          <div>
            <SearchIcon
              style={{ position: "relative", top: 4, marginRight: 10 }}
            />{" "}
            Search
          </div>
          <div style={{ position: "relative" }}>
            <NotifyIcon style={{ position: "relative", top: 14 }} />
            <div className={mainStyles.circle}>28</div>
          </div>
        </div>
      </div>
      {/**to display header at snall width **/}
      <div className={styles.small_header}>
        <BurgerIcon
          style={{ position: "relative", top: 26 }}
          onClick={() => setCollapse((prev) => !prev)}
        />
        <div>
          <SearchIcon
            style={{ position: "relative", top: 6, marginRight: 10 }}
          />{" "}
          Search
        </div>
        <div style={{ position: "relative" }}>
          <NotifyIcon style={{ position: "relative", top: 8 }} />
          <div className={mainStyles.circle}>28</div>
        </div>
      </div>
    </Header>
  );
};

export default HeaderView;
