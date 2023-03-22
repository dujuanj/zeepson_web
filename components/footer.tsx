import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
// import styles from './layout.module.css';

export default function Footer() {
  return (
    <>
      <div className='footer'>
        <Container>
          <Row>
            <Col>
              <h2 className='logo'>LOGO</h2>

            </Col>
          </Row>
          <Row>
            <Col>
              <Nav className="justify-content-center"
                activeKey="/home"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
              >
                <Nav.Item>
                  <Nav.Link href="/home" className='d_link'>首页</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-1" className='d_link'>碳管理服务</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-2" className='d_link'>loT 安全云</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-3" className='d_link'>
                    客户案例
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-4" className='d_link'>新闻资讯</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-5" className='d_link'>关于我们</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>
        </Container>
        <Container className='address'>
          <Row>
            <Col >
              <h6>北京总部</h6>
            </Col>
            <Col sm={2}>电话：010-8447-1877</Col>
            <Col sm={2}>技术支持：400-928-1122</Col>
            <Col sm={2}> 邮箱：zps@zeepson.com</Col>
            <Col sm={4}>地址：北京市 朝阳区 朝外大街乙6号 朝外SOHO B座0608室</Col>
          </Row>
        </Container>
        <div className='bottom'>Copyright © 2012-2019. 智普信科技 ｜ 京ICP备09027907号</div>
      </div>
    </>
  )
}