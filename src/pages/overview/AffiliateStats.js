import styles from "../../styles/overview.module.css";

import { Bar, BarChart, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts";

const headerText = {
  fontSize: 18,
  padding: "30px 28px 30px 28px",
  fontWeight: 500,
};

const dummyData = [
  {
    name: "Graphics",
    uv: 100000,
    pv: 60000,
    amt: 58000,
  },
  {
    name: "Theme",
    uv: 70000,
    pv: 50000,
    amt: 40000,
  },
  {
    name: "Template",
    uv: 48000,
    pv: 35000,
    amt: 30000,
  },
];

const AffiliatesStat = () => {
  //format Y-Axis data
  const DataFormatter = (number) => {
    if (number > 1000) {
      return (number / 1000).toString() + "K";
    } else {
      return number.toString();
    }
  };

  return (
    <div className={styles.card} style={{ height: 622, boxShadow: "none" }}>
      <div style={headerText}>Affiliate Impressions</div>
      <div style={{ margin: "120px 0 0 40px" }}>
        <BarChart
          width={380}
          height={320}
          data={dummyData}
          style={{ margin: "-20px 0px 20px -60px" }}
        >
          <CartesianGrid stroke="#cccccc30" strokeDasharray="1 0" />
          <XAxis dataKey="name" axisLine={false} />
          <YAxis
            yAxisId="left"
            orientation="left"
            stroke="#808191"
            tickFormatter={DataFormatter}
            axisLine={false}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            stroke="#fff"
            axisLine={false}
          />
          <Tooltip />
          <Bar yAxisId="left" dataKey="pv" fill="#6C5DD3" barSize={20} />
          <Bar yAxisId="right" dataKey="uv" fill="#A0D7E7" barSize={20} />
        </BarChart>
      </div>
    </div>
  );
};

export default AffiliatesStat;
