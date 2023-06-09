import ReactEcharts from 'echarts-for-react'
import React, { useState, useEffect, useRef } from 'react';
import Header from 'components/header';
import Head from 'next/head';
// import Image from 'next/image';
// import { Inter } from '@next/font/google';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import styles from '@/styles/Home.module.scss';
import varables from '@/styles/variables.module.scss'
import c from './customer.module.scss'
// 翻译
import {
  useTranslation,
} from "next-export-i18n";


export default function Home() {
  const { t } = useTranslation();
  const [option, setOption] = useState({})
  const [hydrated, setHydrated] = useState(false);

  // 动画
  const [animates, setAnimater] = useState(true)
  const [apt1_l, setApt1_l] = useState(true)
  const [apt1_r, setaptr_l] = useState(true)
  const [apt2_l, setApt2_l] = useState(false)
  const [apt2_r, setapt2_r] = useState(false)
  const [apt3, setApt3] = useState(false)
  const [apt4, setApt4] = useState(false)
  const [apt5, setApt5] = useState(false)
  const [apt6, setApt6] = useState(false)
  const [apt7_l, setApt7_l] = useState(false)
  const [apt7_r, setapt7_r] = useState(false)
  const [apt8, setApt8] = useState(false)

  useEffect(() => {
    setHydrated(true);
    function handleScroll() {
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
      // console.log(scrollTop)

      if (scrollTop > 520) {
        setApt2_l(true)
        setapt2_r(true)
        // setApt1_l(true)
      }
      if (scrollTop > 1310) {
        setApt3(true);
      }
      if (scrollTop > 2900) {
        setApt4(true);
      }
      if (scrollTop > 3900) {
        setApt5(true);
      }
      if (scrollTop > 4700) {
        setApt6(true);
      }
      if (scrollTop > 5520) {
        setApt7_l(true)
        setapt7_r(true)
      }
      if (scrollTop > 6360) {
        setApt8(true);
      }
    }
    setTimeout(() => {
      setApt1_l(false)
      setaptr_l(false)
      setApt2_l(false)
      setapt2_r(false)
      setApt3(false)
      setApt4(false)
      setApt5(false)
      setApt6(false)
      setApt7_l(false)
      setapt7_r(false)
      setApt8(false)
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

  // useEffect(() => {
  //   const productOption = {
  //     xAxis: {
  //       type: 'category',
  //       data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  //     },
  //     yAxis: {
  //       type: 'value',
  //     },
  //     series: [
  //       {
  //         data: [820, 932, 901, 934, 1290, 1330, 1320],
  //         type: 'line',
  //       },
  //       {
  //         data: [720, 632, 401, 334, 1290, 1330, 720],
  //         type: 'line',
  //       }

  //     ],
  //   };
  //   setOption(productOption)
  // }, [])

  return (
    <>

      <Head>
        <title>碳通科技</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" key="viewport" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={c.main}>
        <div className={c.top}>
          <Container>
            <Row>
              <Col md={6} className={`${c.order2} animate__animated  ${apt1_l ? 'animate__backInLeft' : ''}`} style={{ alignSelf: 'center' }}>
                <div>
                  <h1 className={`${c.pt1_title}`}>{t('cases.pt1_title')}</h1>
                  <p className={c.mob_bot_0}>{t('cases.pt1_text')}</p>
                  <div className='myflex' style={{ marginTop: '2.5rem' }}>
                    <div className={c.number}>
                      <p>32家</p>
                      <p>{t('cases.pt1_text1')}</p>
                    </div>
                    <div className={c.number}>
                      <p>80%</p>
                      <p>{t('cases.pt1_text2')}</p>
                    </div>
                    <div className={c.number}>
                      <p>25%</p>
                      <p>{t('cases.pt1_text3')}</p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={6} className={`center ${c.order1} animate__animated  ${apt1_r ? 'animate__backInRight' : ''}`} >
                <Image src='/images/product2.png' width='100%' ></Image>
              </Col>
            </Row>

            <Row>

            </Row>

          </Container>
        </div>
      </main>
      <div className={c.pt2Wrap}>
        <div className="container">
          <Row>
            <Col md={4} className={`opacity_0 animate__animated  ${apt2_l ? 'animate__backInLeft' : ''}`} style={{ alignSelf: 'center' }}>
              <Image src='/images/product_pt2.png' width='100%'></Image>
            </Col>
            <Col md={8} style={{ alignSelf: 'center' }} className={`opacity_0 animate__animated  ${apt2_r ? 'animate__backInRight' : ''}`} >
              <div className={`ml_2 ${c.mleft_0}`}>
                <h1 className={`${c.pt1_title} mt_2`}>{t('cases.pt2_title')}</h1>
                <p>{t('cases.pt2_text1')}</p>
                <p>{t('cases.pt2_text2')}</p>
                <div className={`container ${c.mob_mt_0} mt_4`} style={{ display: 'flex' }}>
                  <div className={c.number} style={{ flex: '2' }}>
                    <p>{t('cases.pt2_text2_1')}</p>
                    <p>{t('cases.pt2_text2_1_1')}</p>
                  </div>
                  <div className={c.number} style={{ flex: '3' }}>
                    <p>{t('cases.pt2_text2_2')}</p>
                    <p>{t('cases.pt2_text2_2_1')}</p>
                  </div>
                </div>
                <div className={`container ${c.mob_mt_0} `} style={{ display: 'flex' }}>
                  <div className={c.number} style={{ flex: '2' }}>
                    <p>{t('cases.pt2_text2_3')}</p>
                    <p>{t('cases.pt2_text2_2_1')}</p>
                  </div>
                  <div className={c.number} style={{ flex: '3' }}>
                    <p>{t('cases.pt2_text2_4')}</p>
                    <p>{t('cases.pt2_text2_4_1')}</p>
                  </div>
                </div>
              </div>

            </Col>
          </Row>
        </div>
      </div>
      {/* 某全球PCB头部公司 */}
      <div className={c.part3}>
        <Card className="bg-dark text-white">
          <Card.Img src="/images/cases_pt3_banner.png" alt="Card image" className={c.scard_img} />
          <Card.ImgOverlay>
            <Card.Title className={` animate__animated opacity_0 ${apt3 ? 'animate__fadeInDown' : ''}`}>
              {/* <div className='container'> <h1 style={{ marginTop: '3.5rem' }}>某全球PCB头部公司</h1></div> */}
              <h1 className='container' style={{ marginTop: '3.5rem' }}>{t('cases.pt3_title')}</h1>

            </Card.Title>


            <div className={`container animate__animated opacity_0 ${apt3 ? 'animate__fadeInDown' : ''}`} >
              <div className={c.number} style={{ float: 'left', marginRight: '6.25rem' }}>
                <p>{t('cases.pt3_sub1')}</p>
                <p>{t('cases.pt3_sub1_1')}</p>
              </div>
              <div className={c.number} style={{ float: 'left' }}>
                <p>{t('cases.pt3_sub2')}</p>
                <p>{t('cases.pt3_sub2_1')}</p>
              </div>
            </div>



          </Card.ImgOverlay>
        </Card>
      </div>
      <div className={`container ${c.chat_wrap}`} style={{ position: 'relative', height: '38rem' }}>
        <div className={c.chart}>
          <div className={c.charthead}>
            <p>{t('cases.pt4')}</p>
          </div>
          <div className={c.chartfooter}>
            {/* <div id='chart'><ReactEcharts option={option} /></div> */}
            <img src='/images/charts.png' width='100%' />
          </div>
        </div>
      </div >
      {/* cass */}
      < div className='container' >
        <Row className={c.cass_wrap}>
          <Col md={3} sm={12} className={c.md}>
            <div className={c.cass_left}>
              <img src="/images/hook.png" alt="" />
              <span>{t('cases.pt5_left1')}</span>
              <p>{t('cases.pt5_left1_1')}</p>
            </div>
            <div className={c.cass_left}>
              <img src="/images/hook.png" alt="" />
              <span>{t('cases.pt5_left2')}</span>
              <p>{t('cases.pt5_left2_1')}</p>
            </div>
            <div className={c.cass_left}>
              <img src="/images/hook.png" alt="" />
              <span>{t('cases.pt5_left3')}</span>
              <p>{t('cases.pt5_left3_1')}</p>
            </div>
          </Col>
          <Col md={6} sm={12} className={c.md}>
            <div className={`${c.cassimg} center`}>
              <Image src='/images/cass.png'></Image>
              <div>
                <p>CaaS</p>
                <p>一站式碳服务</p>
              </div>
            </div>
          </Col>
          <Col md={3} sm={12} className={c.md}>
            <div className={c.cass_left}>
              <img src="/images/hook.png" alt="" />
              <span>{t('cases.pt5_right1')}</span>
              <p>{t('cases.pt5_right1_1')}</p>
            </div>
            <div className={c.cass_left}>
              <img src="/images/hook.png" alt="" />
              <span>{t('cases.pt5_right2')}</span>
              <p>{t('cases.pt5_right2_1')}</p>
            </div>
            <div className={c.cass_left}>
              <img src="/images/hook.png" alt="" />
              <span>{t('cases.pt5_right3')}</span>
              <p>{t('cases.pt5_right3_1')}</p>
            </div>
            <div className={c.cass_left}>
              <img src="/images/hook.png" alt="" />
              <span>{t('cases.pt5_right4')}</span>
              <p>{t('cases.pt5_right4_1')}</p>
            </div>
          </Col>
        </Row>
      </div >
      {/* 分布式光伏发电方案*/}
      < div className={`${c.scheme} pb_4`
      }>

        <div className='container'>
          <h1 className={` animate__animated opacity_0 ${apt4 ? 'animate__fadeInDown' : ''}`}>{t('cases.pt6_title')}</h1>
          <Row className={c.distributed}>
            <Col md={3} sm={6}>
              <div>
                <Image src='/images/sche1.png' width='100%'></Image>
                <p className={c.mo_font_12}>{t('cases.pt6_text1')}</p>
              </div>
            </Col>
            <Col md={3} sm={6}>
              <div>
                <Image src='/images/sche2.png' width='100%'></Image>
                <p className={c.mo_font_12}> {t('cases.pt6_text2')}</p>
              </div>
            </Col>
            <Col md={3} sm={6}>
              <div>
                <Image src='/images/sche3.png' width='100%'></Image>
                <p className={c.mo_font_12}>{t('cases.pt6_text3')}</p>
              </div>
            </Col>
            <Col md={3} sm={6}>
              <div>
                <Image src='/images/sche4.png' width='100%'></Image>
                <p className={c.mo_font_12}>{t('cases.pt6_text4')}</p>
              </div>
            </Col>

          </Row>
          <div className={c.schembot}>
            <h3>{t('cases.pt6_sub')}</h3>
            <span>{t('cases.pt6_sub_samll')}</span>
          </div>
        </div>
        {/* {减排效应举例} */}
        <div className='container mt_24 '>
          <Row >
            <Col sm={6} md>
              <div className={c.effect}>
                <div className={`flex ${c.photovoltaic}`}>
                  <div className={c.pho_1}>
                    <h6>Coal</h6>
                    <div>{t('cases.pt6_jp')}</div>
                  </div>
                  <div className={c.pho_2}>
                    <span>1</span>
                  </div>
                </div>
                <div className={c.pho_1_1}>
                  <h6>0.328</h6>
                  <div>{t('cases.pt6_kg')}</div>
                </div>
                <div className={c.pho_1_1}>
                  <h6>328</h6>
                  <div>{t('cases.pt6_t')}</div>
                </div>
                <div className={c.pho_1_1}>
                  <h6>82000</h6>
                  <div>{t('cases.pt6_year')}</div>
                </div>
              </div>
            </Col>
            <Col sm={6} md>
              <div className={c.effect}>
                <div className={`flex ${c.photovoltaic}`}>
                  <div className={c.pho_1}>
                    <h6>Carbon Dust</h6>
                    <div>{t('cases.pt6_jp')}</div>
                  </div>
                  <div className={c.pho_2}>
                    <span>2</span>
                  </div>
                </div>
                <div className={c.pho_1_1}>
                  <h6>0.272</h6>
                  <div>{t('cases.pt6_kg')}</div>
                </div>
                <div className={c.pho_1_1}>
                  <h6>272</h6>
                  <div>{t('cases.pt6_t')}</div>
                </div>
                <div className={c.pho_1_1}>
                  <h6>6800</h6>
                  <div>{t('cases.pt6_year')}</div>
                </div>
              </div></Col>
            <Col sm={6} md>
              <div className={c.effect}>
                <div className={`flex ${c.photovoltaic}`}>
                  <div className={c.pho_1}>
                    <h6>CO2</h6>
                    <div>{t('cases.pt6_jp')}</div>
                  </div>
                  <div className={c.pho_2}>
                    <span>3</span>
                  </div>
                </div>
                <div className={c.pho_1_1}>
                  <h6>0.997</h6>
                  <div>{t('cases.pt6_kg')}</div>
                </div>
                <div className={c.pho_1_1}>
                  <h6>997</h6>
                  <div>{t('cases.pt6_t')}</div>
                </div>
                <div className={c.pho_1_1}>
                  <h6>24925</h6>
                  <div>{t('cases.pt6_year')}</div>
                </div>
              </div></Col>
            <Col sm={6} md>
              <div className={c.effect}>
                <div className={`flex ${c.photovoltaic}`}>
                  <div className={c.pho_1}>
                    <h6>SO2</h6>
                    <div>{t('cases.pt6_jp')}</div>
                  </div>
                  <div className={c.pho_2}>
                    <span>4</span>
                  </div>
                </div>
                <div className={c.pho_1_1}>
                  <h6>0.03</h6>
                  <div>{t('cases.pt6_kg')}</div>
                </div>
                <div className={c.pho_1_1}>
                  <h6>30</h6>
                  <div>{t('cases.pt6_t')}</div>
                </div>
                <div className={c.pho_1_1}>
                  <h6>SO2</h6>
                  <div>{t('cases.pt6_year')}</div>
                </div>
              </div>
            </Col>
            <Col sm={6} md>
              <div className={c.effect}>
                <div className={`flex ${c.photovoltaic}`}>
                  <div className={c.pho_1} style={{ flex: 2 }}>
                    <h6>NO、NO2 等气体</h6>
                    <div>{t('cases.pt6_jp')}</div>
                  </div>
                  <div className={c.pho_2}>
                    <span>5</span>
                  </div>
                </div>
                <div className={c.pho_1_1}>
                  <h6>0.015</h6>
                  <div>{t('cases.pt6_kg')}</div>
                </div>
                <div className={c.pho_1_1}>
                  <h6>15</h6>
                  <div>{t('cases.pt6_t')}</div>
                </div>
                <div className={c.pho_1_1}>
                  <h6>375</h6>
                  <div>{t('cases.pt6_year')}</div>
                </div>
              </div></Col>
          </Row>
        </div>
      </div >
      {/* {分布式能源站} */}
      < div className={c.distributed} >
        <Container>
          <h1 className={` animate__animated opacity_0 ${apt5 ? 'animate__fadeInDown' : ''}`}>{t('cases.pt7_title')}</h1>
          <Row>
            <Col md={6}>
              <Card className={c.dis_1}>
                <Card.Img variant="top" src="/images/cases_fb1.png" />
                <Card.Body style={{ background: '#F6F8FA' }} className={c.dis_card_body} >
                  <div className={c.dis_1_1} style={{ display: 'flex' }}>
                    <div style={{ flex: 1 }}>
                      <span>{t('cases.pt7_l1')}</span><br />
                      <span style={{ fontSize: '14px', color: '#999999' }}>{t('cases.pt7_l1_1')}</span>
                    </div>
                    <div style={{ flex: 1 }}>
                      <span>{t('cases.pt7_l2')}</span><br />
                      <span style={{ fontSize: '14px', color: '#999999' }}>{t('cases.pt7_l2_1')}</span>
                    </div>

                  </div>
                  <div className={c.dis_1_1} style={{ display: 'flex', marginTop: '40px' }}>
                    <div style={{ flex: 1 }}>
                      <span>{t('cases.pt7_l3')}</span><br />
                      <span style={{ fontSize: '14px', color: '#999999' }}>{t('cases.pt7_l3_1')}</span>
                    </div>
                    <div style={{ flex: 1 }}>
                      <span>{t('cases.pt7_l4')}</span><br />
                      <span style={{ fontSize: '14px', color: '#999999' }}>{t('cases.pt7_l4_1')}</span>
                    </div>

                  </div>

                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className={c.dis_2} >
                <Card.Img variant="top" src="/images/cases_fb2.png" />
                <Card.Body style={{ background: '#F6F8FA' }} className={c.dis_card_body}>
                  <div className={c.dis_1_1} style={{ display: 'flex' }}>
                    <div style={{ flex: 1 }}>
                      <span>{t('cases.pt7_r1')}</span><br />
                      <span style={{ fontSize: '14px', color: '#999999' }}>{t('cases.pt7_r1_1')}</span>
                    </div>
                    <div style={{ flex: 1 }}>
                      <span>{t('cases.pt7_r2')}</span><br />
                      <span style={{ fontSize: '14px', color: '#999999' }}>{t('cases.pt7_r2_1')}</span>
                    </div>
                    <div style={{ flex: 1 }}>
                      <span>{t('cases.pt7_r3')}</span><br />
                      <span style={{ fontSize: '14px', color: '#999999' }}>{t('cases.pt7_r3_1')}</span>
                    </div>
                  </div>
                  <div className={c.dis_1_1} style={{ display: 'flex', marginTop: '40px' }}>
                    <div style={{ flex: 1 }}>
                      <span>{t('cases.pt7_r4')}</span><br />
                      <span style={{ fontSize: '14px', color: '#999999' }}>{t('cases.pt7_r4_1')}</span>
                    </div>
                    <div style={{ flex: 1 }}>
                      <span>{t('cases.pt7_r5')}</span><br />
                      <span style={{ fontSize: '14px', color: '#999999' }}>{t('cases.pt7_r5_1')}</span>
                    </div>
                    <div style={{ flex: 1 }}>
                      <span>{t('cases.pt7_r6')}</span><br />
                      <span style={{ fontSize: '14px', color: '#999999' }}>{t('cases.pt7_r6_1')}</span>
                    </div>
                  </div>

                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div >
      {/* {张家口风电项目 } */}
      < div className={c.zjk} >
        <Card className={`bg-dark ${c.zjk_wrap}`} style={{ border: 'none', height: '50rem' }}>
          <Card.Img className={c.card_img} src="/images/zjk.png" alt="Card image" />
          <Card.ImgOverlay className={c.phone_zjk}>
            <Card.Title>
              <h1 className={`container animate__animated opacity_0 ${apt6 ? 'animate__fadeInDown' : ''}`} style={{ marginTop: '3.5rem' }}>{t('cases.pt8_title')}</h1>
            </Card.Title>

            <div className='container mt_4'>
              <p>{t('cases.pt8_text1')}</p>
              <p>{t('cases.pt8_text2')}</p>
            </div>
            <div className='container' style={{ marginTop: '10px', display: 'flex' }}>
              <div className={`${c.number} ${c.z_number}`} style={{ flex: '2' }}>
                <p>199.5MW</p>
                <p>{t('cases.pt8_t1')}</p>
              </div>
              <div className={`${c.number} ${c.z_number}`} style={{ flex: '3' }}>
                <p>133台</p>
                <p>{t('cases.pt8_t2')}</p>
              </div>
            </div>
            <div className={`container ${c.phone_mt}`} style={{ marginTop: '3.2rem', display: 'flex' }}>
              <div className={c.number} style={{ flex: '2' }}>
                <p>381,450MWh</p>
                <p>{t('cases.pt8_t3')}</p>
              </div>
              <div className={c.number} style={{ flex: '3' }}>
                <p>10,000单</p>
                <p>{t('cases.pt8_t4')}</p>
              </div>
            </div>



          </Card.ImgOverlay>
        </Card>
      </div >
      {/* 整车产品的产品碳足迹捕捉 */}
      < div className={c.vehicle} >
        <Container>
          <Row>
            <Col md={12} lg className={`opacity_0 animate__animated  ${apt7_l ? 'animate__backInLeft' : ''}`}>
              <img src="/images/cases_zc.png" alt="" width='100%' />
            </Col>
            <Col md={12} lg className={`opacity_0 animate__animated ${c.ve_right}  ${apt7_r ? 'animate__backInRight' : ''}`}>
              <h2>{t('cases.pt9_title')}</h2>
              <span className={c.isospan}>(ISO 14040+ISO 14044 + ISO 14067)</span>
              <div className={c.sy}>
                <h6>{t('cases.pt9_sub')}</h6>
                <p style={{ color: '#999' }}>{t('cases.pt9_sub_c')}</p>

              </div>
              <div>
                <div className={c.dis_1_1} style={{ display: 'flex' }}>
                  <div style={{ flex: 1 }}>
                    <span>
                      <img src="/images/bz1.png" alt="" />
                    </span><br />
                    <span style={{ fontSize: '14px', color: '#999999' }}>{t('cases.pt9_t1')}</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <span> <img src="/images/bz2.png" alt="" /></span><br />
                    <span style={{ fontSize: '14px', color: '#999999' }}>{t('cases.pt9_t2')}</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <span>
                      <img src="/images/bz3.png" alt="" />
                    </span><br />
                    <span style={{ fontSize: '14px', color: '#999999' }}>{t('cases.pt9_t3')}</span>
                  </div>
                </div>
                <div className={c.dis_1_1} style={{ display: 'flex' }}>
                  <div style={{ flex: 1 }}>
                    <span>
                      <img src="/images/bz4.png" alt="" />
                    </span><br />
                    <span style={{ fontSize: '14px', color: '#999999' }}>{t('cases.pt9_t4')}</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <span>
                      <img src="/images/bz5.png" alt="" />
                    </span><br />
                    <span style={{ fontSize: '14px', color: '#999999' }}>{t('cases.pt9_t5')}</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <span>
                      <img src="/images/bz6.png" alt="" />
                    </span><br />
                    <span style={{ fontSize: '14px', color: '#999999' }}>{t('cases.pt9_t6')}</span>
                  </div>
                </div>
                <div className={c.dis_1_1} style={{ display: 'flex' }}>
                  <div style={{ flex: 1 }}>
                    <span>
                      <img src="/images/bz7.png" alt="" />
                    </span><br />
                    <span style={{ fontSize: '14px', color: '#999999' }}>{t('cases.pt9_t7')}</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <span>
                      <img src="/images/bz8.png" alt="" />
                    </span><br />
                    <span style={{ fontSize: '14px', color: '#999999' }}>{t('cases.pt9_t8')}</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <span>
                      <img src="/images/bz9.png" alt="" />
                    </span><br />
                    <span style={{ fontSize: '14px', color: '#999999' }}>{t('cases.pt9_t9')}</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div >
      {/* {山西某水泥有限公司 } */}
      < div >
        <div className={c.shanxi}>
          <Card className={`bg - dark ${c.wrap}`} style={{ border: 'none' }}>
            <Card.Img className={c.card_img} src="/images/cases_sx.png" alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title className={` animate__animated opacity_0 ${apt8 ? 'animate__fadeInDown' : ''}`}>
                <h1 className='container' style={{ marginTop: '3.5rem' }}>{t('cases.pt10_title')}
                  <span className={c.small}>{t('cases.pt10_sub')}</span>
                </h1>

              </Card.Title>

              <div className='container'>
                <p className={c.earnings}>{t('cases.pt10_c')}</p>

              </div>
              <div className='container' style={{ marginTop: '2rem', display: 'flex' }}>
                <div className={`${c.number} ${c.z_number}`} style={{ flex: '1' }}>
                  <p>199.5MW</p>
                  <p>{t('cases.pt10_t1')}</p>
                </div>
                <div className={`${c.number} ${c.z_number}`} style={{ flex: '4' }}>
                  <p>133台</p>
                  <p>{t('cases.pt10_t2')}</p>
                </div>
              </div>

            </Card.ImgOverlay>
          </Card>
        </div>
      </div >
      <div className={c.inventory}>
        <Container>
          <Row>
            <Col sm={12} md>
              <h2>{t('cases.pt11_l1')}</h2>
              <ul>
                <li>{t('cases.pt11_l1_1')}</li>
                <li>{t('cases.pt11_l1_2')}</li>
              </ul>
              <h2>{t('cases.pt11_l2')}</h2>
              <ul>
                <li>{t('cases.pt11_l2_1')}</li>
              </ul>
            </Col>
            {/* 盘查报告 */}
            <Col sm={12} md className={c.report}>
              <h2 style={{ borderBottom: 'none', paddingBottom: '8px' }}>{t('cases.pt11_r1')} </h2>
              <p><span>{t('cases.pt11_r1_sb')}</span></p>
              <div style={{ background: '#F6F8FA', padding: '24px', borderRadius: '16px', marginTop: '24px' }}>
                <Table responsive className={c.table_right}>
                  <thead>
                    <tr>
                      <th>{t('cases.pt11_r_1_title')}</th>
                      <th className={c.psub_title}>{t('cases.pt11_r_1_title_sub')}</th>
                    </tr>
                  </thead>
                  <tbody className={c.tbody}>
                    <tr >
                      <td style={{ paddingTop: '1rem' }}>{t('cases.pt11_r_1')}</td>
                      <td>195046.20</td>
                    </tr>
                    <tr>
                      <td>{t('cases.pt11_r_2')}</td>
                      <td>-2.83</td>
                    </tr>
                    <tr>
                      <td>{t('cases.pt11_r_3')}</td>
                      <td>1506.02</td>
                    </tr>
                    <tr>
                      <td>{t('cases.pt11_r_4')}</td>
                      <td>1388.62</td>
                    </tr>
                    <tr>
                      <td>{t('cases.pt11_r_5')}</td>
                      <td>8991.45</td>
                    </tr>
                    <tr>
                      <td>{t('cases.pt11_r_6')}</td>
                      <td>3794776.89</td>
                    </tr>
                  </tbody>
                </Table>
              </div>

              <p style={{ color: '#666666', marginTop: '24px', marginBottom: '88px' }}>
                {t('cases.pt11_bt')}
              </p>
            </Col>
          </Row>

        </Container>
      </div>

    </>
  );
}

