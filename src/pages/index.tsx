import React from 'react';
import { BellFilled } from '@ant-design/icons';
import Header from '@/pages/common/header';
import Menu from '@/pages/common/menu';
import Footer from '@/pages/common/footer';
import Home from '@/pages/home'

export default () => {
  return (
    <>
      <Header></Header>
      <Menu></Menu>
      <Home></Home>
      <Footer></Footer>
    </>
  );
};
