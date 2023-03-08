
import styles from "../styles/Home.module.scss"
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';

export default function TxFailed() {

    return (
        <div className={styles.txFailed}>
            <span><WarningAmberOutlinedIcon /></span>
            <h4>Transaction failed</h4>
            <p>One of the participants didn't pay on time. You can re-try again or cancel the transaction.</p>
            <button className={styles.retry}>Re-try</button>
            <button className={styles.cancel}>Cancel</button>
        </div>
    )
}