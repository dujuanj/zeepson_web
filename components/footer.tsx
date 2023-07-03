import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router'
import {
  useTranslation,
  useLanguageQuery,
  LanguageSwitcher,
} from "next-export-i18n";

// 翻译
import {
  // useTranslation,
} from "next-export-i18n";

export default function Footer() {
  const [query] = useLanguageQuery();
  const [hydrated, setHydrated] = useState(false);
  const { t } = useTranslation();
  const router = useRouter()
  // 页面跳转
  const handleClick = (e: any, path: string, query: any) => {
    e.preventDefault()
    if (query.lang === 'En') {
      router.push(path + '?lang=En')
    } else {
      router.push(path)
    }
  }

  useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null;
  }

  return (
    <>
      <div className='footer'>
        <Container>
          {/* logo */}
          <Row>
            <Col>
              <h2 className='logo'>
                <img src="/images/logo_w.png" alt="" width='234px' />
              </h2>
            </Col>
          </Row>
          {/* nav */}
          <Row>
            <Col>
              <Nav className={`justify-content-center footer_nav`}
                activeKey="/home"
              >
                <Nav.Item >
                  {/* <Nav.Link href="/home" className='d_link'>{t('nav.home')}</Nav.Link> */}
                  <Nav.Link
                    onClick={(e) => handleClick(e, "/", query)}
                    className='d_link'
                  >{t('nav.home')}<span ></span></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    onClick={(e) => handleClick(e, "/Iot", query)}
                    eventKey="link-1" className='d_link'>{t('nav.iot')}<span ></span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    onClick={(e) => handleClick(e, "/product", query)}
                    eventKey="link-2" className='d_link'>{t('nav.carbon')}<span ></span></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    onClick={(e) => handleClick(e, "/customer", query)}
                    eventKey="link-3" className='d_link'>
                    {t('nav.custom')}<span ></span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    onClick={(e) => handleClick(e, "/news", query)}
                    eventKey="link-4" className='d_link'>  {t('nav.news')}<span ></span></Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link
                    onClick={(e) => handleClick(e, "/contact", query)}
                    eventKey="link-5" className='d_link'> {t('nav.contact')}<span ></span></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    onClick={(e) => handleClick(e, "/qa", query)}
                    eventKey="link-5" className='d_link'>Q&A<span ></span></Nav.Link>
                </Nav.Item>

              </Nav>
            </Col>
          </Row>
          {/* 总部 */}
          <Row className='d_bj'>
            <Col className='d_link' md={1}>
              <h2 className='center' style={{ fontSize: '24px' }}>{t('footer.beijing')}</h2></Col>
          </Row>
          <Row className='footer_bot' style={{ margin: '24px auto', marginBottom: '6rem' }}>

            <Col className='d_link' md={2}>
              <i className='footer_icon'>
                <img src="images/phone_icon.png" alt="" />
              </i>
              <span>010-8447-1877</span></Col>
            <Col className='d_link' md={3}>
              <i className='footer_icon'>
                <img src="images/phone_icon.png" alt="" />
              </i>
              <span> 400-928-1122({t('footer.support')})</span>
            </Col>
            <Col className='d_link' md={2}>
              <i className='footer_icon'>
                <img src="images/mail_icon.png" alt="" />
              </i>
              <span>zps@zeepson.com</span></Col>
            <Col className='d_link' md={4}>
              <i className='footer_icon'>
                <img src="images/addre_icon.png" alt="" />
              </i>
              <span>{t('footer.address')}</span></Col>

          </Row>
        </Container>
        <div className='bottom'>Copyright © 2012-2019. 智普信科技 ｜ 京ICP备09027907号-9</div>

        <style jsx>{`
          .myh1{
            color:blue
          }
          .d_nav a{
            color:#fff;
          }
          .d_link{
            color:#fff;
          }
    `}</style>
      </div>
    </>
  )
}