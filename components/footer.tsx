import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import React, { useState, useEffect, useRef } from 'react';
// import curStyle from './layout.module.scss';
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
          <Row>
            <Col>
              <h2 className='logo'>
                <img src="/images/logo_w.png" alt="" width='234px' />
              </h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <Nav className="justify-content-center"
                activeKey="/home"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
              >
                <Nav.Item >
                  {/* <Nav.Link href="/home" className='d_link'>{t('nav.home')}</Nav.Link> */}
                  <Nav.Link
                    onClick={(e) => handleClick(e, "/", query)}

                    className='d_link'
                  >{t('nav.home')}
                    <span ></span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-1" className='d_link'>{t('nav.iot')}</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-2" className='d_link'>{t('nav.carbon')}</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-3" className='d_link'>
                    {t('nav.custom')}
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-4" className='d_link'>  {t('nav.news')}</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="link-5" className='d_link'> {t('nav.contact')}</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-5" className='d_link'>Q&A</Nav.Link>
                </Nav.Item>

              </Nav>
            </Col>
          </Row>
          <Row style={{ margin: '2.68rem auto', marginBottom: '6rem' }}>
            <Col className='d_link' md={1}><span>{t('footer.beijing')}</span></Col>
            <Col className='d_link' md={2}><span>{t('footer.Tel')}：010-8447-1877</span></Col>
            <Col className='d_link' md={2}><span>{t('footer.support')}：400-928-1122</span></Col>
            <Col className='d_link' md={2}><span>{t('footer.mail')}：zps@zeepson.com</span></Col>
            <Col className='d_link' md={4}><span>{t('footer.address')}</span></Col>

          </Row>
        </Container>
        {/* <Container className='address'>
          <Row>
            <Col >
              <h6>北京总部</h6>
            </Col>
            <Col sm={2}>电话：010-8447-1877</Col>
            <Col sm={2}>技术支持：400-928-1122</Col>
            <Col sm={2}> 邮箱：zps@zeepson.com</Col>
            <Col sm={4}>地址：北京市 朝阳区 朝外大街乙6号 朝外SOHO B座0608室</Col>
          </Row>
        </Container> */}
        <div className='bottom'>Copyright © 2012-2019. 智普信科技 ｜ 京ICP备09027907号</div>

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