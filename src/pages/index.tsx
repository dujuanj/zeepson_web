import React, { useState, useEffect, useRef } from 'react';
import ReactEcharts from 'echarts-for-react'
// import Header from 'components/header';
// import Footer from 'components/footer'
import Chart from 'components/chart'
import Head from 'next/head';
import Image from 'next/legacy/image'
import Image2 from 'react-bootstrap/Image';
import styles from '@/styles/Home.module.scss';
import aniStyle from '@/styles/animates.module.css';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import postData from './api/hello';
import {
  Section,
  SectionLeft,
  SectionRight,
  SectionBottom,
  SectionScale
} from 'components/framer';
import { useInView } from "framer-motion";
// 翻译
import {
  useTranslation,
  useLanguageQuery
} from "next-export-i18n";


export default function Home() {
  // const isMounted = useRef(false)
  const [hydrated, setHydrated] = useState(false);
  const { t } = useTranslation();
  const [query] = useLanguageQuery();
  // 动画
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });


  useEffect(() => {
    setHydrated(true);
  }, [isInView])
  if (!hydrated) {
    return null;
  }
  return (
    <>
      <Head>
        <title>碳通科技</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" key="viewport" />
        <link rel="icon" href="/favicon.png" />
        <link rel="preload" href="/fonts/PingFangRegular.ttf" as="font" type="font/ttf" ></link>
      </Head>
      {/* 轮播 */}
      <Row>
        <Col>
          <Carousel className={styles.carousel}>
            <Carousel.Item>
              <Image className="d-block w-100" src="/images/index_bg1.png" alt="First slide" width={1440}
                height={880} layout='responsive'
              />
              <Carousel.Caption >
                <Section>
                  <h1 className={`ft_72 ${styles.ft_62}`}>Make Carbon Compliant</h1>
                  <p className={`ft_24 mt_56 ${styles.pcaru_p} `} id={styles.carousel_p}> {t('home.Carousel')}</p>
                </Section>

                {/* <button className='carousel_btn'>合规查询</button> */}
              </Carousel.Caption>
            </Carousel.Item>
            {/* <Carousel.Item>
              <Image className="d-block w-100" src="/images/index_bg1.png" alt="First slide" width={1440}
                height={810} layout='responsive'
              />

              <Carousel.Caption>
                <h1 className={`ft_72 ${styles.ft_62} animate__animated ${animates ? 'animate__fadeInDown' : ''}`}>Make Carbon Compliant</h1>
                <p className={`ft_24 mt_56 animate__animated ${styles.pcaru_p} ${animates ? 'animate__fadeInDown' : ''}`}> {t('home.Carousel')}</p>

              </Carousel.Caption>
            </Carousel.Item> */}
            {/* <Carousel.Item>
              <Image className="d-block w-100" src="/images/index_bg1.png" alt="First slide" width={1440}
                height={810} layout='responsive'
              />

              <Carousel.Caption>
                <h1 className={`ft_72 ${styles.ft_62} animate__animated ${animates ? 'animate__fadeInDown' : ''}`}>Make Carbon Compliant</h1>
                <p className={`ft_24 mt_56 animate__animated ${styles.pcaru_p} ${animates ? 'animate__fadeInDown' : ''}`}> {t('home.Carousel')}</p>

              </Carousel.Caption>
            </Carousel.Item> */}
          </Carousel>
        </Col>
      </Row>
      {/* part2 全球合规优势*/}
      <div className={styles.part2_hg} style={{ position: 'relative' }}>
        <Row >
          <Col>
            <div className={styles.pt2_postion}>
              <SectionBottom>
                <Container>
                  <h2 className='center'>
                {t('home.gca')}
              </h2>
                </Container>

              </SectionBottom>
              <div >
                <SectionBottom>
                  <Container className={styles.bg_white}>
                    <Row>
                      {/* 关于全球合规 */}
                      <Col xs={12} md={8}>
                      <h4> {t('home.agc')}</h4>
                      <p className={styles.green_sytle}> {t('home.sft')}</p>
                      <p className={styles.content}> {t('home.uoo')}</p>
                        <div className={styles.hg_bottom}>
                          <Container>
                            <Row>
                              <Col xs={12} md={6}>
                                <div className={styles.hg}>
                                  <img src='/images/pocketbook.png' alt='' />
                                  <span>{t('home.fac')}</span>
                                </div>
                              </Col>
                              <Col xs={12} md={6}>
                                <div className={styles.hg}>
                                  <img src='/images/identity.png' alt='' />
                                  <span>{t('home.ic')}</span>
                                </div>
                              </Col>
                              <Col xs={12} md={6}>
                                <div className={styles.hg}>
                                  <img src='/images/goods.png' alt='' />
                                  <span>{t('home.pc')}</span>
                                </div>
                              </Col>
                              <Col xs={12} md={6}>
                                <div className={styles.hg}>
                                  <img src='/images/flow.png' alt='' />
                                  <span>{t('home.psc')}</span>
                                </div>
                              </Col>
                            </Row>
                          </Container>


                      </div>
                    </Col>
                    <Col xs={6} md={4} className={styles.phone_hide}>
                        <Image2 src='/images/bg2_inner.png' alt='' style={{ width: '100%' }}
                        ></Image2>
                    </Col>
                  </Row>
                </Container>
                </SectionBottom>
              </div>
            </div>
          </Col>
        </Row>
        {/* <Image className={styles.pt2_bg} src='/images/pt2_bg.png' alt=''
          width={1440}
          height={810}
          layout='responsive'
        ></Image> */}
      </div >
      {/* part3 从碳计量到碳资产全程系统服务产品体系 */}
      < Container className={styles.measure} >
        <SectionBottom>
          <h2 className='center'>{t('home.p2_fcm')}</h2>
        </SectionBottom>
        <SectionScale>
          <div className={`center ${styles.mimg}`}>
            {query.lang == 'En' &&
              <Image src='/images/measure_en.png'
                width={1108} // 宽度
                height={602} // 高度
                layout='responsive' // 布局方式设置为响应式
              ></Image>
            }
            {query.lang == 'Ch' &&
              <Image src='/images/measure_ch.png'
                width={1108} // 宽度
                height={602} // 高度
                layout='responsive' // 布局方式设置为响应式
              ></Image>
            }

            {/* <Image src='/images/measure.png'
            width={1089} // 宽度
            height={650} // 高度
            layout='responsive' // 布局方式设置为响应式
          ></Image> */}
            {/* <div className={styles.mcnc}>CNC <br />碳中和通</div>
            <div className={styles.mcf}>
              <div>{t('home.ps_cf1')} </div>
              <div className={styles.phone_mc}> {t('home.ps_cf1_1')}</div>
          </div>
            <div className={styles.mcr}>
              <div>{t('home.ps_cf2')}</div>
              <div className={styles.phone_mc}>{t('home.ps_cf2_1')}</div>
          </div>
            <div className={styles.mcc}>
              <div>{t('home.ps_cf3')}</div>
              <div className={styles.phone_mc}> {t('home.ps_cf3_1')}</div>
          </div>
            <div className={styles.mcnri}>
              <div>{t('home.ps_cf4')} </div>
              <div className={styles.phone_mc}>{t('home.ps_cf4_1')}</div>
          </div> */}
        </div>
        </SectionScale>
      </Container >
      {/*  part4 {全球主要碳交易市场资讯} */}
      < div className={styles.trade} >
        <Container>
          <SectionBottom>
            <h2 className='center'>{t('home.trde_gm')}</h2>
            <p className='center'>{t('home.trde_gms')}</p>
          </SectionBottom>
        </Container>
        <SectionBottom>
          <Container style={{ marginTop: '4.43rem' }}>
          <div className={styles.chartfooter}>
              <Chart />
          </div>
        </Container>
        </SectionBottom>
      </div >
      {/* 合作伙伴 */}
      < div className={styles.partners} >
        <Container>
          <SectionBottom>
            <h2 className='center'>{t('home.Partnership')}</h2>
            <p className='center'>{t('home.Partnerships')}</p>
          </SectionBottom>
        </Container>
        <SectionBottom>
          <Container>
          <Row className={styles.row_bottom}>
            <Col xs={4} sm={3} md={2}>
              <div className={styles.partnerslogo}>
                <img src="/images/cejc.png" alt="" />
              </div>
            </Col>
            <Col xs={4} sm={3} md={2}>
              <div className={styles.partnerslogo}>
                <img src="/images/potel.png" alt="" />
              </div></Col>
            <Col xs={4} sm={3} md={2}>
              <div className={styles.partnerslogo}>
                <img src="/images/bcis.png" alt="" />
              </div></Col>
            <Col xs={4} sm={3} md={2}>
              <div className={styles.partnerslogo}>
                <img src="/images/mvg.png" alt="" />
              </div></Col>
            <Col xs={4} sm={3} md={2}>
              <div className={styles.partnerslogo}>
                <img src="/images/orac.png" alt="" />
              </div></Col>
            <Col xs={4} sm={3} md={2}>
              <div className={styles.partnerslogo}>
                <img src="/images/shene.png" alt="" />
              </div>
            </Col>
            <Col xs={4} sm={3} md={2}>
              <div className={styles.partnerslogo}>
                <img src="/images/apple.png" alt="" />
              </div></Col>
            <Col xs={4} sm={3} md={2}>
              <div className={styles.partnerslogo}>
                <img src="/images/aden.png" alt="" />
              </div></Col>
            <Col xs={4} sm={3} md={2}>
              <div className={styles.partnerslogo}>
                <img src="/images/cp.png" alt="" />
              </div></Col>
            <Col xs={4} sm={3} md={2}> <div className={styles.partnerslogo}>
              <img src="/images/guang.png" alt="" />
            </div>
            </Col>
            <Col xs={4} sm={3} md={2}>
              <div className={styles.partnerslogo}>
                <img src="/images/cetcz.png" alt="" />
              </div>
            </Col>
            <Col xs={4} sm={3} md={2}>
              <div className={styles.partnerslogo}>
                <img src="/images/green.png" alt="" />
              </div></Col>
            <Col xs={4} sm={3} md={2}>
              <div className={styles.partnerslogo}>
                <img src="/images/car.png" alt="" />
              </div></Col>
            <Col xs={4} sm={3} md={2}>
              <div className={styles.partnerslogo}>
                <img src="/images/cea.png" alt="" />
              </div></Col>
            <Col xs={4} sm={3} md={2}> <div className={styles.partnerslogo}>
              <img src="/images/bs.png" alt="" />
            </div></Col>
            <Col xs={4} sm={3} md={2}>
              <div className={styles.partnerslogo}>
                <img src="/images/gs.png" alt="" />
              </div>
            </Col>
            <Col xs={4} sm={3} md={2}>
              <div className={styles.partnerslogo}>
                <img src="/images/tuv.png" alt="" />
              </div></Col>
            <Col xs={4} sm={3} md={2}>
              <div className={styles.partnerslogo}>
                <img src="/images/forestry.png" alt="" />
              </div></Col>
            <Col xs={4} sm={3} md={2}>
              <div className={styles.partnerslogo}>
                <img src="/images/fs.png" alt="" />
              </div></Col>
            <Col xs={4} sm={3} md={2}> <div className={styles.partnerslogo}>
              <img src="/images/carbon1.png" alt="" />
            </div></Col>
          </Row>
        </Container>
        </SectionBottom>
      </div >
      <style type="text/css">{`
          .d_card{
            margin-right:2rem;
          }
      `}
      </style>
    </>
  );
}
