import React from "react";
import Head from "next/head";
import styles from "../../styles/overview.module.css";
import ActiveUserChart from "./ActiveUserChart";
import UserChartStat from "./UserChartStat";
import IncomeChartStat from "./IncomeChartStat";
import IconProgressStat from "./IconProgressStat";
import SalesStat from "./SalesStat";
import GoalsStat from "./GoalsStat";
import AffiliatesStat from "./AffiliateStats";
import ActiveUserChartSmallScreen from "./ActiveUserChartSmallScreen";

//overview route
export default function Index({ collapse }) {
  return (
    <div>
      <div
        className={styles.overview_content}
        style={{ marginLeft: collapse && 60 }}
      >
        <div
          className={styles.overview_content_layout}
          style={{ display: "block" }}
        >
          <ActiveUserChart />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <UserChartStat />
            <IncomeChartStat />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <IconProgressStat />
            <SalesStat />
          </div>
          <div className={styles.overview_right_content2}>
            <GoalsStat />
            <AffiliatesStat />
          </div>
        </div>
        <div
          className={styles.overview_right_content}
          style={{ marginTop: -18 }}
        >
          <GoalsStat />
          <AffiliatesStat />
        </div>
      </div>
      {/**to display content at snall width **/}
      <div className={styles.small_content}>
        <ActiveUserChartSmallScreen />
        <div style={{ marginLeft: 20 }}>
          <UserChartStat />
          <IncomeChartStat />
          <IconProgressStat />
          <SalesStat />
          <GoalsStat />
          <AffiliatesStat />
        </div>
      </div>
    </div>
  );
}
