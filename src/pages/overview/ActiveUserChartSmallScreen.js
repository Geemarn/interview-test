import styles from "../../styles/overview.module.css";
import BtnIcon from "../../assets/btn-icon.svg";
import PathIcon from "../../assets/path-icon.svg";
import CircleArrowIcon from "../../assets/circle-arrow-icon.svg";
import UserIcon from "../../assets/user-icon.svg";
import ClickIcon from "../../assets/click-icon.svg";
import SaleIcon from "../../assets/sale-icon.svg";
import ItemIcon from "../../assets/item-icon.svg";
import Chart2 from "../../assets/chart2.svg";
import { Divider, Progress } from "antd";

const bottomBorderStyle = {
  padding: 20,
  borderRight: "1px solid #e4e4e4",
  width: 143,
};
const iconStyle = { position: "relative", top: 2 };

const ActiveUserChartSmallScreen = () => {
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
    <div
      className={styles.card}
      style={{ width: 320, height: 779, padding: "28px 10px" }}
    >
      <h3 style={{ paddingLeft: 10 }}>Active Users right now 💡</h3>
      <div style={{ marginTop: 14 }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ marginRight: 20 }}>
            <p className={styles.large_text} style={{ paddingLeft: 10 }}>
              489
            </p>
            <div style={{ display: "flex", marginBottom: -10 }}>
              <div>
                <BtnIcon style={{ margin: "5px 14px 0 2px" }} />
              </div>{" "}
              <span style={{ color: "#5F75EE" }}>Page views per minute</span>
            </div>
          </div>
          <div>
            <div style={{ display: "flex", margin: "36px 0 4px 0" }}>
              <div>
                <PathIcon style={{ marginRight: 10 }} />
              </div>
              <div>
                <CircleArrowIcon style={{ marginTop: 4 }} />
              </div>
              <div style={{ margin: "2px 0 0 6px" }}>6%</div>
            </div>
            <div style={{ color: "#B2B3BD", marginTop: 20 }}>
              Update your payout method in Settings
            </div>
          </div>
        </div>
        <div style={{ margin: "24px 0 20px 10px" }}>
          <Chart2 />
        </div>
      </div>
      <div
        style={{ border: "1px solid #e4e4e4", borderRadius: 16, width: 298 }}
      >
        <div className={styles.bottom_display2}>
          <div style={bottomBorderStyle}>
            <UserIcon style={iconStyle} />
            <span className={styles.bottom_text}>Users</span>
            <div className={styles.bottom_large_text}>36K</div>
            <ProgressBar color={"#6C5DD3"} />
          </div>
          <div style={{ padding: 20, width: 143 }}>
            <ClickIcon style={iconStyle} />
            <span className={styles.bottom_text}>Clicks</span>
            <div className={styles.bottom_large_text}>1m</div>
            <ProgressBar color={"#FFA2C0"} />
          </div>
        </div>
        <div
          className={styles.bottom_display2}
          style={{ borderTop: "1px solid #e4e4e4", borderRadius: 0 }}
        >
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
    </div>
  );
};

export default ActiveUserChartSmallScreen;
