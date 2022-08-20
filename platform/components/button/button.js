import styles from './button.module.scss';

export default function Button(props) {

    return (
        <div
            className={styles['button-wrapper']}
            style={{
                backgroundColor : props.bgColor || 'white',
                color           : props.color   || 'black',
            }}
        >
            {props.children}
        </div>
    )
}