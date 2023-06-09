import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import c from '../../src/pages/detail/detail.module.scss'
// 翻译
import {
  useTranslation,
} from "next-export-i18n";

function New1() {
  const [hydrated, setHydrated] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null;
  }

  return (
    <>

      <div>
        <div className={c.detail_left}>
          <h1>全球首创“企业财务+碳一体化ERP解决方案”在京推出 ——促进产业升级打击漂绿行为</h1>
          <p className={c.date}>2022年10月13日</p>
          <p className={c.text}>
            10月13日，由新加坡元宇宙绿色交易所（Metaverse Green Exchange，MVGX），甲骨文公司（Oracle NetSuite）与北京智普信科技股份有限公司（以下简称“智普信科技”）联合举办的“双碳联合方案发布会暨碳数字创新中心揭牌仪式”在京成功举行。活动采用线上线下相结合的方式，汇聚企业运营管理者、新技术与新服务领域合作伙伴及中国与新加坡相关领域的专家共同见证此次重要成果发布。
          </p>
          <img src='/images/news1.png' ></img>
          <p className={c.text}>
            活动现场，全球首次推出高品质的“企业财务+碳一体化ERP系统”，为企业提供从全球财务合规、ISO国际标准认证的碳足迹到碳资产收益的一站式服务与解决方案。此系统可帮助企业迅速且精确地了解自身的财务及碳的资产负债表状况，寻找潜在降低排放的可行性及措施，获得碳减排或者碳中和认证并最终为企业制定出碳资产收益方案。
          </p>
          <img src='/images/new1_2.png' ></img>
          <p className={c.text}>甲骨文全球副总裁、Oracle NetSuite亚洲地区总经理潘杰君先生，MVGX总裁、前英国央行绿色金融负责人、G20绿色金融联合主席和UNDP高级顾问Michael Sheren先生等嘉宾代表相继发表主题演讲。</p>
          <p className={c.text}>潘杰君先生表示：“我们很高兴和MVGX与智普信科技合作，推出获得MVGX基于区块链的碳ERP系统加强的Oracle Netsuite ERP系统，更全面地为我们亚洲的客户提供财务和碳的服务“。</p>
          <img src='/images/new1_3.png' ></img>
          <p className={c.text_sub}>（甲骨文全球副总裁、Oracle NetSuite亚洲地区总经理潘杰君先生）</p>
          <p className={c.text}>社会公众对气候变化和可持续发展的关注越来越重视，防止漂绿行为（Green Washing）不容置疑，在Michael Sheren看来，漂绿行为一直被认为是环保领域中的难题，为其建立完善的防范监督机制，打造严谨且诚信的流程至关重要。全球知名的甲骨文公司、MVGX和智普信科技合作推出的全球第一套高品质‘企业财务＋碳ERP系统’，为全球反漂绿的努力添砖加瓦“。</p>
          <img src='/images/new1_4.png'></img>
          <p className={c.text_sub}>（MVGX总裁、前英国央行绿色金融负责人、G20绿色金融联合主席和UNDP高级顾问Michael Sheren先生）</p>
          <p className={c.text}>随后，MVGX首席技术顾问、智普信科技CEO洪英莉女士为“碳数字创新解决方案”进行了详细介绍。她表示：“此系统融入了甲骨文全球领先的财务ERP系统、MVGX领先的碳ERP系统和其新加坡持牌交易所对碳信用的国际资本化及智普信科技核心数据安全及区块链技术。同时，第三方国际认证机构（如BSI 、TUV SUD）的加入，使整个系统的结果更加真实完整及合规，极大帮助了ESG报告的清晰性和完整性，以遏制漂绿行为的发生”。</p>
          <img src='/images/new1_5.png'></img>
          <p className={c.text_sub}>（MVGX首席技术顾问、智普信科技CEO洪英莉女士）</p>
          <p className={c.text}>伴随中国经济飞速发展和经济实力的日益增强，中国制造业4.0必将走向更为广阔的全球化市场。根据联合国政府间气候变化专门委员会（IPCC）的调查报告，目前中国每年有超过35亿吨的自愿减排碳排放量，自愿减排相关的服务市场空间巨大，潜在规模每年超过2450亿人民币。与此同时，全球碳税正在成为制约企业发展的关键成本因素。面对这一全球化难题，“企业财务+碳一体化ERP系统”通过数字化技术帮助企业量化和流程管控，赋能更多企业绿色低碳发展。</p>
          <h4>关于新加坡元宇宙绿色交易所（ Metaverse Green Exchange，MVGX） </h4>
          <p className={c.text}>新加坡元宇宙绿色交易所成立于2018年，总部位于新加坡，是一家服务碳中和的金融科技公司。通过其持有的新加坡金管局颁发的交易所、托管、证券、信托、期货、和支付牌照，基于纳斯达克(Nasdaq)引擎的新型交易平台，以及已申请专利的包括非同质化数字孪生技术(NFDT®）和数字碳信用(CNT®)在内的技术平台，提供全产业链碳即服务(Carbon as a Service, CaaS) 的综合解决方案。</p>

          <h4>关于Oracle NetSuite</h4>
          <p className={c.text}>Oracle NetSuite 在一个集成的平台中提供企业发展所需的所有功能。目前已在全球 217 个国家和地区拥有 32,000 多家客户，致力于通过互联网交付业务应用，可提供一整套基于云的 ERP 应用，涵盖财务、库存管理、人力资源、专业服务自动化和全渠道商务。</p>
          <h4>关于北京智普信科技股份有限公司</h4>
          <p className={c.text}>北京智普信科技股份有限公司成立于2008年， 是一家基于AI (人工智能) 、BC（区块链 ）和IOT (物联网) 于一体的数字化碳中和服务供应商。</p>
        </div>
      </div>

    </>

  );
}

export default New1;
