import { Card, CardContent, Typography, Grid } from "@mui/material";
import { Color } from "../Color";

const Widget = ({ data, name }) => {
  const { total, newCase, date } = data;
  return (
    <div>
      <Typography variant="h5">{name}</Typography>
      <div style={{ display: "flex", gap: "2%", margin: "0 0 2% 0" }}>
        <Grid
          item
          component={Card}
          xs={6}
          md={12}
          style={{ borderBottom: `10px solid ${Color()}` }}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Till Now
            </Typography>
            <Typography variant="h5">{total.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}</Typography>
            <Typography color="textSecondary">
              {date.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </Typography>
            <Typography variant="body2">
              Number of {name} cases of COVID-19 Till Now
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={6}
          md={12}
          style={{ borderBottom: `10px solid ${Color()}` }}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Today
            </Typography>
            <Typography variant="h5">{newCase.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}</Typography>
            <Typography color="textSecondary">
              {date.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </Typography>
            <Typography variant="body2">
              Number of {name} cases of COVID-19 Today
            </Typography>
          </CardContent>
        </Grid>
      </div>
    </div>
  );
};

export default Widget;
