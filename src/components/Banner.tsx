import styles from './banner.module.css'
import Image from 'next/image';

export default function Banner(){
    return (
        <div className={styles.banner}>
            <Image src={'/img/event.jpg'}
            alt='event'
            fill={true}
            objectFit='event'/>
            <div className={styles.bannerText}>
                <h1>where every event finds its venue</h1>
                <h3>Find and book the ideal venue for your unforgettable events.</h3>
            </div>
        </div>
    );
}