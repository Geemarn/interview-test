import React, { useState } from "react";
import { Layout, Menu, Divider, Button, Avatar, Switch } from "antd";
import Logo from "../../../assets/logo.svg";
import SmallLogo from "../../../assets/logo-2.svg";
import OverviewIcon from "../../../assets/overview-icon.svg";
import ProductIcon from "../../../assets/product-icon.svg";
import CampaignIcon from "../../../assets/campaign-icon.svg";
import ScheduleIcon from "../../../assets/schedule-icon.svg";
import PayoutIcon from "../../../assets/payout-icon.svg";
import StatementIcon from "../../../assets/statement-icon.svg";
import SettingIcon from "../../../assets/setting-icon.svg";
import MessageIcon from "../../../assets/message-icon.svg";
import NotificationIcon from "../../../assets/notification-icon.svg";
import ChatIcon from "../../../assets/chat-icon.svg";
import BurgerIcon from "../../../assets/burger-icon.svg";
import UserProfileBtn from "./user-profile-btn";
import styles from "../../../styles/Layout.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const { Sider } = Layout;

//icon style
const iconStyle = {
  position: "relative",
  top: 5,
  marginRight: 20,
};

const SiderView = () => {
  const router = useRouter();
  const [collapse, setCollapse] = useState(false);

  //toggle side bar collapse
  const toggleCollapsed = () => {
    setCollapse((prev) => !prev);
  };

  //set condition to show if side bar is collapsed or not
  const collapseStyle = collapse ? "collapse" : null;

  //burger icon
  const Burger = ({ marginLeft, marginBottom }) => (
    <BurgerIcon
      style={{ cursor: "pointer", marginLeft, marginBottom }}
      onClick={toggleCollapsed}
    />
  );

  return (
    <Sider
      theme={"light"}
      className={styles.sider}
      width={256}
      collapsible
      collapsed={collapse}
      style={{
        padding: collapse && "20px 0",
        width: collapse && 0,
      }}
      trigger={null}
    >
      {collapse && (
        <div>
          <Burger marginLeft={22} />
          <Divider />
        </div>
      )}

      <div className={styles.logo}>
        {collapse ? <SmallLogo style={{ marginLeft: 10 }} /> : <Logo />}
        {!collapse && <Burger marginBottom={20} />}
      </div>
      <Menu defaultSelectedKeys={["overview"]} style={{ border: "none" }}>
        <p className={styles.smallText}>
          {!collapse ? (
            "Admin tools"
          ) : (
            <span style={{ paddingLeft: 4 }}>Admin</span>
          )}
        </p>
        <Menu.Item
          key="/overview"
          onClick={() => router.push("/overview")}
          className={collapseStyle}
          icon={<OverviewIcon style={iconStyle} />}
        >
          Overview
        </Menu.Item>
        <Menu.Item
          key="product"
          onClick={() => router.push("/product")}
          className={collapseStyle}
          icon={<ProductIcon style={iconStyle} />}
        >
          Products
        </Menu.Item>
        <Menu.Item
          key="campaign"
          onClick={() => router.push("/campaign")}
          className={collapseStyle}
          icon={<CampaignIcon style={iconStyle} />}
        >
          Campaigns
        </Menu.Item>
        <Menu.Item
          key="schedule"
          onClick={() => router.push("/campaign")}
          className={collapseStyle}
          icon={<ScheduleIcon style={iconStyle} />}
        >
          Schedules
        </Menu.Item>
        <Menu.Item
          key="payout"
          onClick={() => router.push("/campaign")}
          className={collapseStyle}
          icon={<PayoutIcon style={iconStyle} />}
        >
          Payouts
        </Menu.Item>
        <Menu.Item
          key="statement"
          onClick={() => router.push("/campaign")}
          className={collapseStyle}
          icon={<StatementIcon style={iconStyle} />}
        >
          Statements
        </Menu.Item>
        <Menu.Item
          key="setting"
          onClick={() => router.push("/campaign")}
          className={collapseStyle}
          icon={<SettingIcon style={iconStyle} />}
        >
          Settings
        </Menu.Item>
        <div className={styles.divider}>
          <Divider />
        </div>
        <p className={styles.smallText}>Insights</p>
        <Menu.Item
          key="inbox"
          onClick={() => router.push("/campaign")}
          className={collapseStyle}
          icon={<MessageIcon style={iconStyle} />}
        >
          Inbox
          <span style={{ paddingLeft: 80 }}>
            <Avatar style={{ color: "#fff", background: "#FF754C" }} size={24}>
              28
            </Avatar>
          </span>
        </Menu.Item>
        <Menu.Item
          key="notifications"
          onClick={() => router.push("/campaign")}
          className={collapseStyle}
          icon={<NotificationIcon style={iconStyle} />}
        >
          Notifications
          <span style={{ paddingLeft: 30 }}>
            <Avatar style={{ color: "#fff", background: "#FF754C" }} size={24}>
              28
            </Avatar>
          </span>
        </Menu.Item>
        <Menu.Item
          key="comments"
          onClick={() => router.push("/campaign")}
          className={collapseStyle}
          icon={<ChatIcon style={iconStyle} />}
        >
          Comments
          <span style={{ paddingLeft: 42 }}>
            <Avatar style={{ color: "#fff", background: "#FF754C" }} size={24}>
              28
            </Avatar>
          </span>
        </Menu.Item>
      </Menu>
      <UserProfileBtn
        styles={styles}
        iconStyle={iconStyle}
        collapse={collapse}
      />
      {!collapse && (
        <div>
          <div style={{ height: 80 }} />
          <div className={styles.sider_bottom}>
            <Switch />
          </div>
        </div>
      )}
    </Sider>
  );
};

export default SiderView;
