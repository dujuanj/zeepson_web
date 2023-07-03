import React, { useEffect, useState } from 'react';
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

import styles from './layout.module.scss';

export default function Header({ href }: any) {
  const [scrollY, setScrollY] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [pnav, setPnav] = useState(true)
  // 翻译
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
    const { id, lang, asPath } = router.query;
    console.log(asPath)
    setHydrated(true);
    const handleScroll = (e: any) => {
      const scrollTop = (e.srcElement ? e.srcElement.documentElement.scrollTop : false) || window.pageYOffset || (e.srcElement ? e.srcElement.body.scrollTop : 0);
      setScrollY(scrollTop);
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
    console.log(path);
    e.preventDefault()
    router.push(path + `?lang=${query.lang}`)
    // if (query.lang === 'En') {
    //   router.push(path + '?lang=En')
    // } else {
    //   router.push(path)
    // }
    if (window.innerWidth <= 991) {
      setPnav(true)
      // handleToggleClick()
      console.log('Navbar.Toggle 被点击');
    }
  }

  const handleToggleClick = (event: any) => {
    console.log(query)
    console.log(query.lang)
    console.log(router.query)  //id=1
    // if (router.asPath.includes('detail')) {

    //   const { id }: any = router.query;
    //   localStorage.setItem('id', id)
    //   console.log(query);
    //   console.log(router.pathname)
    //   router.push({
    //     pathname: `/detail`,
    //     query: { id: id, lang: query.lang }
    //   })
     
    //   console.log(router)
    //   console.log(router.query)
    // }
    event.preventDefault()
    setPnav(!pnav)
    // console.log(router)
  }
  // scroll


  return (
    <>
      <div>

        <Navbar expand="lg" fixed='top' className={scrollY < 1 ? styles.nvb_bg : styles.nvb_bg_white}  >
          <Container style={{ height: '100%' }}>
            {/* logo */}
            <Navbar.Brand href="/" onClick={(e) => handleClick(e, "/", query)}>
              <Image
                alt=""
                src="/logo.png"
                width="205"
                height="32"
                className="d-inline-block header_logo"
                style={{ position: 'absolute', top: '0.7rem' }}

              />
              {/* {scrollY} */}
            </Navbar.Brand>
            {/* 中英切换移动端 */}
            <Nav.Link className='mobile_in8_show'>
              <nav className={styles.langSwitcher} >
                <LanguageSwitcher lang="En"><span className={query.lang == 'En' ? 'en' : ''}>En</span></LanguageSwitcher> /{' '}
                <LanguageSwitcher lang="Ch"><span className={query.lang == 'Ch' ? 'ch' : ''}>简</span></LanguageSwitcher>  </nav>
            </Nav.Link>
            <button className={styles.toggle_btn} onClick={handleToggleClick}>
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* nav-bar */}
            <Navbar.Collapse id="basic-navbar-nav" style={{ flexGrow: "0", height: '100%' }} className={styles.collapse}>
              <Nav className={`me-auto nav_a phone_nav ${pnav ? 'phone_navs' : ''} `} style={{ lineHeight: '39px' }}>
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
                {/* 产品与服务 */}
                <Nav.Link href={href}
                  onClick={(e) => handleClick(e, "/product", query)}
                  // onMouseOver={handleMouseOver}
                  className={(router.asPath === '/product' || (router.asPath === '/product?lang=En') || (router.asPath === '/product?lang=Ch')) ? styles['active'] : ''}
                // onMouseOut={handleMouseOut}
                > {t('nav.carbon')}
                  {/* <i className={styles.arrow}>
                    <Image src="/images/arrow_down.png" alt="" />
                  </i> */}
                  <span ></span>
                  {/* <div className={`${styles.drop_menu} ${isHovering ? styles.show : styles.hide}`} >
                    <Row>
                      <Col>1111</Col>
                    </Row>
                  </div> */}
                </Nav.Link>

                <Nav.Link href="#link"
                  onClick={(e) => handleClick(e, "/customer", query)}
                  className={(router.asPath === '/customer' || (router.asPath === '/customer?lang=En') || (router.asPath === '/customer?lang=Ch')) ? styles['active'] : ''}
                >
                  {t('nav.custom')}
                  <span ></span>
                </Nav.Link>
                <Nav.Link href={href}
                  onClick={(e) => handleClick(e, "/news", query)}
                  className={(router.asPath === '/news' || (router.asPath === '/news?lang=En') || (router.asPath === '/news?lang=Ch') || (router.pathname == '/detail')) ? styles['active'] : ''}>

                  {t('nav.news')}
                  <span ></span>
                </Nav.Link>
                <Nav.Link href={href}
                  onClick={(e) => handleClick(e, "/contact", query)}
                  className={(router.asPath === '/contact' || (router.asPath === '/contact?lang=En') || (router.asPath === '/contact?lang=Ch')) ? styles['active'] : ''}>
                  {t('nav.contact')}
                  <span ></span>
                </Nav.Link>
                <Nav.Link href={href}
                  onClick={(e) => handleClick(e, "/qa", query)}
                  className={(router.asPath === '/qa' || (router.asPath === '/qa?lang=En') || (router.asPath === '/qa?lang=Ch')) ? styles['active'] : ''}>
                  {t('nav.qa')}
                  <span ></span>
                </Nav.Link>
                <Nav.Link className='mobile_in8_none'>
                  <nav className={styles.langSwitcher} onClick={handleToggleClick}>
                    <LanguageSwitcher lang="En"> <span className={query.lang=='En'?'en':''}>En</span> </LanguageSwitcher> /{' '}
                    <LanguageSwitcher lang="Ch"> <span className={query.lang == 'Ch' ? 'ch' : ''}>简</span> </LanguageSwitcher>  </nav>
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

