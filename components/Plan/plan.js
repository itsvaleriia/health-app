import Button from '@mui/material/Button';
import CheckIcon from '@mui/icons-material/Check';
import styles from './plan.module.scss'

export default function Plan({ title, price, text, list, btnText, btnLink, isMostPopular }) {
    return (
        <div className={isMostPopular ? `${styles.plan} ${styles.planPopular}` : `${styles.plan}`}>
            {isMostPopular && (<h7 className={styles.plan__top}>Most popular</h7>)}
            <h6 className={styles.plan__title}>{title}</h6>
            <div className={styles.plan__price}>{price}</div>
            <div className={styles.plan__text}>{text}</div>
            <ul className={styles.plan__list}>
                {
                    list.map(item =>
                        <li key={item} className={styles.plan__item}>
                            <div className={styles.plan__mark}><CheckIcon className={styles.plan__icon} /></div>
                            <span>{item}</span>
                        </li>
                    )
                }
            </ul>
            <Button href={btnLink} className={styles.plan__btn}>{btnText}</Button>
        </div>
    )
}