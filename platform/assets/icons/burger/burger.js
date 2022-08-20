import styles from './burger.module.scss';

export default function Burger(props) {

    return (
        <div
            className={`${styles.burger} ${styles[props.style]}`}
        >
            <div
                className={styles['burger-stripe']}
            />
            <div
                className={styles['burger-stripe']}
            />
            <div
                className={styles['burger-stripe']}
            />
        </div>
    )
}