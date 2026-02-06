import {
  useState,
  type ChangeEvent,
  type FocusEvent,
  useRef,
  useEffect,
} from 'react';

interface InputProps {
  placeholder: string;
  value: string;
  type?: string; // Optional: defaults to "text"
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name?: string; // Good practice for accessibility and form identification
  error?: boolean;
  errorMessage?: string;
  suggestions?: string[];
  onSelectSuggestion?: (suggestion: string) => void;
  onIncrement?: () => void;
  onDecrement?: () => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
}

const Input = ({
  value,
  placeholder,
  type = 'text',
  onChange,
  name,
  error,
  errorMessage,
  suggestions,
  onSelectSuggestion,
  onIncrement,
  onDecrement,
  onBlur,
  onFocus,
}: InputProps) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Close suggestions on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredSuggestions = suggestions
    ? suggestions.filter(
        (s) =>
          s.toLowerCase().startsWith(value.toLowerCase()) && value.length > 0
      )
    : [];

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    if (suggestions) setShowSuggestions(true);
    if (onFocus) onFocus(e);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e);
    if (suggestions) setShowSuggestions(true);
  };

  const handleSuggestionClick = (suggestion: string) => {
    if (onSelectSuggestion) {
      onSelectSuggestion(suggestion);
    }
    setShowSuggestions(false);
  };

  return (
    <div className="w-full relative flex flex-col gap-1" ref={wrapperRef}>
      <div className="relative w-full">
        <input
          name={name}
          // If custom spinners are used or it's 'number', we treat it as text to allow suffixes like " t"
          type={type === 'number' || onIncrement ? 'text' : type}
          value={value}
          onChange={handleChange}
          onBlur={onBlur}
          onFocus={handleFocus}
          className={`w-full h-[3.75rem] bg-white rounded-xl pl-5 text-xl text-db1 font-roboto font-bold 
            placeholder:text-[#8C8D8D] placeholder:text-xl placeholder:font-roboto placeholder:font-bold transition-all
            ${
              error
                ? 'border-2 border-[#FF0000] outline-none'
                : 'hover:outline-4 hover:outline-[#466AFF]/50 focus:outline-4 focus:outline-[#466AFF]/80 border-none'
            }
          `}
          placeholder={placeholder}
          autoComplete="off"
        />

        {/* Custom Spinners */}
        {(onIncrement || onDecrement) && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-1">
            <button
              type="button"
              onClick={onIncrement}
              className="w-6 h-3 flex items-center justify-center hover:bg-gray-100 rounded cursor-pointer"
            >
              {/* Up Arrow */}
              <svg
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 7L7 1L13 7"
                  stroke="#121d50"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              onClick={onDecrement}
              className="w-6 h-3 flex items-center justify-center hover:bg-gray-100 rounded cursor-pointer"
            >
              {/* Down Arrow */}
              <svg
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L13 1"
                  stroke="#121d50"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        )}

        {/* Suggestions Dropdown */}
        {showSuggestions && filteredSuggestions.length > 0 && (
          <ul className="absolute z-50 left-0 w-full bg-white border border-gray-200 rounded-xl mt-1 max-h-60 overflow-y-auto shadow-lg">
            {filteredSuggestions.map((suggestion, index) => (
              <li
                key={index}
                className="px-5 py-2 text-xl text-db1 font-roboto cursor-pointer hover:bg-gray-100"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Error Message */}
      {error && errorMessage && (
        <label className="text-[#FF0000] text-sm font-bold ml-2 font-roboto">
          {errorMessage}
        </label>
      )}
    </div>
  );
};

export default Input;
