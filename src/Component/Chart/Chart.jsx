import { Card, CardContent, Typography, Grid } from "@mui/material";
import { Line } from "react-chartjs-2";
import { Color } from "../Color";
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
import zoomPlugin from "chartjs-plugin-zoom";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  zoomPlugin
);

const Chart = ({ data, name }) => {
  return (
    <div style={{ margin: "0 0 2% 0" }}>
      <Typography variant="h5">{name}</Typography>
      <Grid
        item
        component={Card}
        xs={12}
        md={12}
        style={{ borderBottom: `10px solid ${Color()}` }}
      >
        <CardContent>
          <Line
            data={{
              labels: data.map((coin) =>
                new Date(coin.date).toLocaleDateString("en-US", {
                  year: "2-digit",
                  month: "short",
                  day: "numeric",
                })
              ),

              datasets: [
                {
                  data: data.map((coin) => coin[name]),
                  label: ``,
                  borderColor: Color(),
                  fill: false,
                  borderWidth: 2,
                  pointRadius: 0,
                  pointHoverRadius: 2,
                },
              ],
            }}
            options={{
              responsive: true,
              hover: {
                mode: "index",
                axis: "x",
                intersect: false,
              },
              plugins: {
                legend: {
                  display: false,
                },
                title: {
                  display: false,
                  text: "Chart.js Line Chart",
                },
                tooltip: {
                  mode: "index",
                  axis: "x",
                  intersect: false,
                },
                zoom: {
                  zoom: {
                    wheel: {
                      enabled: true,
                    },
                    pinch: {
                      enabled: true,
                    },
                    mode: "xy",
                    drag: {
                      enabled: true,
                      modifierKey:"ctrl",
                    },
                  },
                  pan: {
                    enabled: true,
                    mode: "xy",
                  },
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
                    callback: function (val, index) {
                      return index % 2 === 0 ? this.getLabelForValue(val) : "";
                    },
                  },
                },
                y: {
                  display: false,
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
