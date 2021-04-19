import styles from "../../styles/overview.module.css";
import ArrowLeft from "../../assets/arrow-icon-left.svg";
import ArrowRight from "../../assets/arrow-icon-right.svg";

import Image from "next/image";
import { Progress } from "antd";

const textDisplay = {
  display: "flex",
  justifyContent: "space-between",
  fontWeight: 600,
  fontSize: 16,
};
const headerText = {
  fontSize: 18,
  padding: "30px 28px 30px 28px",
  fontWeight: 500,
};

const GoalsStat = () => {
  const ProgressBar = ({ color, percent }) => (
    <Progress
      percent={percent}
      showInfo={false}
      strokeWidth={8}
      strokeColor={color}
    />
  );

  return (
    <div className={styles.card} style={{ height: 600 }}>
      <div style={headerText}>2020 Goal</div>
      <div style={{ display: "flex", padding: "0 18px", marginBottom: 4 }}>
        <div style={{ display: "flex", cursor: "pointer" }}>
          <ArrowLeft />
          <ArrowRight />
        </div>
        <div>
          <Image
            src={require("../../public/img-bg.png")}
            alt={"icon"}
            width={229}
            height={220}
          />
        </div>
      </div>
      <div style={{ padding: "18px 28px" }}>
        <div style={textDisplay}>
          <div>Bento Illustration</div>
          <div>40%</div>
        </div>
        <ProgressBar color={"#6C5DD3"} percent={40} />
      </div>
      <div style={{ padding: "18px 28px" }}>
        <div style={textDisplay}>
          <div>Bento Illustration</div>
          <div>25%</div>
        </div>
        <ProgressBar color={"#7FBA7A"} percent={40} />
      </div>
      <div style={{ padding: "18px 28px" }}>
        <div style={textDisplay}>
          <div>Bento Illustration</div>
          <div>40%</div>
        </div>
        <ProgressBar color={"#FFCE73"} percent={50} />
      </div>
      <div style={{ padding: "18px 28px" }}>
        <div style={textDisplay}>
          <div>Bento Illustration</div>
          <div>40%</div>
        </div>
        <ProgressBar color={"#FFA2C0"} percent={80} />
      </div>
    </div>
  );
};

export default GoalsStat;
