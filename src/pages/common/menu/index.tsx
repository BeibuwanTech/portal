import React from 'react';
import { Divider } from 'antd';
import {
  HomeFilled,
  FlagFilled,
  InsuranceFilled,
  StarFilled,
  TrademarkCircleFilled,
  PayCircleFilled,
} from '@ant-design/icons';
import './index.less';

const Menu: React.FC = () => {
  return (
    <div id="menu">
      <div id="menu-wrap">
        <div className="menu-body" id="menu-list">
          <div className="menu-item">
            <a href="/html/" className="menu-item-active">
              <HomeFilled className="menu-icon" />
              首页
            </a>
          </div>
          <div className="menu-item">
            <a href="/html/zxbl/">
              <FlagFilled className="menu-icon" />
              研究开发
            </a>
          </div>
          <div className="menu-item">
            <a href="/html/bszx/">
              <InsuranceFilled className="menu-icon" />
              检验认证
            </a>
          </div>
          <div className="menu-item">
            <a id="yhfw-a">
              <TrademarkCircleFilled className="menu-icon" />
              知识产权
            </a>
          </div>
          <div className="menu-item">
            <a href="/html/jgcx/">
              <StarFilled className="menu-icon" />
              创业孵化
            </a>
          </div>
          <div className="menu-item">
            <a href="/html/jgcx/">
              <PayCircleFilled className="menu-icon" />
              科技金融
            </a>
          </div>
        </div>
        <div className="menu-links">
          {/* <a href="/mostreg/reg/index" target="_blank">
            用户名(管理员)
          </a>
          <Divider type="vertical" />
          <a href="/mostreg/reg/index" target="_blank">
            退出
          </a> */}
          <a href="/mostreg/reg/index" target="_blank">
            用户登录
          </a>
          <Divider type="vertical" />
          <a href="/mostreg/reg/index" target="_blank">
            用户注册
          </a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
