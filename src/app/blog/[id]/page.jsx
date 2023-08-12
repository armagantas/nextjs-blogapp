import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetching data");
  }

  return res.json();
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            laboriosam, facilis ducimus eligendi corrupti perferendis! Tempore
            libero consectetur nemo porro optio culpa praesentium cumque
            laboriosam voluptatum error, aut, assumenda sapiente?
          </p>
          <div className={styles.author}>
            <Image
              src="/engineer.jpg"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>John Doe</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/pcb2.jpg" alt="" fill={true} className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
          quae impedit, nam laborum exercitationem iusto libero accusantium
          corrupti soluta quia maiores officia, hic, quis repudiandae voluptatem
          iure tempore veritatis ullam.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque fugit
          explicabo eveniet eaque ratione magnam id modi quisquam laborum
          voluptate aut ipsum, corporis pariatur maiores ullam quaerat
          cupiditate, a error. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Cumque fugit explicabo eveniet eaque ratione magnam
          id modi quisquam laborum voluptate aut ipsum, corporis pariatur
          maiores ullam quaerat cupiditate, a error. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quasi nesciunt odit ipsa consectetur.
          Cupiditate optio, facere sapiente dignissimos accusantium harum
          asperiores laudantium autem doloremque iure eum, consequatur corporis
          reiciendis aliquid.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque fugit
          explicabo eveniet eaque ratione magnam id modi quisquam laborum
          voluptate aut ipsum, corporis pariatur maiores ullam quaerat
          cupiditate, a error. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quasi nesciunt odit ipsa consectetur. Cupiditate
          optio, facere sapiente dignissimos accusantium harum asperiores
          laudantium autem doloremque iure eum, consequatur corporis reiciendis
          aliquid. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Cumque fugit explicabo eveniet eaque ratione magnam id modi quisquam
          laborum voluptate aut ipsum, corporis pariatur maiores ullam quaerat
          cupiditate, a error. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quasi nesciunt odit ipsa consectetur. Cupiditate
          optio, facere sapiente dignissimos accusantium harum asperiores
          laudantium autem doloremque iure eum, consequatur corporis reiciendis
          aliquid.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
