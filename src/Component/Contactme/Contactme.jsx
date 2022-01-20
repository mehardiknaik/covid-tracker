import { makeStyles } from "@mui/styles";
import { Card, CardContent, Container, Grid } from "@mui/material";
import styles from "./Contact.module.css";

const useStyles = makeStyles((theme) => ({
  container: (props) => ({
    position: "relative",
    margin: "auto",
    background: props.primary,
    height: "fit-content",
    width: "fit-content",
    padding: "3px 16px",
    borderBottomRightRadius: "6px",
    borderTopRightRadius: " 6px",
    borderBottomLeftRadius: "12px",
    borderTopLeftRadius: "12px",
    display: "flex",
    flexDirection: "column",
    transition: "0.7s",
    cursor: "pointer",
    userSelect: "none",
    "&::before": {
      content: '""',
      background: props.secondary,
      transform: "translateX(-27px)",
      position: "absolute",
      height: "11px",
      width: "11px",
      borderRadius: "50px",
      border: "3px solid white",
    },
    "&:hover": {
      transform: "scale(2)",
      zIndex: 2,
      "& $textcontainer": {
        transform: "translateY(20px)",
      },
    },
  }),
  textcontainer: {
    overflow: "hidden",
  },
  secondtext: {
    transform: "translateY(23px)",
    transition: "0.7s",
  },
}));

const Contactme = () => {
  return (
    <>
      <h2 className={styles.header}>Contact Me</h2>
      <Container>
        <Grid item component={Card} xs={12} md={12} className={styles.card}>
          <CardContent>
            <div className={styles.CardContainer}>
              <Link
                primary="#e6e6ff"
                secondary="#0000cb"
                text="Facebook"
                url="https://facebook.com/hardiknaikk"
              />
              <Link
                primary="#fde6ff"
                secondary="#bb00cb"
                text="Instagram"
                url="http://instagram.com/hardiknaikk"
              />
              <Link
                primary="#e6faff"
                secondary="#00a7d1"
                text="LinkedIn"
                url="http://linkedin.com/in/hardik-naik"
              />
              <Link
                primary="#ededed"
                secondary="#808080"
                text="Github"
                url="https://github.com/mehardiknaik"
              />
              <Link
                primary="#ffe6e6"
                secondary="#e70000"
                text="Mail"
                url="mailto:hardiknaik7444@gmail.com"
              />
            </div>
          </CardContent>
        </Grid>
      </Container>
    </>
  );
};

const Link = (props) => {
  const classes = useStyles(props);
  const click = () => {
    window.open(props.url, "_blank");
  };
  return (
    <div onClick={click} className={classes.container}>
      <div className={classes.textcontainer}>
        <div>{props.text}</div>
        {/* <div className={classes.secondtext}>test</div> */}
      </div>
    </div>
  );
};

export default Contactme;
