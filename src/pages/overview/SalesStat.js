import styles from "../../styles/overview.module.css";
import Image from "next/image";

const percentText = {
  fontSize: 16,
  color: "#7FBA7A",
  fontWeight: 600,
  marginTop: 10,
};
const headerText = {
  fontSize: 18,
  padding: "28px 28px 4px 28px",
  fontWeight: 500,
  display: "flex",
  justifyContent: "space-between",
};

const SalesStat = () => {
  return (
    <div className={styles.card} style={{ height: 457 }}>
      <div style={headerText}>
        <div>Latest Sales</div>
        <div style={{ fontSize: 20, cursor: "pointer" }}>→</div>
      </div>
      <div className={styles.icon_container} style={{ padding: 24 }}>
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
        <div style={percentText}>+$35</div>
      </div>
      <div className={styles.icon_container} style={{ padding: 24 }}>
        <div>
          <Image
            src={require("../../public/icon-3.png")}
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
        <div style={percentText}>+$35</div>
      </div>
      <div className={styles.icon_container} style={{ padding: 24 }}>
        <div>
          <Image
            src={require("../../public/icon-4.png")}
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
        <div style={percentText}>+$35</div>
      </div>
      <div
        className={styles.custom_btn}
        style={{ margin: "4px auto 0 auto", background: "#6C5DD3" }}
      >
        Show all report
      </div>
    </div>
  );
};

export default SalesStat;
