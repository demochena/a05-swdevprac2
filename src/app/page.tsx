import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/components/Banner";
import Card from "@/components/Card";

export default function Home() {

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Banner/>
        <div style={{
          margin:"20px",
          display:"flex",
          flexDirection:"row",
          flexWrap:"wrap",
          alignContent: "space-around",
          justifyContent:"space-around",

        }}>
        <Card venueName="Grand Table" imgSrc="/img/grandtable.jpg"/>
        <Card venueName="Bloom" imgSrc="/img/bloom.jpg"/>
        <Card venueName="Sprarkspace" imgSrc="/img/sparkspace.jpg"/>
        </div>
      </main>
      
    </div>
  );
}
