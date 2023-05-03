import styles from "./Container.module.css";
import TitleText from "../TitleText/TitleText";
import Cards from "../Cards/Cards";


const Container = () => {
    return(
        <div className={styles.container}>
            <TitleText/>
            <Cards/>
        </div>
    )
}

export default Container;