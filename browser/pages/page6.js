import { useState } from "react"
import styles from "../styles/Home.module.scss"

export default function Page6() {

    const [timer, setTimer] = useState("5:54")
    const [merchant, setMerchant] = useState("Juice & co.")
    const [amount, setAmount] = useState("21.8")

    return (
        <div className={styles.page6}>
            <h4>COUNTDOWN</h4>
            <h1>{timer}</h1>
            <div className={styles.paymentDetails}>
                <p>{merchant}</p>
                <p>{amount} SOL</p>
            </div>
            <button className={styles.cancel}>Cancel transaction</button>
        </div>
    )
}