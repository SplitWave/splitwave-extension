import { useState } from "react"
import styles from "../styles/Home.module.scss"

export default function Amount() {

    const [amount, setAmount] = useState(100)
    return (
        <div className={styles.amount}>
            <h4>Amount to pay</h4>
            <h2>{amount} SOL</h2>
        </div>
    )
}