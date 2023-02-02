// import React, { useState } from 'react';
// import { Button } from 'react-bootstrap';
import Image from 'next/image';
// import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useRouter } from 'next/router'

import styles from './layout.module.css';

export default function Header({href}:any) {
  // const [show, setShow] = useState(true);
  
  const router = useRouter()
  console.log(router.asPath)
 
  const handleStyle = (path:string) => {
    return {
      // marginRight: 10,
      color:router.asPath === path ? 'red' : 'black',
    }
  }
  const handleClick = (e:any,path:string) => {
    // console.log(urlflag)
    e.preventDefault()
    router.push(path)
  }
  return (
    <>
      <Navbar bg="light" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#home">
            <Image
              alt=""
              src="/next.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            React-Bootstrap
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" style={{ flexGrow: "0"}}>
            <Nav className="me-auto">
              <Nav.Link href={href} onClick={(e) => handleClick(e, "/")} style={handleStyle("/")}>首页</Nav.Link>
              <Nav.Link href="#link" onClick={(e) => handleClick(e, "/contact")} style={handleStyle("/service")}>碳管理服务</Nav.Link>
              <NavDropdown title="IoT安全云" id="basic-nav-dropdown">
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
              </NavDropdown>
              <Nav.Link href="#link" className='d_nav' onClick={(e) => handleClick(e, "/contact")} style={handleStyle("/case")}>客户案例</Nav.Link>
              <Nav.Link href="#link" onClick={(e) => handleClick(e, "/contact")} style={handleStyle("/news")}>新闻资讯</Nav.Link>
              <Nav.Link href="#link" className={styles.d_nav} onClick={(e) => handleClick(e, "/contact")} style={handleStyle("/contact")}>关于我们</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <div className={styles.red}>aaaaaaaa</div> */}

      <style jsx>{`
        .test {
          margin-top: 60px;
          color: red;
        }
        
      `}</style>
    </>
  );
}

// interface PaType{
//   [key:string]:any
// }
// export async function getStaticProps({ params }:PaType) {
//   // params.id will be like ['a', 'b', 'c']
//   console.log(params)
// }
