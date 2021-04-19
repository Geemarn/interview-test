import styles from "../../styles/overview.module.css";
import BarChartIcon from "../../assets/bar-chart.svg";
import BarChart2Icon from "../../assets/bar-chart-2.svg";
import { Divider, Progress } from "antd";

const percentText = { fontSize: 14, color: "#7FBA7A", fontWeight: 600 };

const UserChartStat = () => {
  return (
    <div className={styles.card}>
      <div style={{ fontSize: 18, padding: "28px 0 0 28px" }}>Users</div>
      <div className={styles.new_user_container}>
        <div>
          <span style={{ color: "#808191" }}>New Users</span>
          <div style={{ fontSize: 32, fontWeight: 500 }}>57m</div>
          <div style={percentText}>21.77%</div>
        </div>
        <div>
          <BarChartIcon style={{ marginTop: 20 }} />
        </div>
      </div>
      <div className={styles.new_user_container}>
        <div>
          <span style={{ color: "#808191" }}>New Users</span>
          <div style={{ fontSize: 32, fontWeight: 500 }}>36k</div>
          <div style={percentText}>26.77%</div>
        </div>
        <div>
          <BarChart2Icon style={{ marginTop: 20 }} />
        </div>
      </div>
      <div className={styles.setting_text}>Go to setting</div>
    </div>
  );
};

export default UserChartStat;
