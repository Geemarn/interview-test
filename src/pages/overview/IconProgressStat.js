import styles from "../../styles/overview.module.css";
import { Progress } from "antd";
import Image from "next/image";

const headerText = {
  fontSize: 18,
  padding: "28px 0 8px 28px",
  fontWeight: 500,
};

const IconProgressStat = () => {
  const ProgressCircleBar = ({ color, percent }) => (
    <div style={{ marginTop: -8 }}>
      <Progress
        percent={percent}
        strokeWidth={10}
        strokeColor={color}
        type={"circle"}
        width={70}
      />
    </div>
  );

  return (
    <div className={styles.card} style={{ height: 457 }}>
      <div style={headerText}>Icon Progress</div>
      <div className={styles.icon_container}>
        <div>
          <Image
            src={require("../../public/icon-1.png")}
            alt={"icon"}
            width={48}
            height={48}
          />
        </div>
        <div>
          <span style={{ fontSize: 16, fontWeight: 600 }}>Unity Comps</span>
          <br />
          <span style={{ color: "#808191", fontWeight: 500 }}>New 3D Kit</span>
        </div>
        <div>
          <ProgressCircleBar color={"#6C5DD3"} percent={25} />
        </div>
      </div>
      <div className={styles.icon_container}>
        <div>
          <Image
            src={require("../../public/icon-2.png")}
            alt={"icon"}
            width={48}
            height={48}
          />
        </div>
        <div>
          <span style={{ fontSize: 16, fontWeight: 600 }}>Folio Designer</span>
          <br />
          <span style={{ color: "#808191", fontWeight: 500 }}>
            UI Design Kit
          </span>
        </div>
        <div>
          <ProgressCircleBar color={"#7FBA7A"} percent={62} />
        </div>
      </div>
      <div className={styles.icon_container}>
        <div>
          <Image
            src={require("../../public/icon-3.png")}
            alt={"icon"}
            width={48}
            height={48}
          />
        </div>
        <div>
          <span style={{ fontSize: 16, fontWeight: 600 }}>Folio Agency</span>
          <br />
          <span style={{ color: "#808191", fontWeight: 500 }}>
            UI Design Kit
          </span>
        </div>
        <div>
          <ProgressCircleBar color={"#FF754C"} percent={75} />
        </div>
      </div>
      <div className={styles.custom_btn} style={{ margin: "0 auto" }}>
        Discover More
      </div>
    </div>
  );
};

export default IconProgressStat;
