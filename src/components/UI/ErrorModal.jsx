import React from 'react'
import styles from './ErrorModal.module.css'
const ErrorModal = (props) => {
    return (
        <div className={styles.overlay} onClick={props.onConfirm}>
            <div className={styles.errorDiv}>
                <header>
                    <h2>{props.error}</h2>
                </header>
                <p>{props.message}</p>
                <footer>
                    <button className={styles.button}>Okay</button>
                </footer>
            </div>
        </div>
    )
}

export default ErrorModal