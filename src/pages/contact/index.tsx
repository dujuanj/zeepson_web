import { useEffect, useState } from 'react'
import Header from 'components/header';
import Image from 'react-bootstrap/Image'
import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '@/styles/Home.module.css';
import curStyle from './contact.module.scss'


import {
  useTranslation,
} from "next-export-i18n";
// import { Roboto } from '@next/font/google'

// const roboto = Roboto({
//   weight: '400',
//   subsets: ['latin'],
// })



export default function Home() {
  const { t } = useTranslation();
  const [hydrated, setHydrated] = useState(false);

  const [animates, setAnimater] = useState(true)
  const [apt1, setApt1] = useState(true)
  const [apt1_l, setApt1_l] = useState(true)
  const [apt1_r, setApt1_r] = useState(true)


  useEffect(() => {
    setHydrated(true);

    function handleScroll() {
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
      // console.log(scrollTop)
      // part1
      // if (scrollTop > 180) {
      //   setApt1_l(true)
      //   setApt1_r(true)
      // }
      // part2

    }
    setTimeout(() => {
      setApt1_l(false)
      setApt1_r(false)
      setApt1(false)
    }, 2000)

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);

    };
  }, []);
  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null;
  }


  return (
    <>
      <div>

        <Head>
          <title>碳通科技</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" key="viewport" />
          <link rel="icon" href="/favicon.png" />
        </Head>
        <div>
          <div className={curStyle.part1}>
            <Image src='/images/about.png' width='100%'></Image>
            {/* <Image className={curStyle.part1_img} src='/images/valcarbon.png' width='400'></Image> */}
            <p className={`animate__animated  ${curStyle.part1_text} ${apt1 ? 'animate__fadeInDown' : ''}`}>{t('about.text')}</p>
          </div>
          <Container className={curStyle.top}>
            <Row>
              <Col md={7} className={` animate__animated  ${apt1_l ? 'animate__backInLeft' : ''}`}>
                <div className={curStyle.text}>
                  <h1>{t('about.title')}</h1>
                  <p>{t('about.content_1')}</p>
                  <p>{t('about.content_2')}</p>
                </div>

              </Col>
              <Col md={5} className={` animate__animated  ${apt1_l ? 'animate__backInRight' : ''}`}>
                <Image src='/images/about_1.png' width='100%' ></Image>
              </Col>
            </Row>
            <Row>
              <Col>
                <ul className={curStyle.p_ul}>
                  <li>
                    <div>
                      <img src="/images/about_10.png" alt="" />
                      <p>{t('about.txt1')}</p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <img src="/images/about_30.png" alt="" />
                      <p>{t('about.txt2')}</p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <img src="/images/about_ai.png" alt="" className={curStyle.small} />
                      <p>{t('about.txt3')}</p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <img src="/images/about_chain.png" alt="" className={curStyle.small} />
                      <p>{t('about.txt4')}</p>
                    </div>
                  </li>
                  <li>
                    <div style={{ borderRight: 'none' }}>
                      <img src="/images/about_iot.png" alt="" className={curStyle.small} />
                      <p>{t('about.txt5')}</p>
                    </div>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </div>
      </div >
    </>
  );
}
