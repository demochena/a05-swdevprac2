"use client"
import styles from './card.module.css';
import Image from 'next/image';
import InteractiveCard from './InteractiveCard'

export default function Card({venueName, imgSrc}:{venueName:string, imgSrc:string}){
    
    return (
         <InteractiveCard contentName={venueName}>
        <div className={styles.card}>
            <div className={styles.cardimg}>
                <Image src={imgSrc}
                alt='Product Picture'
                fill={true}
                className="object-cover"/>
            </div>
            <div className={styles.cardtext}>
                <h3>{venueName}</h3>
                {/* <h5>A vibrant venue perfect for concerts, parties, and unforgettable night events.</h5> */}
            </div>
            
        </div>
        </InteractiveCard>
    )
}