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

function New2() {
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
          <h1>埃顿集团、新加坡绿色交易所、智普信达成战略合作
            合力共举碳资产开发及发行交易</h1>
          <p className={c.date}>2022年10月13日</p>
          <p className={c.text}>
            2022年10月 日，法国埃顿集团（ADEN，下称“埃顿集团”）、新加坡元宇宙绿色交易所（MetaVerse Green Exchange,下称“MVGX”）、北京智普信科技股份有限公司（下称“智普信”），共同签署了《碳资产开发及发行交易战略合作协议》。
            随着双碳战略的促进与实施，越来越多企业对于能效提升，清洁能源有越来越迫切的需要。此过程随着程序合规日渐规范的要求，在国际间产生了标准碳金融产品成型的可能。
          </p>
          <img src='/images/news2.png' ></img>
          <p className={c.text}>
            埃顿集团25年来始终致力于优化设施运营管理，为超过1,500家跨国和高科技企业及机构服务。作为能效及低碳能源的投资运营商，埃顿集团持有多种类的VER市场减排项目，除了更高能效，更低能源单价外，合规碳资产的开发、发行及变现也成为其随之而来的诉求。
          </p>
          <img src='/images/industry.jpg' ></img>
          <p className={c.text}>MVGX是由新加坡金融管理局授权并监管，建立在云端架构和区块链基础上，并使用纳斯达克引擎的第一家合规持牌绿色数字资产交易所。MVGX交易的产品主要涵括两大类别：资产支撑通证和数字碳信用，同时也具备交易衍生品及发行绿色Reits的产品牌照。</p>
          <p className={c.text}>智普信是基于AI（人工智能）、BC（区块链）和IoT（物联网）于一体的数字化碳中和服务提供应商，核心技术包括云边计算、安全逻辑算法、区块链安全存储、敏感数据可信层交换等技术。 随着社会对气候变化和社会责任的关注，以及双碳政策的大力推动，智普信致力于利用AIoT可信数据为机构、企业和产品提供便捷和低成本的数字化碳中和服务。</p>
          <p className={c.text}>三方本着优势互补、公平公正的原则，为推动碳中和进程达成合作意向。合作将为埃顿集团持有及未来持有的自愿减排类资产形成增量收益。按照协议，智普信将为埃顿集团组织既有VER项目的核证服务，并为核证后的碳资产提供开发CNT的技术服务。智普信基于非同质化数字孪生技术和碳中和通证技术为CNT提供技术支撑。 </p>
          <p className={c.text}>智普信是目前全球范围内唯一以自有知识产权系统CaaS提供CNT成型技术服务的公司，此机制支持跨国公司向发展中国家购买碳信用额而不破坏发展中国家完成其国家自主贡献（NDC），同时其具备的金融产品属性，也令其在金融衍生品或金融工具上具备可塑性。 </p>

        </div>
      </div>

    </>

  );
}

export default New2;
