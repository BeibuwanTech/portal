import React from 'react';
import { Input, Divider } from 'antd';
import logo from '@/assets/images/logo.png';
import './index.less';

const Header: React.FC<{ title: string; subtitle: string; info?: string }> = (
  props,
) => {
  return (
    <div id="header-wrap">
      <div className="header-bar" />
      <div className="header-title">
        <div className="header-title-logo">
          <img src={logo} />
          <div>
            <div className="title">{props.title}</div>
            <span className="subtitle">{props.subtitle}</span>
          </div>
          {props.info ? (
            <>
              <Divider type="vertical" className="divider" />
              <div className="info">{props.info}</div>
            </>
          ) : null}
        </div>
        <div className="header-search">
          <div className="header-menu">
            <a href="/">综合科技服务平台</a>
            <Divider type="vertical" />
            <a href="/digital" target="_blank">
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
