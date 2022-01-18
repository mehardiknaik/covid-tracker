import { Card, CardContent, Container, Grid } from "@mui/material";
const About = () => {
  return (
    <Container>
      <Grid
        item
        component={Card}
        xs={12}
        md={12}
        style={{
          borderBottom: `10px solid #f00`,
          height: "calc(100vh - 69px)",
          display: "flex",
          justifyContent: "center",
          textAlign:'center'
        }}
      >
        <CardContent>
          <h2>About</h2>
          <div>this is test word written to test about section of this app</div>
        </CardContent>
      </Grid>
    </Container>
  );
};

export default About;
