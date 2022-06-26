import React from "react";

import style from'./index.module.scss'

const IButton: React.FC = React.memo(() => {
  return <div className={style.container}>
    <a href="#" style={{color:"#1e9bff"}}><span>Button</span><i></i></a>
  </div>;
});

export default IButton;