import logo from '../assets/Images/main_logo.svg';
import footer_line from '../assets/Images/footer_line.svg';
import phone from '../assets/Icons/contact_phone.svg';
import email from '../assets/Icons/email.svg';
import homelocation from '../assets/Icons/home-location.svg';
const Footer = () => {
  return (
    <div className="flex flex-col items-center min-h-[29rem] w-full bg-db2">
      <div className="bg-db2 w-full max-w-[1854px] mx-auto min-h-[29.35rem] text-white flex flex-col px-[2rem] sm:px-[4rem] lg:px-[6rem] py-16 z-10 gap-[2.70rem] ">
        <div className="flex flex-row flex-wrap gap-[5rem] xl:gap-[7.6rem]  justify-between ">
          <div className="flex flex-col  w-[26.5rem] justify-end">
            <img src={logo} alt="" className="w-[25.06rem] h-[8.6rem]" />
            <p className="text-b1 font-b1 ">
              Ne-am înființat compania în 2008. Suntem o afacere de familie din
              România. <br /> Oferim servicii de transport în sud-estul
              României.
            </p>
          </div>
          <div className="flex flex-row flex-wrap gap-[4.5rem] items-end ">

            <div className="flex flex-col gap-4 h-[11.6rem] max-w-[26.5rem]">
              <p className="text-h5 font-grotesc-bold leading-[130%]">
                CONTACT
              </p>
              <div className="flex flex-col w-[25.6rem] gap-2">
                <div className="flex flex-row h-[2.5rem] w-[26.5rem] gap-5 items-center">
                  <img src={phone} alt="" />
                  <p className="font-grotesc-bold text-2xl leading-[130%] tracking-h1">
                    0726343115
                  </p>
                </div>
                <div className="flex flex-row h-[2.5rem] w-[26.5rem] gap-5 items-center">
                  <img src={email} alt="" />
                  <p className="font-grotesc-bold text-2xl leading-[130%] tracking-h1">
                    tranzitluc@gmail.com
                  </p>
                </div>
                <div className="flex flex-row h-[2.5rem] w-[26.5rem] gap-5 items-center">
                  <img src={homelocation} alt="" />
                  <p className="font-grotesc-bold text-[1.4rem] sm:text-2xl leading-[130%] tracking-h1 w-[27rem]">
                    STR. ROCADEI 77, CĂLĂRAȘI
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src={footer_line} alt="" className="w-full h-0.5" />
        <div className="flex w-full ">
          <p className="text-sh1 font-semibold font-sh1">
            COPYRIGHT © {new Date().getFullYear()} TRANZITLUC
          </p>
        </div>
      </div>
    </div>
  );
};
// to do de realizate Footerul aplicatiei

export default Footer;
