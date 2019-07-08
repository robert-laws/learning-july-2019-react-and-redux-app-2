import React from 'react';
import '../styles/Header.css';

const Header = (props) => {
  return(
    <div className="app-header">
      <h1>{props.title}</h1>
    </div>
  )
}

Header.defaultProps = {
  title: "App # 2"
}

export default Header;