import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/coworker.jpg" fill={true} alt="" className={styles.img} />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences.
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who are we?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia,
            dicta harum cupiditate explicabo vel maiores officia quaerat
            molestiae voluptates corporis quo! Quod expedita porro, tempore iure
            magnam ratione pariatur dolorum!
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi neque
            vitae aperiam ex deserunt laborum pariatur, magni suscipit ipsa
            minus earum dolore fugit modi sequi delectus. Consequuntur deserunt
            aut illum!
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What we do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            error aliquam minus sapiente sunt, tenetur alias commodi
            perspiciatis accusantium recusandae neque, assumenda temporibus,
            officia officiis ad quas quasi quos. Doloremque.
            <br />
            <br />
            - Creative Illustrations
            <br />
            <br />
            - Dynamic Websites
            <br />
            <br />- Fash and Handy Mobile Apps
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
