import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import styles from './menu.module.scss'

export default function Menu({ isMenuOpened, setIsMenuOpened }) {
    const Icon = isMenuOpened ? MenuIcon : CloseIcon;

    return (
        <div className={styles.menu} onClick={() => setIsMenuOpened(!isMenuOpened)}>
            <Icon className={styles.menu__icon} />
            <span>Menu</span>
        </div>
    )
}