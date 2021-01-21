import React, { useState } from 'react';
import type { ReactText } from 'react';
import { Row, Col, Carousel, List, Space, Typography, Tag } from 'antd';
import ProList from '@ant-design/pro-list';
import { BellFilled, DollarCircleTwoTone } from '@ant-design/icons';
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
    name: '一种基于区块链技术的人才引进方法',
    image:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    desc: '武汉...科技有限公司|海南大学',
  },
  {
    name: 'Ant Design',
    image:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    desc: '我是一条测试的描述',
  },
  {
    name: '蚂蚁金服体验科技',
    image:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    desc: '我是一条测试的描述',
  },
  {
    name: 'TechUI',
    image:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    desc: '我是一条测试的描述',
  },
  {
    name: 'TechUI2',
    image:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    desc: '我是一条测试的描述',
  },
  {
    name: 'TechUI3',
    image:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    desc: '我是一条测试的描述',
  },
  {
    name: 'TechUI221',
    image:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    desc: '我是一条测试的描述',
  },
  {
    name: 'TechUI312',
    image:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    desc: '我是一条测试的描述',
  },
  {
    name: 'TechUI211',
    image:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    desc: '我是一条测试的描述',
  },
  {
    name: 'TechUI23',
    image:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    desc: '我是一条测试的描述',
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
        <div className="title-wrap">
          <div className="title">市场动态</div>
          <span>—— 助力企业科技创新成果转化交易 ——</span>
        </div>
        <Row gutter={[8, 8]}>
          <Col span={12}>
            <div className="trade-header">
              <div className="title">近期成交</div>
              <div className="content">2093 项</div>
            </div>
          </Col>
          <Col span={12}>
            <div className="achievement-header">
              <div className="title">最新成果</div>
            </div>
          </Col>
          <Col span={12}>
            <div className="trade-wrap">
              <ProList<any>
                className="trade-list"
                rowKey="name"
                // headerTitle="基础列表"
                toolBarRender={false}
                split
                dataSource={dataSource}
                showActions="hover"
                metas={{
                  title: {
                    dataIndex: 'name',
                  },
                  description: {
                    dataIndex: 'desc',
                    valueType: 'text',
                    render: (item) => {
                      return (
                        <div className="desc">
                          <p>买方：{item?.toString().split('|')[0]}</p>
                          <p>卖方：{item?.toString().split('|')[1]}</p>
                        </div>
                      );
                    },
                  },
                  subTitle: {
                    render: () => {
                      return (
                        <Space size={0}>
                          <Tag color="blue">洽谈中</Tag>
                        </Space>
                      );
                    },
                  },
                }}
              />
            </div>
          </Col>
          <Col span={12}>
            <div className="achievement-wrap">
              <ProList<any>
                className="achievement-list"
                rowKey="name"
                toolBarRender={false}
                split
                dataSource={dataSource}
                showActions="hover"
                metas={{
                  title: {
                    dataIndex: 'name',
                  },
                  description: {
                    dataIndex: 'desc',
                    valueType: 'text',
                    render: (item) => {
                      return (
                        <div className="desc">
                          <p>买方：{item?.toString().split('|')[0]}</p>
                          <p>卖方：{item?.toString().split('|')[1]}</p>
                        </div>
                      );
                    },
                  },
                  subTitle: {
                    render: () => {
                      return (
                        <Space size={0}>
                          <Tag color="blue">洽谈中</Tag>
                        </Space>
                      );
                    },
                  },
                  extra: {
                    render: () => (
                      <div
                        style={{
                          maxWidth: 100,
                          flex: 1,
                          display: 'flex',
                          flexDirection: 'column',
                          // alignContent: 'flex-end',
                          justifyContent: 'flex-end',
                        }}
                      >
                        <DollarCircleTwoTone style={{ fontSize: 50 }} />
                        <div
                          style={{
                            textAlign: 'center',
                            fontSize: 15,
                            fontWeight: 600,
                          }}
                        >
                          估价出售
                        </div>
                      </div>
                    ),
                  },
                }}
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
