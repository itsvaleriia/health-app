import Image from "next/image";
import Link from "next/link";
import styles from './logo.module.scss'

export default function Logo() {
    return (
        <Link href="/" className={styles.logo}>
            <Image src="/assets/logo.svg" alt="DocHQ Logo" width={170} height={45} className={styles.logo__image} />
        </Link>
    )
}