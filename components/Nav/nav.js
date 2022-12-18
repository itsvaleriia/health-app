import Link from "next/link";
import styles from './nav.module.scss';

const list = [
    { id: 1, text: 'Covid test' },
    { id: 2, text: 'Health app' },
    { id: 3, text: 'Supplements'}
];

export default function Nav({ isMenuOpened, setIsMenuOpened }) {
    return (
        <nav className={isMenuOpened ? `${styles.nav} ${styles.navClosed}` : `${styles.nav}`}>
            <div className={styles.nav__inner}>
                {
                    list.map(item =>
                        <Link key={item.id} href={`#${item.text}`} className={styles.nav__item} onClick={() => setIsMenuOpened(!isMenuOpened)}>
                            {item.text}
                        </Link>
                    )
                }
            </div>
        </nav>
    )
}