import { Card, CardContent, Typography, Grid } from "@mui/material";
import { Line } from "react-chartjs-2";
import styles from "./Chart.module.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
);

const Chart = ({ data }) => {
  console.log("chart :", data);

  return (
    <div>
      <Typography variant="h5">Death</Typography>
      <Grid item component={Card} xs={12} md={12} className={styles.Chart}>
        <CardContent>
          <Line
            data={{
              labels: data.map((coin) => new Date(coin.date).toLocaleDateString("en-US", {year: '2-digit', month: 'short', day: 'numeric' })),

              datasets: [
                {
                  data: data.map((coin) => coin.deaths),
                  label: ``,
                  borderColor: "#EEBC1D",
                  fill: false,
                  borderWidth: 2,
                  pointRadius: 0,
                  pointHoverRadius: 2,
                },
              ],
            }}
            options={{
              responsive: true,
              interaction: {
                mode: 'index'
            },
              plugins: {
                legend: {
                  display: false,
                },
                title: {
                  display: false,
                  text: "Chart.js Line Chart",
                },
              },
              scales: {
                x: {
                  grid: {
                    display: false,
                  },
                  ticks: {
                    // maxTicksLimit: 8,
                    maxRotation: 0,
                    callback: function(val, index) {
                      return index % 2=== 0 ? this.getLabelForValue(val) : '';
                    },
                  }
                },
                y: {
                  grid: {
                    display: false,
                  },
                },
              },
            }}
          />
        </CardContent>
      </Grid>
    </div>
  );
};

export default Chart;
