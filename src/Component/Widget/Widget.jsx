import { useEffect, useState } from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import styles from "./Widget.module.css";

const Widget = ({ data }) => {
  const [today, setToday] = useState();
  const [tillNow, setTillNow] = useState();

  const calculation = () => {
    const previousdata = data[0];
    const todaydataObj = data[1];
    setTillNow(todaydataObj);
    let newObj = Object.keys(previousdata).reduce((a, k) => {
      if (typeof previousdata[k] === "number")
        a[k] = Math.abs(previousdata[k] - todaydataObj[k]);
      else a[k] = new Date(todaydataObj[k]);
      return a;
    }, {});
    setToday(newObj);
    console.log("newObj :", newObj, previousdata);
  };
  useEffect(() => {
    calculation();
  }, []);
  return (
    <div>
      <Typography variant="h5">Death</Typography>
      <div style={{ display: "flex", gap: "2%", margin: "0 0 2% 0" }}>
        <Grid item component={Card} xs={6} md={12} className={styles.tillnow}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Till Now
            </Typography>
            <Typography variant="h5">{tillNow?.deaths}</Typography>
            <Typography color="textSecondary">
              {today?.date.toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of Death cases of COVID-19 Till Now
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={6} md={12} className={styles.today}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Today
            </Typography>
            <Typography variant="h5">{today?.deaths}</Typography>
            <Typography color="textSecondary">
              {today?.date.toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of Death cases of COVID-19 Today
            </Typography>
          </CardContent>
        </Grid>
      </div>
      <Typography variant="h5">Confirmed</Typography>
      <div style={{ display: "flex", gap: "2%" }}>
        <Grid item component={Card} xs={6} md={12} className={styles.tillnow}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Till Now
            </Typography>
            <Typography variant="h5">{tillNow?.confirmed}</Typography>
            <Typography color="textSecondary">
              {today?.date.toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of Confirmed cases of COVID-19 Till Now
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={6} md={12} className={styles.today}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Today
            </Typography>
            <Typography variant="h5">{today?.confirmed}</Typography>
            <Typography color="textSecondary">
              {today?.date.toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of Confirmed cases of COVID-19 Today
            </Typography>
          </CardContent>
        </Grid>
      </div>
      {/* <Typography variant="h5">Recovered</Typography>
      <div style={{ display: "flex", gap: "2%", margin: "0 0 2% 0" }}>
        <Grid item component={Card} xs={6} md={5} className={styles.tillnow}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Till Now
            </Typography>
            <Typography variant="h5">{tillNow?.recovered}</Typography>
            <Typography color="textSecondary">
              {today?.date.toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of Recovered cases of COVID-19 Till Now
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={6} md={5} className={styles.today}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Today
            </Typography>
            <Typography variant="h5">{today?.recovered}</Typography>
            <Typography color="textSecondary">
              {today?.date.toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of Recovered cases of COVID-19 Today
            </Typography>
          </CardContent>
        </Grid>
      </div> */}
    </div>
  );
};

export default Widget;
