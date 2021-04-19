import styles from "../../styles/overview.module.css";
import BtnIcon from "../../assets/btn-icon.svg";
import PathIcon from "../../assets/path-icon.svg";
import CircleArrowIcon from "../../assets/circle-arrow-icon.svg";
import UserIcon from "../../assets/user-icon.svg";
import ClickIcon from "../../assets/click-icon.svg";
import SaleIcon from "../../assets/sale-icon.svg";
import ItemIcon from "../../assets/item-icon.svg";
import Chart from "../../assets/chart.svg";
import { Divider, Progress } from "antd";

const bottomBorderStyle = {
  padding: 20,
  borderRight: "1px solid #e4e4e4",
  width: 143,
};
const iconStyle = { position: "relative", top: 2 };

const ActiveUserChart = () => {
  const ProgressBar = ({ color }) => (
    <div style={{ marginTop: -8 }}>
      <Progress
        percent={50}
        showInfo={false}
        strokeWidth={4}
        strokeColor={color}
      />
    </div>
  );

  return (
    <div className={styles.main_card}>
      <h3>Active Users right now 💡</h3>
      <div style={{ display: "flex", marginTop: 14 }}>
        <div style={{ width: 140 }}>
          <p className={styles.large_text}>489</p>
          <div style={{ display: "flex", marginBottom: -10 }}>
            <div>
              <BtnIcon style={{ margin: "5px 16px 0 0" }} />
            </div>{" "}
            <span style={{ color: "#5F75EE" }}>Page views per minute</span>
          </div>
          <Divider />
          <div style={{ display: "flex", margin: "-10px 0 4px 0" }}>
            <div>
              <PathIcon style={{ marginRight: 10 }} />
            </div>
            <div>
              <CircleArrowIcon style={{ marginTop: 4 }} />
            </div>
            <div style={{ margin: "2px 0 0 6px" }}>6%</div>
          </div>
          <span style={{ color: "#B2B3BD" }}>
            Update your payout method in Settings
          </span>
        </div>
        <div style={{ margin: "24px 0 0 10px" }}>
          <Chart />
        </div>
      </div>
      <div className={styles.bottom_display}>
        <div style={bottomBorderStyle}>
          <UserIcon style={iconStyle} />
          <span className={styles.bottom_text}>Users</span>
          <div className={styles.bottom_large_text}>36K</div>
          <ProgressBar color={"#6C5DD3"} />
        </div>
        `
        <div style={bottomBorderStyle}>
          <ClickIcon style={iconStyle} />
          <span className={styles.bottom_text}>Clicks</span>
          <div className={styles.bottom_large_text}>1m</div>
          <ProgressBar color={"#FFA2C0"} />
        </div>
        <div style={bottomBorderStyle}>
          <SaleIcon style={iconStyle} />
          <span className={styles.bottom_text}>Sales</span>
          <div className={styles.bottom_large_text}>325$</div>
          <ProgressBar color={"green"} />
        </div>
        <div style={{ ...bottomBorderStyle, borderRight: "none" }}>
          <ItemIcon style={iconStyle} />
          <span className={styles.bottom_text}>Items</span>
          <div className={styles.bottom_large_text}>69</div>
          <ProgressBar color={"orange"} />
        </div>
      </div>
    </div>
  );
};

export default ActiveUserChart;
