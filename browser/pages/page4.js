import styles from "../styles/Home.module.scss"
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import Navbar from "../component/navbar";
import Amount from "../component/amount";

export default function Page4() {

    return (
        <div  className={styles.page4}>
            <Navbar />
            <Amount />
            <p>Select a first wallet</p>
            <input placeholder="Fzmd...TTe2" />
            <span><ControlPointOutlinedIcon /></span>
            <div className={styles.btnGrp}>
                <button className={` ${styles.subButton} ${styles.equal} `}>Equal</button>
                <button className={styles.subButton}>Quarter</button>
                <button className={styles.subButton}>Bi-quater</button>
            </div>
            <button className={styles.summary}>Check summary</button>
            <button className={styles.back}>Go back</button>
        </div>
    )
}