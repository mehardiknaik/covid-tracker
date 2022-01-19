import { Card, CardContent, Container, Grid } from "@mui/material";
import Contactme from "../Component/Contactme/Contactme";
const About = () => {
  return (
    <>
      <h2 style={{ textAlign: "center" }}>About</h2>
      <Container>
        <Grid
          item
          component={Card}
          xs={12}
          md={12}
          style={{
            borderBottom: `10px solid #f00`,
            height: "calc(100vh - 134px)",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <CardContent>
            <div>
              this is test word written to test about section of this app
            </div>
            <h4>Contact Me</h4>
            <div
              style={{
                display: "flex",
                marginTop: "20px",
                flexWrap: "wrap",
                gap: "20px",
              }}
            >
              <Contactme
                primary="#e6e6ff"
                secondary="#0000cb"
                text="Facebook"
              />
              <Contactme
                primary="#fde6ff"
                secondary="#bb00cb"
                text="Instagram"
              />
              <Contactme primary="#ffe6e6" secondary="#e70000" text="Mail" />
              {/* <Contactme /> */}
            </div>
          </CardContent>
        </Grid>
      </Container>
    </>
  );
};

export default About;
