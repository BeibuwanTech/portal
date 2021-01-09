import React from 'react';
import './pool.less';

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
