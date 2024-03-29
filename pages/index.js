import Link from 'next/link'
import styles from '../styles/Home.module.scss'

export default function Home() {

    const connectWallet = async () => {
        if (window?.solana?.isPhantom) {
            console.log('Phantom wallet found!');
            const response = await window.solana.connect()
            console.log('Connected with Public Key: ', response.publicKey.toString())
            setWalletAddress(response.publicKey.toString())
        } else {
            alert('Solana object not found! Get a Phantom Wallet')
        }
    }

    return (
        <div className={styles.homepage}>
            <img src="images.jpeg" />
            <h1>SplitWave</h1>
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Password" />
            <div className={styles.rememberMe}>
                <div className={styles.checkbox}>
                    {/* <input type="checkbox" /> */}
                    <p>Remember me</p>
                </div>
                <p>Forgot your password?</p>
            </div>
            <button className={styles.login}>Log in</button>
            <p>OR</p>
            <button className={styles.gum}>Register with Gum</button>
            <button className={styles.phantom} onClick={connectWallet}>Register with Phantom <span className={styles.icon}></span></button>
        </div>
    )
}