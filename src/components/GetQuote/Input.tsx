type Input = {
  placeholder: string;
  value: string;
};
const Input = ({ value, placeholder }: Input) => {
  return (
    <input
      type="text"
      defaultValue={value}
      className="w-full h-[4.37rem] bg-white rounded-2xl pl-6 text-2xl text-db1 font-roboto font-bold  hover:outline-4 hover:outline-[#466AFF]/50 focus:outline-4 focus:outline-[#466AFF]/80 placeholder:text-[#8C8D8D] placeholder:text-2xl placeholder:font-roboto placeholder:font-bold"
      placeholder={placeholder}
    />
  );
};

export default Input;
