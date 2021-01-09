import React, { useState } from 'react';
import type { ReactText } from 'react';
import { Row, Col, Carousel, List, Progress, Button } from 'antd';
import ProList from '@ant-design/pro-list';
import {
  BellFilled,
  StarOutlined,
  LikeOutlined,
  MessageOutlined,
} from '@ant-design/icons';
import Entry from './entry';
import Ad from './ad';
import Pool from './pool';
import './index.less';

const data = [
  '中国人类遗传资源行政许可事项2020年 第三十五批简化流程审批结果',
  '中国人类遗传资源行政许可事项2020年 第三十五批简化流程审批结果',
  '中国人类遗传资源',
  '中国人类遗传资源行政许可事项2020年 第三十五批简化流程审批结果',
  '中国人类遗传资源行政许可事项2020年 第三十五批简化流程审批结果',
  '中国人类遗传资源行政许可事项2020年 第三十五批简化流程审批结果',
];

const dataSource = [
  {
    title: '语雀的天空',
    avatar:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
  },
  {
    title: 'Ant Design',
    avatar:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
  },
  {
    title: '蚂蚁金服体验科技',
    avatar:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
  },
  {
    title: '语雀的天空1',
    avatar:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
  },
  {
    title: 'Ant Design2',
    avatar:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
  },
];

export default () => {

  return (
    <div id="content">
      <div id="content-wrap">
        <Row gutter={[16, 24]}>
          <Col span={10}>
            <List
              header={
                <div className="news-header">
                  <div className="left">
                    <BellFilled className="icon" />
                    通知公告
                  </div>
                  <div className="right">
                    <a href="">查看更多</a>
                  </div>
                </div>
              }
              bordered
              size="small"
              itemLayout="vertical"
              className="news"
              dataSource={data}
              renderItem={(item) => (
                <List.Item
                  className="item"
                  extra={<div className="extra">2021-01-08</div>}
                >
                  <div className="content">{item}</div>
                </List.Item>
              )}
            />
          </Col>
          <Col span={14}>
            <Carousel autoplay>
              <div className="play-pic" />
              <div className="play-pic" />
              <div className="play-pic" />
            </Carousel>
          </Col>
        </Row>
        <Ad></Ad>
        <Row gutter={[16, 24]}>
          <Col span={6}>
            <div className="research-header"></div>
          </Col>
          <Col span={18}>
            <div className="achievement-list">
              <ProList<{ title: string }>
                toolBarRender={() => {
                  return [
                    <Button key="3" type="primary">
                      查看更多
                    </Button>,
                  ];
                }}
                metas={{
                  title: {},
                  description: {
                    render: () => {
                      return 'Ant Design, a design language for background applications, is refined by Ant UED Team';
                    },
                  },
                  avatar: {},
                  extra: {
                    render: () => (
                      <div
                        style={{
                          minWidth: 200,
                          flex: 1,
                          display: 'flex',
                          justifyContent: 'flex-end',
                        }}
                      >
                        <div
                          style={{
                            width: '200px',
                          }}
                        >
                          <div>发布中</div>
                          <Progress percent={80} />
                        </div>
                      </div>
                    ),
                  },
                  actions: {
                    render: () => {
                      return [<a key="init">邀请</a>, '发布'];
                    },
                  },
                }}
                rowKey="title"
                headerTitle="支持选中的列表"
                dataSource={dataSource}
              />
            </div>
          </Col>
        </Row>
        <Entry></Entry>
        <Pool></Pool>
        <Entry></Entry>
        <Pool></Pool>
      </div>
    </div>
  );
};
