import { useState } from "react";
import { InputTextProps } from "@/interface";
import './inputText.scss'

export const InputText: React.FC<InputTextProps> = ({
  value = '',
  nameLabel,
  idInput,
  onInputChange,
  type,
  validationRegex,
  alertMessage,
  autoComplete= "new-password",
  placeholder
}) => {
  const [haveError, setHaveError] = useState<boolean>(false)
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value: inputValue } = event.target;

    if (validationRegex && !validationRegex.test(inputValue)) {
      setHaveError(true)
    }else{
      setHaveError(false)
    }

    onInputChange(event);
  };

  return (
    <div className="inputText">
      <label htmlFor={idInput}>{nameLabel}</label>
      <input
        type={type}
        className={`inputText__input ${haveError ? '--error' : ''}`}
        name={idInput}
        id={idInput}
        value={value}
        onChange={handleChange}
        autoComplete={autoComplete}
        placeholder={placeholder}
      />
      {haveError &&
        <span className="inputText__message-error">{alertMessage}</span>
      }

    </div>
  );
};
