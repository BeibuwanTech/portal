import React from 'react';
import Header from '@/pages/common/header';
import Menu from '@/pages/common/menu';
import Footer from '@/pages/common/footer';
import Home from '@/pages/home';

export default () => {
  return (
    <>
      <Header
        title="北部湾城市群综合科技服务平台"
        subtitle="国家重点研发计划支持项目"
        info="活动中心"
      ></Header>
      <Menu></Menu>Í<Home></Home>
      <Footer></Footer>
    </>
  );
};
