import React from 'react';
import { Row, Col } from 'antd';
import './ad.less';

const Ad: React.FC = () => {
  return (
    <Row gutter={[16, 24]}>
      <Col span={24}>
        <div className="ad"></div>
      </Col>
    </Row>
  );
};

export default Ad;
