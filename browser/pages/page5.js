import Navbar from "../component/navbar"
import styles from "../styles/Home.module.scss"
import Amount from "../component/amount"

export default function Page5() {
    return (
        <div className={styles.page5}>
            <Navbar />
            <Amount />
            <button className={styles.payWith}>Check summary</button>
            <button className={styles.back}>Go back</button>
        </div>
    )
}