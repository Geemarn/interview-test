import styles from "../../styles/overview.module.css";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const headerText = {
  fontSize: 18,
  padding: "28px 0 0 28px",
  color: "#fff",
  fontWeight: 500,
};
const dummyData = [
  {
    name: "Oct",
    uv: 68,
    pv: 55,
    amt: 58,
  },
  {
    name: "Mar",
    uv: 48,
    pv: 39,
    amt: 20,
  },
  {
    name: "Aug",
    uv: 36,
    pv: 35,
    amt: 40,
  },
];
const IncomeChartStat = () => {
  return (
    <div className={styles.card} style={{ background: "#6C5DD3" }}>
      <div style={headerText}>Income</div>
      <div className={styles.white_card}>
        <div>
          <BarChart
            width={340}
            height={190}
            data={dummyData}
            style={{ margin: "-20px 0px 20px -54px" }}
          >
            <XAxis dataKey="name" axisLine={false} />
            <YAxis
              yAxisId="left"
              orientation="left"
              stroke="#808191"
              axisLine={false}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              stroke="none"
              axisLine={false}
            />
            <Tooltip />
            <Bar yAxisId="left" dataKey="pv" fill="#6C5DD3" />
            <Bar yAxisId="right" dataKey="uv" fill="#A0D7E7" />
          </BarChart>
        </div>
        <div className={styles.custom_btn} style={{ marginLeft: -10 }}>
          Withdraw Earning
        </div>
      </div>
    </div>
  );
};

export default IncomeChartStat;
