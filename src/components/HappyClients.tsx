// import React from "react"
// import ReactDOM from "react-dom/client"
import './HappyClients.css';
import sofidel from '../assets/Images/sofidel_logo.svg';
import stepone from '../assets/Images/stepone_logo.svg';
import petstar from '../assets/Images/petstar_logo.svg';
import elis from '../assets/Images/elis_logo.svg';

const HappyClients = () => {
  return (
    <div className="bg-b2 py-7  w-[100vw] h-[15.5rem] text-white flex flex-col items-center px-[9rem] sticky top-0 left-0 z-10">
      <p className="text-sh2 text-white font-sh2 tracking-[2px]">
        CLIENTI MULTUMITI
      </p>
      <div className="w-full overflow-x-auto h-40 flex items-center  ">
        <ul
          //   style={{ listStyle: 'none' }}
          className="flex flex-nowrap gap-7 overflow-x-auto scrollbar-hide h-40 items-center list-none"
        >
          <li className="min-w-[18.3rem]">
            <img className="w-[18.3rem] h-20" src={sofidel} alt="" />
          </li>
          <li className="min-w-[18.3rem]">
            <img className="w-[18.3rem] h-20" src={stepone} alt="" />
          </li>
          <li className="min-w-[18.3rem]">
            <img className="w-[18.3rem] h-20" src={petstar} alt="" />
          </li>
          <li className="min-w-[18.3rem]">
            <img className="w-[18.3rem] h-20" src={elis} alt="" />
          </li>
          <li className="min-w-[18.3rem]">
            <img className="w-[18.3rem] h-20" src={elis} alt="" />
          </li>
          <li className="min-w-[18.3rem]">
            <img className="w-[18.3rem] h-20" src={petstar} alt="" />
          </li>
          <li className="min-w-[18.3rem]">
            <img className="w-[18.3rem] h-20" src={petstar} alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
};
// to do de realizate HappyClientsul aplicatiei

export default HappyClients;
