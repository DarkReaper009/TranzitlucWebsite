import { useState, type ChangeEvent, type FormEvent } from 'react';
import KineticText from '../KineticText';
import Input from './Input';
import { cities } from '../../constants/cities';

interface FieldData {
  value: string;
  placeholder: string;
  type: string;
}

interface FormState {
  departure_city: FieldData;
  destination_city: FieldData;
  total_weight: FieldData;
  phone: FieldData;
  email: FieldData;
  message: string;
}

// Explicitly define the fields to render (excluding 'message')
const INPUT_FIELDS: (keyof Omit<FormState, 'message'>)[] = [
  'departure_city',
  'destination_city',
  'total_weight',
  'phone',
  'email',
];

const validateEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const validatePhone = (phone: string) => {
  // Only allow digits, +, -, and spaces
  const hasValidChars = /^[\d+\-\s]+$/.test(phone);
  // Count actual digits to ensure length is correct (standard 10-15)
  const digitCount = phone.replace(/\D/g, '').length;
  return hasValidChars && digitCount >= 10 && digitCount <= 15;
};

const validateField = (
  key: keyof FormState,
  value: string
): string | undefined => {
  if (!value.trim() && key !== 'message') {
    return 'Acest câmp este obligatoriu';
  }

  if (key === 'email' && !validateEmail(value)) {
    return 'Adresa de email este invalidă';
  }

  if (key === 'phone' && !validatePhone(value)) {
    return 'Numărul de telefon este invalid';
  }

  if (
    (key === 'departure_city' || key === 'destination_city') &&
    !cities.includes(value)
  ) {
    return 'Selectați un oraș din listă';
  }

  if (key === 'total_weight') {
    const num = parseFloat(value.replace(' t', ''));
    if (isNaN(num) || num <= 0) {
      return 'Greutate invalidă';
    }
  }

  return undefined;
};

