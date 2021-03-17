import React from 'react';
// import cloudbase from '@cloudbase/js-sdk';
import './pool.less';

// const app = cloudbase.init({
//   env: 'resource-pool-2g92x6b34588bb7d',
// });
// const auth = app.auth({
//   persistence: 'none',
// });
// auth.signInWithUsernameAndPassword('beibuwan', 'beibuwan@2020').then(() => {
//   console.log('用户名密码登录成功'); // 用户名密码登录成功
//   const filter = {};
//   const db = app.database();
//   const RegExp_filter = {
//     Applicant: db.RegExp({
//       regexp: '海南现代科技集团有限公司', // 正则表达式为 /^\ds/，转义后变成 '^\\ds'
//       options: 'ig', // i表示忽略大小写
//     }),
//   };
//   const collection = db.collection('Brand');
//   collection.count().then((res) => {
//     console.log(res);
//   });
// });

export default () => {
  return (
    <div className="pool-wrap">
      <div className="title-wrap">
        <div className="title">科技服务资源池</div>
        <span>
          —— 构建研究开发、知识产权、检验认证、创业孵化、科技金融五大资源池 ——
        </span>
      </div>
      <div className="entry-wrap-row">
        <div className="entry-wrap-col">
          <div className="entry first">
            <div className="title">研究开发</div>
            <div className="content">
              <p>收录最新成果</p>
              <p>
                <b>39.8万</b> 项
              </p>
            </div>
          </div>
        </div>
        <div className="entry-wrap-col">
          <div className="entry second">
            <div className="title">知识产权</div>
            <div className="content">
              <p>收录最新成果</p>
              <p>
                <b>39.8万</b> 项
              </p>
            </div>
          </div>
        </div>
        <div className="entry-wrap-col">
          <div className="entry third">
            <div className="title">检验认证</div>
            <div className="content">
              <p>检验认证服务</p>
              <p>
                <b>212.8万</b> 次
              </p>
            </div>
          </div>
        </div>
        <div className="entry-wrap-col">
          <div className="entry forth">
            <div className="title">创业孵化</div>
            <div className="content">
              <p>收录最新成果</p>
              <p>
                <b>39.8万</b> 项
              </p>
            </div>
          </div>
        </div>
        <div className="entry-wrap-col">
          <div className="entry fifth">
            <div className="title">科技金融</div>
            <div className="content">
              <p>收录最新成果</p>
              <p>
                <b>39.8万</b> 项
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
