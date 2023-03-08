import styles from "../styles/Home.module.scss"
import Navbar from "@/component/navbar"
import TxCompleted from "../component/txCompleted"
import TxFailed from "@/component/txFailed"

export default function Page6() {

    return (
        <div className={styles.page6}>
            <Navbar />
            {/* <TxCompleted /> */}
            <TxFailed />
        </div>
    )
}