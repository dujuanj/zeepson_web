import Header from 'components/header';
import Head from 'next/head';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
// import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.scss';
import React, { useState, useEffect, useRef } from 'react';
import c from './compliance.module.scss'

// 翻译
import {
  useTranslation,
} from "next-export-i18n";


export default function Home() {
  const [hydrated, setHydrated] = useState(false);
  const { t } = useTranslation();

  // 动画
  const [animates, setAnimater] = useState(true)
  const [apt1, setApt1] = useState(true)
  const [apt2_l, setApt2_l] = useState(false)
  const [apt2_r, setApt2_r] = useState(false)
  const [apt2, setApt2] = useState(false)
  const [apt3, setApt3] = useState(false)
  const [apt4, setApt4] = useState(false)
  const [apt5, setApt5] = useState(false)


  useEffect(() => {
    setHydrated(true);
    function handleScroll() {
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
      // console.log(scrollTop)
      // part1
      setApt1(true);
      if (scrollTop > 470) {
        setApt2(true);
        // setApt1_l(true)
      }
      // part2
      if (scrollTop > 1310) {
        setApt3(true);
      }
      // part3
      if (scrollTop > 2100) {
        setApt4(true);
      }
      // part4
      if (scrollTop > 2750) {
        setApt5(true);
      }
    }
    setTimeout(() => {
      setApt1(false)
      // setApt2_l(false)
      setApt2(false)
      setApt3(false);
      setApt4(false);
      setApt5(false);
    }, 5000)

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
      <style jsx>
        {`
         .ac_bt{
        background: #fff;
      }

        `}
      </style>
      <Head>
        <title>碳通科技</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" key="viewport" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      {/* <Header href="/contact"></Header> */}
      <div className={`${c.part1} part_top`}>
        <Image src='/images/ge_banner.png' width='100%' style={{ height: '410px' }}></Image>
        <h1 className={`animate__animated center  ${apt1 ? 'animate__fadeInDown' : ''}`}>{t('compliance.pt1_title')}?</h1>
        <div className={`${c.pt1_text}`}>
          <Container>
            <div className={c.pt1_bg}>
              <p> {t('compliance.comp_1')}</p>
              <p>{t('compliance.comp_2')}</p>
              <p>{t('compliance.comp_3')}</p>
            </div>

          </Container>

        </div>
      </div>
      <div className={c.part2}>
        <Container className={c.container}>
          <Row>
            <Col xs={6} md={3}>
              <img src="/images/hg_1.png" alt="" width='56' height='56' />
              <p>{t('compliance.pt2_com1')}</p>
            </Col>
            <Col xs={6} md={3}>
              <img src="/images/hg_2.png" alt="" width='56' height='56' />
              <p>{t('compliance.pt2_com2')}</p></Col>
            <Col xs={6} md={3}>
              <img src="/images/hg_3.png" alt="" width='56' height='56' />
              <p>{t('compliance.pt2_com3')}</p></Col>
            <Col xs={6} md={3}>
              <img src="/images/hg_4.png" alt="" width='56' height='56' />
              <p>{t('compliance.pt2_com4')}</p></Col>
          </Row>
        </Container>
      </div >
      {/* 金融属性合规 */}
      < div className={c.part3} >
        <h1 className={`center animate__animated opacity_0 ${apt2 ? 'animate__fadeInDown' : ''}`}>{t('compliance.pt3_fac')}</h1>
        <p style={{ textAlign: 'center', marginBottom: '70px' }}>{t('compliance.pt3_facs')}</p>
        <Container>
          <Row>
            <Col className={c.leftimg}>
              <img src="/images/ge_pt2.png" alt="" />
            </Col>
            <Col className={c.right_text}>
              <div className={c.wbg}>
                <p>{t('compliance.pt3_wbg')}</p>
                <div className={c.jrsx}>
                  <div>
                    <div className={c.hg_icon_bg}><img src="/images/kyc.png" alt="" /></div>
                    <span>KYC</span>

                  </div>
                  <div>
                    <div className={c.hg_icon_bg}><img src="/images/aml.png" alt="" /></div>
                    <span>AML</span>
                  </div>
                  <div>
                    <div className={c.hg_icon_bg}>
                      <img src="/images/cft.png" alt="" />
                    </div>
                    <span>CFT</span>
                  </div>
                  <div>
                    <div className={c.hg_icon_bg}><img src="/images/ndc.png" alt="" /></div>
                    <span>CFT</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div >
      {/* 产品合规 */}
      < div className={c.part4} >
        <h1 className={`center animate__animated opacity_0 ${apt3 ? 'animate__fadeInDown' : ''}`}>{t('compliance.pt4_pc')}</h1>
        <p className={`center animate__animated opacity_0 ${apt3 ? 'animate__fadeInDown' : ''}`}>{t('compliance.pt4_pcs')}</p>
        <div className={c.bt}>
          <Container>
            <Row>
              <Col xs={12} sm={6} md={6} lg={4}>
                <div className={c.textwrap}>
                  <div>1</div>
                  <p>{t('compliance.pt4_cn1')}</p>
                </div>
              </Col>
              <Col xs={12} sm={6} md={6} lg={4}>
                <div className={c.textwrap}>
                  <div>2</div>
                  <p>{t('compliance.pt4_cn2')}</p>
                </div>
              </Col>
              <Col xs={12} sm={6} md={6} lg={4}>
                <div className={c.textwrap}>
                  <div>3</div>
                  <p>{t('compliance.pt4_cn3')}</p>
                </div>
              </Col>
              {/* </Row> */}
              {/* <Row style={{ marginTop: '40px' }}> */}
              <Col xs={12} sm={6} md={6} lg={4}>
                <div className={c.textwrap}>
                  <div>4</div>
                  <p>{t('compliance.pt4_cn4')}</p>
                </div>
              </Col>
              <Col xs={12} sm={6} md={6} lg={4}>
                <div className={c.textwrap}>
                  <div>5</div>
                  <p>{t('compliance.pt4_cn5')}</p>
                </div>
              </Col>
              <Col xs={12} sm={6} md={6} lg={4}>
                <div className={c.textwrap}>
                  <div>6</div>
                  <p>{t('compliance.pt4_cn6')}</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div >
      {/* 身份合规 */}
      < div className={c.part5} >
        <h1 className={`center animate__animated opacity_0 ${apt4 ? 'animate__fadeInDown' : ''}`}>{t('compliance.pt5_ic')}</h1>
        <p className={`center animate__animated opacity_0 ${apt4 ? 'animate__fadeInDown' : ''}`}>{t('compliance.pt5_ics')}</p>
        <div className={c.bt}>
          <Container>
            <Row>
              <Col >
                <div className={c.bgw}>
                  <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header className={c.ac_bt}>{t('compliance.pt5_hg1')}</Accordion.Header>
                      <Accordion.Body>
                        <div className={c.textbg}>
                          <ul>
                            <li><span>.</span>{t('compliance.pt5_hg3_1')}</li>
                            <li><span>.</span>{t('compliance.pt5_hg3_1_2')}</li>
                          </ul>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header className={c.ac_bt}>{t('compliance.pt5_hg2')}</Accordion.Header>
                      <Accordion.Body>
                        <div className={c.textbg}>
                          <ul>
                            <li><span>.</span>{t('compliance.pt5_hg3_2')}</li>
                            <li><span>.</span>{t('compliance.pt5_hg3_2_2')}</li>
                            <li><span>.</span>{t('compliance.pt5_hg3_2_3')}</li>
                          </ul>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header className={c.ac_bt}>{t('compliance.pt5_hg3')}</Accordion.Header>
                      <Accordion.Body>
                        <div className={c.textbg}>
                          <ul>
                            <li><span>.</span>{t('compliance.pt5_hg3_3')}</li>
                            <li><span>.</span>{t('compliance.pt5_hg3_3_2')}</li>
                            <li><span>.</span>{t('compliance.pt5_hg3_3_3')}</li>
                          </ul>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </Col>
              <Col className={c.identity_hg} >
                <img src="/images/identity_hg.png" alt="" />
              </Col>
            </Row>
          </Container>
        </div>
      </div >
      {/* 流程合规 */}
      < div className={c.part6} >
        <h1 className={`center animate__animated opacity_0 ${apt5 ? 'animate__fadeInDown' : ''}`}>{t('compliance.pt6_pc')}</h1>
        <p className={`center animate__animated opacity_0 ${apt5 ? 'animate__fadeInDown' : ''}`}>{t('compliance.pt6_pcs')}</p>
        <div className={c.process_a}>
          <Container>
            <Row>
              <Col xs={6} sm={6} md={6} lg>
                <div className={c.process_wrap}>
                  <img src="/images/process_b2.png" alt="" className={c.process_arrow_1} />
                  <img src="/images/process_a1.png" alt="" className={c.process_img} />
                  <img src="/images/process_a2.png" alt="" className={c.process_img_1_1} />
                  <div className={c.process_top}>01 {t('compliance.pt6_issue1')}</div>
                  <p>{t('compliance.pt6_is_content_1')}</p>
                  {/* <p>{t('compliance.pt6_is_content_1')}</p> */}
                </div>
              </Col>
              <Col xs={6} sm={6} md={6} lg>
                <div className={`${c.process_wrap} ${c.process_wrap_2}`}>
                  <div className={c.process_top}>02 {t('compliance.pt6_issue2')}</div>
                  <p>{t('compliance.pt6_is_content_2')}</p>
                </div>
              </Col>
              <Col xs={6} sm={6} md={6} lg>
                <div className={c.process_wrap}>
                  <img src="/images/process_b2.png" alt="" className={c.process_arrow_1} />
                  <img src="/images/process_a3.png" alt="" className={c.process_img} style={{ left: '-3rem' }} />
                  <img src="/images/process_b1.png" alt="" className={`${c.process_arrow_1}  ${c.process_arrow_1_bottom} ${c.phone_arrow}`} />
                  <div className={c.process_top}>03 {t('compliance.pt6_issue3')}</div>

                  <p>{t('compliance.pt6_is_content_3')}</p>
                </div></Col>
              <Col xs={6} sm={6} md={6} lg>
                <div className={`${c.process_wrap} ${c.process_wrap_2}`}>
                  <img src="/images/process_a4.png" alt="" className={c.process_img} />
                  <div className={c.process_top}>04 {t('compliance.pt6_issue4')}</div>

                  <p>{t('compliance.pt6_is_content_4')}</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div >
    </>
  );
}
