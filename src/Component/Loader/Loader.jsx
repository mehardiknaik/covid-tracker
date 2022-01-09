import styles from "./Loader.module.css"
import logo from '../images/logo.png';

const Loader = () => {
    return (
        <div className={styles.container}>
            <img className={styles.image} src={logo} width={80} height={80} alt=""/>
        </div>
    )
}

export default Loader
