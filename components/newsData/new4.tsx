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

function New4() {
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
          <h1>希必能源、新加坡MVGX绿色交易所、智普信就联合推动碳资产开发及发行交易达成战略合作</h1>
          <p className={c.date}>2022年10月13日</p>
          <p className={c.text}>
            2022年10月，碳通母公司北京智普信科技股份有限公司（下称“智普信”）与上海希必能源科技有限公司（下称“BECIS”）、新加坡绿色交易所（下称“MVGX”）就碳资产开发及发行交易签署战略合作协议。
          </p>
          <p className={c.text}>BECIS是一家综合能源解决方案的全球投资及运营商，致力于为客户提供低碳、高性价比和可靠的能源。在8个国家拥有项目和运营团队，包括中国、印度、泰国、印度尼西亚、菲律宾、越南、马来西亚、柬埔寨，全球团队运用专业知识和经验为客户量身定制分布式能源综合解决方案，包括供电、供热、热电联供、供冷、储能、节能改造、电动交通、沼气等。BECIS的服务领域涵盖医药、化工、食品和饮料、汽车、快消品及商业。</p>
          <img src='/images/new_details.png' ></img>
          <p className={c.text}>
            MVGX是由新加坡金融管理局授权并监管，建立在云端架构和区块链基础上，并使用纳斯达克引擎的第一家合规持牌绿色数字资产交易所。MVGX交易的产品主要包括两大类别：资产支撑通证和数字碳信用，同时也具备交易衍生品及发行绿色Reits的产品牌照。
          </p>
          {/* <img src='/images/industry.jpg' ></img> */}
          <p className={c.text}> 智普信是一家基于AI（人工智能）、BC（区块链）和IOT（物联网）于一体的数字化碳中和服务提供应商。其核心技术包括云边计算、安全逻辑算法、区块链安全存储、敏感数据可信层交换等技术。随着社会对气候变化和社会责任的关注，以及双碳政策的大力推动，智普信致力于利用AIOT可信数据为机构、企业和产品提供便捷和低成本的数字化碳中和服务。</p>
          <p className={c.text}>
            BECIS作为能效及低碳能源的投资运营商，持有多种类的VER市场减排项目。智普信携手MVGX，在帮助企业推动碳中和进程中，为BECIS持有及未来持有的自愿减排类资产形成增量收益。作为合作期内环境权益的开发合作伙伴，智普信将为BECIS提供VER项目的全程开发核证注册，以及将签发后的碳资产开发为CNT的技术服务，直至完成国际市场一级发行、交易及结算闭环。同时为整个服务过程提供合规性辅导。
          </p>

        </div>
      </div>

    </>

  );
}

export default New4;
