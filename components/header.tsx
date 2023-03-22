import React, { useEffect, useState } from 'react';
// import { Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Row'

import { useRouter } from 'next/router'
import {
  useTranslation,
  useLanguageQuery,
  LanguageSwitcher,
} from "next-export-i18n";

import styles from './layout.module.css';

export default function Header({ href }: any) {
  const [scrollY, setScrollY] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const { t } = useTranslation();
  const [query] = useLanguageQuery();
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const router = useRouter()
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
    const handleScroll = (e: any) => {
      const scrollTop = (e.srcElement ? e.srcElement.documentElement.scrollTop : false) || window.pageYOffset || (e.srcElement ? e.srcElement.body.scrollTop : 0);

      setScrollY(scrollTop);
      console.log(scrollTop)
      if (scrollTop > 70) {
        //添加个背景色
      }

    };
    // eslint-disable-next-line no-undef
    // handleScroll(e);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null;
  }

  // 页面跳转
  const handleClick = (e: any, path: string, query: any) => {
    e.preventDefault()
    if (query.lang === 'En') {
      router.push(path + '?lang=En')
    } else {
      router.push(path)
    }
  }
  // scroll


  return (
    <>
      <div>
        <Navbar expand="lg" fixed='top' className={scrollY < 70 ? styles.nvb_bg : styles.nvb_bg_white}  >
          <Container style={{ height: '100%' }}>
            {/* logo */}
            <Navbar.Brand href="/">
              <Image
                alt=""
                src="/next.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"

              />
              碳通科技 {scrollY}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            {/* nav-bar */}
            <Navbar.Collapse id="basic-navbar-nav" style={{ flexGrow: "0", height: '100%' }}>
              <Nav className="me-auto nav_a" style={{ height: '100%', lineHeight: '39px' }}>
                <Nav.Link href={href}
                  onClick={(e) => handleClick(e, "/", query)}
                  className={((router.asPath === '/') || (router.asPath === '/?lang=En') || (router.asPath === '/?lang=Ch')) ? styles['active'] : ''}

                >{t('nav.home')}
                  <span ></span>
                </Nav.Link>

                <Nav.Link href="/Iot"
                  onClick={(e) => handleClick(e, "/Iot", query)}
                  className={(router.asPath === '/Iot' || (router.asPath === '/Iot?lang=En') || (router.asPath === '/Iot?lang=Ch')) ? styles['active'] : ''}

                > {t('nav.iot')}
                  <span ></span>
                </Nav.Link>
                {/* 碳管理服务 */}
                <Nav.Link href={href}
                  onMouseOver={handleMouseOver}
                  className={(router.asPath === '/Iot' || (router.asPath === '/Iot?lang=En') || (router.asPath === '/Iot?lang=Ch')) ? styles['active'] : ''}
                  onMouseOut={handleMouseOut}
                > {t('nav.carbon')}
                  <i className={styles.arrow}>
                    <Image src="/images/arrow_down.png" alt="" />
                  </i>
                  <span ></span>
                  <div className={`${styles.drop_menu} ${isHovering ? styles.show : styles.hide}`} >
                    <Row>
                      <Col>1111</Col>
                    </Row>
                  </div>
                </Nav.Link>
                {/* <NavDropdown title={t('nav.carbon')}  id="basic-nav-dropdown"  className={styles.dropColor}  >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
                <Nav.Link href="#link"
                  onClick={(e) => handleClick(e, "/customer", query)}
                  className={(router.asPath === '/customer' || (router.asPath === '/customer?lang=En') || (router.asPath === '/customer?lang=Ch')) ? styles['active'] : ''}
                >
                  {t('nav.custom')}
                  <span ></span>
                </Nav.Link>
                <Nav.Link href={href}
                  onClick={(e) => handleClick(e, "/news", query)}
                  className={(router.asPath === '/news' || (router.asPath === '/news?lang=En') || (router.asPath === '/news?lang=Ch')) ? styles['active'] : ''}>
                  {t('nav.news')}
                  <span ></span>
                </Nav.Link>
                <Nav.Link href={href}
                  onClick={(e) => handleClick(e, "/contact", query)}
                  className={(router.asPath === '/contact' || (router.asPath === '/contact?lang=En') || (router.asPath === '/contact?lang=Ch')) ? styles['active'] : ''}>
                  {t('nav.contact')}
                  <span ></span>
                </Nav.Link>
                <Nav.Link>
                  <nav className={styles.langSwitcher}>
                    <LanguageSwitcher lang="En">En</LanguageSwitcher> /{' '}
                    <LanguageSwitcher lang="Ch">简</LanguageSwitcher>  </nav>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>



      <style jsx>{`
        .nav_a a{
          margin-right:40px;
        }
        
      `}</style>
    </>
  );
}

