import Link from "next/link"
import styles from "../styles/Home.module.scss"
import { useState } from "react"
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

export default function TxCompleted() {

    const [timer, setTimer] = useState("5:54")
    const [merchant, setMerchant] = useState("Juice & co.")
    const [amount, setAmount] = useState("21.8")

    return (
        <div className={styles.txCompleted}>
            <div className={styles.icon}>
                <CloseOutlinedIcon />
            </div>
            <h4>COUNTDOWN</h4>
            <h1>{timer}</h1>
            <div className={styles.paymentDetails}>
                <p>{merchant}</p>
                <p>{amount} SOL</p>
            </div>
            <Link href=""><button className={styles.seeTx}>See transaction on Solscan</button></Link>
        </div>
    )
}