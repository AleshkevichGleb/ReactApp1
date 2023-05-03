import styles from "./TitleText.module.css";

const TitleText = () => {
    return(
        <div className={styles.title__container}>
            <h1 className={styles.title}>Check our Price List</h1>
            <p className={styles.suptitle}>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth</p>
        </div>
    )
}

export default TitleText;