import Navbar from "../component/navbar"
import styles from "../styles/Home.module.scss"

export default function Page2() {

    return (
        <div className={styles.page2}>
            <Navbar />
            <div className={styles.pendingTx}>
                <p>PENDING WAVE</p>
            </div>
            <button className={styles.initiate}>Initiate new payment</button>
        </div>
    )
}