const RequestOffer = () => {
  const [formData, setFormData] = useState<FormState>({
    departure_city: {
      value: '',
      placeholder: 'Oraș de plecare',
      type: 'text',
    },
    destination_city: {
      value: '',
      placeholder: 'Oraș destinație',
      type: 'text',
    },
    total_weight: {
      value: '',
      placeholder: 'Greutate totală (tone)',
      type: 'number',
    },
    phone: {
      value: '',
      placeholder: 'Număr de telefon',
      type: 'tel',
    },
    email: {
      value: '',
      placeholder: 'Adresa de email',
      type: 'email',
    },
    message: '',
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof FormState, string>>
  >({});
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isFormValid = INPUT_FIELDS.every((key) => {
    const field = formData[key];
    const value = typeof field === 'string' ? field : field.value;
    return !validateField(key, value);
  });

  const handleInputChange = (key: keyof FormState, newValue: string) => {
    setFormData((prev) => ({
      ...prev,
      [key]:
        typeof prev[key] === 'string'
          ? newValue
          : { ...(prev[key] as FieldData), value: newValue },
    }));

    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    }
  };

  const handleWeightChange = (delta: number) => {
    const newVal = Math.max(
      0,
      (parseFloat(formData.total_weight.value.replace(' t', '')) || 0) + delta
    );
    handleInputChange('total_weight', `${newVal} t`);
  };

  const handleWeightFocus = () => {
    const val = formData.total_weight.value.replace(' t', '');
    handleInputChange('total_weight', val);
  };

  const handleBlur = (key: keyof FormState) => {
    const field = formData[key];
    let value = typeof field === 'string' ? field : field.value;

    if (key === 'total_weight') {
      const numericVal = parseFloat(value.replace(' t', ''));
      if (value && !value.includes(' t') && !isNaN(numericVal)) {
        value = `${numericVal} t`;
        handleInputChange('total_weight', value);
      }
    }

    const error = validateField(key, value);
    setErrors((prev) => ({ ...prev, [key]: error }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const newErrors: Partial<Record<keyof FormState, string>> = {};
    let isValid = true;

    INPUT_FIELDS.forEach((key) => {
      const field = formData[key];
      const value = typeof field === 'string' ? field : field.value;
      const error = validateField(key, value);
      if (error) {
        newErrors[key] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);

    if (isValid) {
      setIsSubmitting(true);
      const submissionData = {
        departure_city: formData.departure_city.value,
        destination_city: formData.destination_city.value,
        total_weight: formData.total_weight.value,
        phone: formData.phone.value,
        email: formData.email.value,
        message: formData.message,
      };

      try {
        const response = await fetch('https://api.tranzitluc.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(submissionData),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        console.log('Form Submitted:', submissionData);

        // Reset form
        setFormData({
          departure_city: {
            value: '',
            placeholder: 'Oraș de plecare',
            type: 'text',
          },
          destination_city: {
            value: '',
            placeholder: 'Oraș destinație',
            type: 'text',
          },
          total_weight: {
            value: '',
            placeholder: 'Greutate totală (tone)',
            type: 'number',
          },
          phone: {
            value: '',
            placeholder: 'Număr de telefon',
            type: 'tel',
          },
          email: {
            value: '',
            placeholder: 'Adresa de email',
            type: 'email',
          },
          message: '',
        });

        setShowSuccessPopup(true);
      } catch (error) {
        console.error('Error submitting form:', error);
        // Optionally handle error state here
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="w-full max-w-[36rem] flex flex-col gap-[1.5rem]">
      {showSuccessPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-[1.5rem] p-8 max-w-md w-full flex flex-col items-center gap-6 shadow-2xl animate-in fade-in zoom-in duration-300">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 6L9 17L4 12"
                  stroke="#22c55e"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-bold font-roboto text-db1">
                Mesaj Trimis!
              </h3>
              <p className="text-gray-600 font-roboto text-lg">
                Cererea ta de ofertă a fost trimisă cu succes. Te vom contacta
                în cel mai scurt timp posibil.
              </p>
            </div>
            <button
              onClick={() => setShowSuccessPopup(false)}
              className="w-full py-3 bg-bl2 text-white rounded-xl font-bold font-roboto hover:bg-[#466AFF] transition-colors"
            >
              Închide
            </button>
          </div>
        </div>
      )}

      <KineticText tag="p" className="text-3xl sm:text-4xl font-h2 text-db1 ">
        SOLICITĂ O OFERTĂ
      </KineticText>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col flex-1 w-full bg-db1 px-[2rem] sm:px-[2.5rem] py-[2rem] sm:py-[2.5rem] rounded-[0.75rem] min-[1360px]:rounded-tl-none min-[1360px]:rounded-bl-none gap-[1.5rem]"
      >
        {INPUT_FIELDS.map((key) => {
          const field = formData[key];
          const isCityField =
            key === 'departure_city' || key === 'destination_city';
          const isWeightField = key === 'total_weight';

          return (
            <Input
              key={key}
              type={field.type}
              placeholder={field.placeholder}
              value={field.value}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleInputChange(key, e.target.value)
              }
              error={!!errors[key]}
              errorMessage={errors[key]}
              suggestions={isCityField ? cities : undefined}
              onSelectSuggestion={
                isCityField ? (val) => handleInputChange(key, val) : undefined
              }
              onIncrement={
                isWeightField ? () => handleWeightChange(1) : undefined
              }
              onDecrement={
                isWeightField ? () => handleWeightChange(-1) : undefined
              }
              onFocus={isWeightField ? handleWeightFocus : undefined}
              onBlur={() => handleBlur(key)}
            />
          );
        })}

        <textarea
          className="w-full h-[7.5rem] bg-white rounded-xl pl-5 py-[1rem] text-xl text-db1 font-roboto font-bold placeholder:text-[#8C8D8D] hover:outline-4 hover:outline-[#466AFF]/50 focus:outline-4 focus:outline-[#466AFF]/80"
          rows={4}
          placeholder="Mesaj"
          value={formData.message}
          onChange={(e) => handleInputChange('message', e.target.value)}
        />

        <button
          type="submit"
          disabled={!isFormValid || isSubmitting}
          className={`flex items-center justify-center h-[4rem] w-full rounded-[62.5rem] transition-all ${
            isFormValid && !isSubmitting
              ? 'bg-bl2 hover:outline-4 hover:outline-[#466AFF] cursor-pointer'
              : 'bg-[#466AFF]  opacity-70'
          }`}
        >
          <p className="text-white text-2xl font-roboto font-bold leading-[140%] ">
            {isSubmitting ? 'Se trimite...' : 'Trimite'}
          </p>
        </button>
      </form>
    </div>
  );
};

export default RequestOffer;
