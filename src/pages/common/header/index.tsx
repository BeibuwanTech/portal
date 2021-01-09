import React from 'react';
import { Input, Divider } from 'antd';
import logo from '@/assets/images/logo.png';
import './index.less';

const Header: React.FC = () => {
  return (
    <div id="header-wrap">
      <div className="header-bar" />
      <div className="header-title">
        <div className="header-title-logo">
          <img src={logo} />
          <div>
            <span className="subtitle">国家重点研发计划支持项目</span>
            <div className="title">北部湾城市群综合科技服务平台</div>
          </div>
        </div>
        <div className="header-search">
          <div className="header-menu">
            <a href="/html/ljbpt/" target="_blank">
              产业子平台介绍
            </a>
            <Divider type="vertical" />
            <a href="http://gjzwfw.www.gov.cn/index.html" target="_blank">
              电子信息
            </a>
            <Divider type="vertical" />
            <a href="http://gjzwfw.www.gov.cn/index.html" target="_blank">
              冶金石化
            </a>
            <Divider type="vertical" />
            <a href="http://gjzwfw.www.gov.cn/index.html" target="_blank">
              高端制造
            </a>
          </div>
          <div className="main-search">
            <Input.Search placeholder="全站搜索" allowClear></Input.Search>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
