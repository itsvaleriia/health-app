import Link from "next/link";
import styles from './card.module.scss';

export default function Card({ title, text, href, src, color }) {
    return (
        <div className={styles.card} style={{ background: `var(--${color})` }}>
            <div className={styles.card__inner}>
                <img src={src} alt={title} className={styles.card__image} />
                <div className={styles.card__content}>
                    <h3 className={styles.card__title}>{title}</h3>
                    <Link href={href} className={styles.card__btn}>{text}</Link>
                </div>
            </div>
        </div>
    )
}