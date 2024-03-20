import React from 'react';
import { FaInstagram, FaTwitter, FaGithub, FaLinkedin, FaKaggle} from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import X from "../img/sns_icon/x.svg"
const INSTA_URL = "https://www.instagram.com/yaa_seeee/";
const TWITTER_URL = "https://twitter.com/yaa_seeee";
const LINKDIN_URL = "https://www.linkedin.com/in/%E5%BE%81%E4%B9%9F-%E6%9D%BE%E7%94%B0-15785320b/";
const KAGGLE_URL = "https://www.kaggle.com/yaaseeee";

const RedirectIcon = ({ icon: Icon, url }: { icon: React.ElementType; url: string }) => {
  const handleClick = () => window.location.href = url;

  // Here, e is explicitly typed as React.KeyboardEvent
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  return (
    <Icon onClick={handleClick} style={{ 
      cursor: 'pointer', 
      fontSize: '20px', // アイコンのサイズを64pxに設定
      margin: '10px', // アイコンの間に20pxの間隔を設定
    }} 
    aria-label="Redirect button" tabIndex={0} onKeyDown={handleKeyDown} />
  );
};

const SnsList: React.FC = () => {
  return (
    <>
      <RedirectIcon icon={FaInstagram} url={INSTA_URL} />
      <RedirectIcon icon={FaGithub} url={TWITTER_URL} />
      <RedirectIcon icon={FaLinkedin} url={LINKDIN_URL} />
      <RedirectIcon icon={FaKaggle} url={KAGGLE_URL} />
    </>
  );
};

export default SnsList;