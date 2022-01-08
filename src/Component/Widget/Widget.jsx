import { Card, CardContent, Typography, Grid } from "@mui/material";
import {Color} from "../Color"

const Widget = ({data,name}) => {
  const {total,newCase}=data
  return (
    <div>
      <Typography variant="h5">{name}</Typography>
      <div style={{ display: "flex", gap: "2%", margin: "0 0 2% 0" }}>
        <Grid item component={Card} xs={6} md={12} style={{'border-bottom': `10px solid ${Color()}`}}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Till Now
            </Typography>
            <Typography variant="h5">{total}</Typography>
            <Typography color="textSecondary">

            </Typography>
            <Typography variant="body2">
              Number of {name} cases of COVID-19 Till Now
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={6} md={12} style={{'border-bottom': `10px solid ${Color()}`}}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Today
            </Typography>
            <Typography variant="h5">{newCase}</Typography>
            <Typography color="textSecondary">
              
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
