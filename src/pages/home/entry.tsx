import React from 'react';
import { Row, Col } from 'antd';
import './entry.less';

const Entry: React.FC = () => {
  return (
    <div className="app-wrap">
      <div className="app-title">
        <div className="title">应用入口</div>
        <span>—— 一站式科技服务子应用集成平台 ——</span>
      </div>
      <Row gutter={[16, 24]}>
        <Col span={4}>
          <div className="app-entry first">
            <div className="title">成果转化</div>
            <span>
              研发成果资源 <b>20.5万</b> 项
            </span>
          </div>
        </Col>
        <Col span={4}>
          <div className="app-entry second">
            <div className="title">成果转化</div>
            <span>
              研发成果资源 <b>20.5万</b> 项
            </span>
          </div>
        </Col>
        <Col span={4}>
          <div className="app-entry third">
            <div className="title">成果转化</div>
            <span>
              研发成果资源 <b>20.5万</b> 项
            </span>
          </div>
        </Col>
        <Col span={4}>
          <div className="app-entry forth">
            <div className="title">成果转化</div>
            <span>
              研发成果资源 <b>20.5万</b> 项
            </span>
          </div>
        </Col>
        <Col span={4}>
          <div className="app-entry fifth">
            <div className="title">成果转化</div>
            <span>
              研发成果资源 <b>20.5万</b> 项
            </span>
          </div>
        </Col>
        <Col span={4}>
          <div className="app-entry sixth">
            <div className="title">成果转化</div>
            <span>
              研发成果资源 <b>20.5万</b> 项
            </span>
          </div>
        </Col>
        <Col span={4}>
          <div className="app-entry fifth">
            <div className="title">成果转化</div>
            <span>
              研发成果资源 <b>20.5万</b> 项
            </span>
          </div>
        </Col>
        <Col span={4}>
          <div className="app-entry sixth">
            <div className="title">成果转化</div>
            <span>
              研发成果资源 <b>20.5万</b> 项
            </span>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Entry;
