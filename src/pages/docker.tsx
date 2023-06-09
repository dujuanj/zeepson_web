import React, { useState } from 'react';
// import Layout from 'components/layout';
import Header from 'components/header';
import Head from 'next/head';
import Image from 'next/image';
// import styles from '@/styles/Home.module.css';
import Carousel from 'react-bootstrap/Carousel';


export default function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex:number, e:any) => {
    setIndex(selectedIndex);
  };
  return (
    <>
     
        <Head>
          <title>碳通科技</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header href="/"></Header>
      {/* <main className={styles.main}></main> */}
      <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <Image   className="d-block w-100" src="/images/finace_home.png" alt="me"  width={800}
      height={300} />
        <Carousel.Caption>
          <h1>docker</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="/images/finace_home.png"
            alt="Second slide"
            width={100}
            height={300} 
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="/images/finace_home.png"
            alt="Third slide"
            width={100}
            height={300}
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
     
    </>
  );
}