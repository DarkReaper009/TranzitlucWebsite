import Input from './Input';

const RequestOffer = () => {
  type InputType = {
    placeholder: string;
    value: string;
  };

  const inputs: InputType[] = [
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
      placeholder: 'Numar de telefon',
    },
    {
      value: 'asdf',
      placeholder: 'Email',
    },
  ];

  return (
    <div className="w-[36.25rem] min-[1360px]:h-[52.25rem] flex flex-col gap-[1.85rem]">
      <p className="text-h3 sm:text-h2 font-h2 text-db1">SOLICITĂ O OFERTĂ</p>
      <div className="flex flex-col h-[46.5rem] w-full bg-db1 px-[2.6rem] py-[2.1rem] sm:py-[2.5rem] rounded-[0.75rem] min-[1360px]:rounded-tl-none min-[1360px]:rounded-bl-none gap-[2.1rem]">
        {inputs.map(({ placeholder, value }, index) => {
          return <Input key={index} value={value} placeholder={placeholder} />;
        })}
        <textarea
          // className="w-full h-[4.37rem] bg-white rounded-2xl pl-6 text-2xl text-db1 font-roboto font-bold  hover:outline-4 hover:outline-[#466AFF]/50 focus:outline-4 focus:outline-[#466AFF]/80 placeholder:text-[#8C8D8D] placeholder:text-2xl placeholder:font-roboto placeholder:font-bold"
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
  );
};

export default RequestOffer;
