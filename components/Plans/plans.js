import styles from './plans.module.scss';
import Plan from "../Plan/plan";

const plans = [
    {
        id: 1,
        title: 'Plan 1',
        price: '£30',
        text: 'Per timeframe',
        list: ['Curabitur blandit tempus 1', 'Curabitur blandit tempus 2', 'Curabitur blandit tempus 3', 'Curabitur blandit tempus 4', 'Curabitur blandit tempus 5'],
        btnText: 'Lorem',
        btnLink: '#Plan1',
        isMostPopular: false
    },
    {
        id: 2,
        title: 'Plan 2',
        price: '£45',
        text: 'Per timeframe',
        list: ['Curabitur blandit tempus 1', 'Curabitur blandit tempus 2', 'Curabitur blandit tempus 3', 'Curabitur blandit tempus 4', 'Curabitur blandit tempus 5'],
        btnText: 'Lorem',
        btnLink: '#Plan2',
        isMostPopular: true
    },
    {
        id: 3,
        title: 'Plan 3',
        price: '£60',
        text: 'Per timeframe',
        list: ['Curabitur blandit tempus 1', 'Curabitur blandit tempus 2', 'Curabitur blandit tempus 3', 'Curabitur blandit tempus 4', 'Curabitur blandit tempus 5'],
        btnText: 'Lorem',
        btnLink: '#Plan3',
        isMostPopular: false
    }
];

export default function Plans() {
    return (
        <div className={styles.plans}>
            <div className={styles.plans__inner}>
                {
                    plans.map(item =>
                        <Plan
                            key={item.id}
                            title={item.title}
                            price={item.price}
                            text={item.text}
                            list={item.list}
                            btnText={item.btnText}
                            btnLink={item.btnLink}
                            isMostPopular={item.isMostPopular}
                        />
                    )
                }
            </div>
        </div>
    )
}