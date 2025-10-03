// import React from "react"
// import ReactDOM from "react-dom/client"
import './Header.css';
import logo from '../assets/Images/main_logo.svg';

const Header = () => {
  return (
    <div
      className="bg-[#121D50]  w-[100vw] max-w-[1854px] mx-auto h-24 text-white flex flex-row px-[9rem]  z-10"
      //   style={{ position: '', width: '100%' }}
    >
      <div className="logo-container flex items-center  h-[100%] w-[50%]">
        <img src={logo} alt="error showing picture" className="h-24 w-2xs" />
      </div>
      <div className="navigation w-[50%] h-[100%] display flex justify-end items-center">
        <ul className="navigation w-[32rem] h-[100%] display flex flex-row items-center justify-evenly">
          <li>
            <p className="text-[14px] font-grotesc">ACASA</p>
          </li>
          <li>
            <p className="text-[14px] font-grotesc">DESPRE NOI</p>
          </li>
          <li>
            <p className="text-[14px] font-grotesc">SERVICII</p>
          </li>
          <li>
            <p className="text-[14px] font-grotesc">GET A QUOTE</p>
          </li>
          <li>
            <p className="text-[14px] font-grotesc">CONTACT</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
// to do de realizate headerul aplicatiei

export default Header;
