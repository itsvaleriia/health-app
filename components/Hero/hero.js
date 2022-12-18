import Card from "../Card/card";
import styles from './hero.module.scss'

const cards = [
    { id: 1, title: 'Plan 1', src: '/assets/1.png', href: '#1', color: "green" },
    { id: 2, title: 'Plan 2', src: '/assets/2.png', href: '#2', color: "yellow" },
    { id: 3, title: 'Plan 3', src: '/assets/3.png', href: '#3', color: "blue" }
];

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.hero__container}>
                <div className={styles.hero__text}>
                    <h2 className={styles.hero__subtitle}>
                        Complete our simple fitness assesment and recieve your personalised workout plans to
                        get you one step closer to achieving your fitness goals.
                    </h2>
                    <h1 className={styles.hero__title}>
                        Take our quick & easy fitness quiz in just 2 mins!
                    </h1>
                </div>
                <div className={styles.hero__cards}>
                    {
                        cards.map(item =>
                            <Card
                                key={item.id}
                                title={item.title}
                                text="View work out >"
                                src={item.src}
                                href={item.href}
                                color={item.color}
                            />
                        )
                    }
                </div>
            </div>
        </section>
    )
}