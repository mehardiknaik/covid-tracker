
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles(theme => ({
  container: (props) => ({
    position: 'relative',
    margin: 'auto',
    background: props.primary,
    height: 'fit-content',
    width: 'fit-content',
    padding: '3px 16px',
    borderBottomRightRadius: '6px',
    borderTopRightRadius:' 6px',
    borderBottomLeftRadius: '12px',
    borderTopLeftRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    transition: '0.7s',
    cursor:'pointer',
    '&::before':{
      content: '""',
      background: props.secondary,
      transform: 'translateX(-27px)',
      position: 'absolute',
      height: '11px',
      width: '11px',
      borderRadius: '50px',
      border: '3px solid white',
    },
    '&:hover':{
      transform:'scale(1.1)',
    }
  }),
}));

const Contactme = (props) => {
  const classes = useStyles(props);

  return <div className={classes.container}>{props.text}</div>;
};

export default Contactme;
