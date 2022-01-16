import { Card, CardContent, Typography, Grid } from "@mui/material";
import { Doughnut } from "react-chartjs-2";
import { Color } from "../Color";
import { Chart as ChartJS, ArcElement } from "chart.js";
ChartJS.register(ArcElement);

const PieChart = ({ data }) => {
  const { Confirmed, Death } = data;
  return (
    <div style={{ margin: "0 0 2% 0" }}>
      <Typography variant="h5">PieChart</Typography>
      <Grid
        item
        component={Card}
        xs={12}
        md={12}
        style={{ borderBottom: `10px solid ${Color()}` }}
      >
        <CardContent>
          <Doughnut
            data={{
              datasets: [
                {
                  data: [Confirmed, Death],
                  backgroundColor: [Color(), Color()],
                },
              ],
              labels: ["Confirmed", "Death"],
            }}
            options={{
            //   rotation: -90,
            //   circumference: 180,
              responsive: true,
              maintainAspectRatio: true,
            }}
          />
        </CardContent>
      </Grid>
    </div>
  );
};

export default PieChart;
