import star from '../assets/Icons/star.svg';
import Input from '../components/GetQuote/Input';
import Section from '../components/Section';

const GetQuote = () => {
  type Input = {
    placeholder: string;
    value: string;
  };

  const inputs: Input[] = [
    {
      value: 'asdf',
      placeholder: 'Oras de plecare',
    },
    {
      value: 'asdf',
      placeholder: 'Oras destinatie',
    },
    {
      value: 'asdf',
      placeholder: 'Greutate totala',
    },
    {
      value: 'asdf',
      placeholder: 'Email',
    },
  ];

  return (
    <Section
      id="get-a-quote"
      customPaddings="py-[6rem] px-[2rem] sm:px-[6rem] lg:px-[9rem]"
      customScroll="scroll-mt-4"
      className=" bg-gr1 "
    >
      {/* <div className="flex flex-row items-center   w-full max-w-[1854px] mx-auto"> */}
      <div className="flex flex-row flex-wrap gap-15 min-[1360px]:gap-0 w-full max-w-[1854px] mx-auto h-full items-center justify-center">
        <div className="w-[36.25rem] min-[1360px]:h-[52.25rem] flex flex-col gap-[1.85rem]">
          <p className="text-h3 sm:text-h2 font-h2 text-db1 ">
            CE NE DIFERENȚIAZĂ
          </p>
          <div className="flex flex-col h-[46.5rem] w-full bg-white px-[2rem] sm:px-[2.6rem] py-[2.1rem] sm:py-[2.5rem] gap-[5rem] sm:gap-[5.3rem] rounded-[0.75rem] min-[1360px]:rounded-tr-none min-[1360px]:rounded-br-none">
            <div className="flex flex-row gap-2.5 w-full h-[5.75rem] items-center ">
              <img src={star} alt="" className="w-[2.5rem] sm:w-[3.1rem]" />
              <p className="text-h5 sm:text-h4 font-h4 text-db1">
                PESTE 15 ANI DE EXPERIENTA
              </p>
            </div>

            <div className="flex flex-row gap-2.5 w-full h-[5.75rem] items-center">
              <img src={star} alt="" className="w-[2.5rem] sm:w-[3.1rem]" />
              <p className="text-h5 sm:text-h4 font-h4 text-db1">
                SERVICII PERSONALIZATE PENTRU FIECARE CLIENT{' '}
              </p>
            </div>

            <div className="flex flex-row gap-2.5 w-full h-[5.75rem] items-center">
              <img src={star} alt="" className="w-[2.5rem] sm:w-[3.1rem]" />
              <p className="text-h5 sm:text-h4 font-h4 text-db1">
                DISPONIBILI CLIENȚILOR NOȘTRI 24 / 7
              </p>
            </div>

            <div className="flex flex-row gap-2.5 w-full h-[7.8rem] items-center">
              <img src={star} alt="" className="w-[2.5rem] sm:w-[3.1rem]" />
              <p className="text-h5 sm:text-h4 font-h4 text-db1">
                OPTIMIZAREA RUTELOR ȘI REDUCEREA COSTURILOR CLIENȚILOR
              </p>
            </div>
          </div>
        </div>
        <div className="w-[36.25rem] min-[1360px]:h-[52.25rem] flex flex-col gap-[1.85rem]">
          <p className="text-h3 sm:text-h2 font-h2 text-db1">
            SOLICITĂ O OFERTĂ
          </p>
          <div className="flex flex-col h-[46.5rem] w-full bg-db1 px-[2.6rem] py-[2.1rem] sm:py-[2.5rem] rounded-[0.75rem] min-[1360px]:rounded-tl-none min-[1360px]:rounded-bl-none gap-[2.1rem]">
            {inputs.map(({ placeholder, value }) => {
              return <Input value={value} placeholder={placeholder} />;
            })}
            <textarea
              className="w-full h-[8.75rem] bg-white rounded-2xl pl-6 py-[1rem] text-2xl text-db1 font-roboto font-bold  placeholder:text-[#8C8D8D] placeholder:text-2xl placeholder:font-roboto placeholder:font-bold  hover:outline-4 hover:outline-[#466AFF]/50 focus:outline-4 focus:outline-[#466AFF]/80"
              rows={4}
              cols={50}
              placeholder="Mesaj"
            />
            <button
              title="asd"
              className=" flex items-center justify-center h-[4.3rem] w-full bg-bl2 rounded-[62.5rem] hover:outline-4 hover:outline-[#466AFF]"
              onClick={() => {
                console.log('asd');
              }}
            >
              <p className="text-white text-3xl font-roboto font-bold leading-[140%] ">
                Trimite
              </p>
            </button>
          </div>
        </div>
      </div>
      {/* </div> */}
    </Section>
  );
};
export default GetQuote;
