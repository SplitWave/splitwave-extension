import styles from "../styles/Home.module.scss"
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import LogoutIcon from '@mui/icons-material/Logout';
import PieChartIcon from '@mui/icons-material/PieChart';
import { useState } from 'react';

export default function Home2() {
    const [name, setName] = useState("Santiago")
    const [address, setAddress] = useState("dasdaxasxasxa")

    return (
        <div className={styles.homepage2}>
            <div className={styles.navbar}>
                <img src="images.jpeg" height="40px" width="40px" />
                <div>
                    <p>{name}</p>
                    <p>{address}</p>
                </div>
                <div className={styles.icons}>
                    <NotificationsActiveIcon />
                    <PieChartIcon />
                    <LogoutIcon />
                </div>
            </div>
            <hr />
            <div className={styles.pendingTx}>
                <p>PENDING WAVE</p>
            </div>
        </div>
    )
}