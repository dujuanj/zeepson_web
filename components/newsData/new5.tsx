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

function New5() {
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
          <h1>可持续发展领导者TÜV南德集团携手智普信 合推零碳数字化平台</h1>
          <p className={c.date}>2022年10月13日</p>
          <p className={c.text}>
            2023年2月，全球可持续发展评估和认证解决方案提供商TÜV南德意志集团（下称“TÜV南德”）宣布与碳通母公司北京智普信科技股份有限公司（下称“智普信”）携手创建高合规等级的零碳数字化平台，以对应各行业对于精准碳计量及管理要求。
          </p>
          <p className={c.text}>TÜV南德于1866年创立于德国的曼海姆，凭借世界级的服务及领先的技术享誉全球。服务范围覆盖认证、测试、检验、资讯及专家指导等多个领域。智普信是基于AI(⼈⼯智能) 、BC(区块链)和IoT(物联⽹)于⼀体的数字化碳中和服务提供应商。</p>
          <img src='/images/logo.svg' ></img>
          <p className={c.text}>
            随着双碳战略的促进与实施，越来越多企业需要碳盘查、核查服务与产品碳足迹的认证。TÜV南德作为双碳第三方服务的领先者，累积了CDM时期全球过半的项目案例。智普信依托自身强悍的系统开发及服务水平叠加TÜV南德丰富的项目经验，携手打造了业内领先的零碳数字化平台。
          </p>
          {/* <img src='/images/industry.jpg' ></img> */}
          <p className={c.text}>据悉，碳数字化平台将围绕碳管理SaaS、 碳足迹评估与数字化SaaS系统、在线碳资产管理、第三方在线碳核查工具、碳资产开发与核证及碳资产交易技术等方面展开</p>
          <p className={c.text}>此外，智普信还会在此零碳数字化平台的基础上，依照TÜV南德的需求量身定制一套第三方专业工作工具平台，包含碳盘查、碳核查、在线碳管理体系、绿色供应链、在线培训与考核等模块。智普信将为此独立设置云空间并部署程序包、用户手册等内容供TÜV南德独家使用。</p>

        </div>
      </div>

    </>

  );
}

export default New5;
