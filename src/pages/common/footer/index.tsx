import React from 'react';
import './index.less';

const Footer: React.FC = () => {
  return (
    <div id="footer">
      <div className="footer-wrap">
        <div className="footer-contact">
          <div className="footer-contact-title">
            北部湾城市群综合科技服务平台由
            <a
              className="footer-link"
              href="https://ic.most.cn/"
              target="_blank"
            >
              海南大学信息与通信工程学院
            </a>
            建设运行并提供相关技术服务。
          </div>
        </div>
        <div className="footer-bottom">
          海南大学信息与通信工程学院 © 2021 | ICP 备案序号：琼ICP备912124109
        </div>
        <div className="footer-browser">
          建议您使用IE9及以上版本、Edge、Chrome、Firefox和360等主流浏览器浏览本网站。
        </div>
      </div>
    </div>
  );
};

export default Footer;
