import star from '../assets/Icons/star.svg';

const GetQuote = () => {
  return (
    <div className="flex flex-col items-center h-[66.5rem] w-full  bg-gr1">
      <div className="flex flex-row items-center bg-amber-200 h-[66.5rem] w-full  px-[9rem] py-[6.9rem]  gap-16 max-w-[1854px] mx-auto">
        <div className="flex flex-row w-full h-full bg-amber-950 items-center justify-center">
          <div className="w-[36.25rem] h-[52.25rem] flex flex-col gap-[1.85rem] ">
            <p>CE NE DIFERENȚIAZĂ</p>
            <div className="flex flex-col h-[46.5rem] w-full bg-white px-[2.6rem] py-[2.5rem] gap-[5.62rem] rounded-tl-[0.75rem] rounded-bl-[0.75rem]">
              <div className="flex flex-row gap-2.5 w-full h-14 items-center ">
                <img src={star} alt="" />
                <p>PESTE 15 ANI DE EXPERIENTA</p>
              </div>

              <div className="flex flex-row gap-2.5 w-full h-14 items-center">
                <img src={star} alt="" />
                <p>SERVICII PERSONALIZATE PENTRU FIECARE CLIENT </p>
              </div>

              <div className="flex flex-row gap-2.5 w-full h-14 items-center">
                <img src={star} alt="" />
                <p>DISPONIBILI CLIENȚILOR NOȘTRI 24 / 7</p>
              </div>

              <div className="flex flex-row gap-2.5 w-full h-14 items-center">
                <img src={star} alt="" />
                <p>OPTIMIZAREA RUTELOR ȘI REDUCEREA COSTURILOR CLIENȚILOR</p>
              </div>
            </div>
          </div>
          <div className="w-[36.25rem] h-[52.25rem] flex flex-col gap-[1.85rem]">
            <p>SOLICITĂ O OFERTĂ</p>
            <div className="flex flex-col h-[46.5rem] w-full bg-db1 px-[2.6rem] py-[2.5rem] rounded-tr-[0.75rem] rounded-br-[0.75rem] gap-[2rem]">
              <input
                type="text"
                className="w-full h-[4.37rem] bg-white rounded-2xl pl-6"
                placeholder="Oras de plecare"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GetQuote;
