interface InputTextProps {
  value: string | number;
  nameLabel: string;
  idInput: string;
  type: string;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputText: React.FC<InputTextProps> = ({
  value,
  nameLabel,
  idInput,
  onInputChange,
  type,
}: any) => {
  return (
    <div>
      <label htmlFor={idInput}>{nameLabel}</label>
      <input
        type={type}
        className="register-page__form__input"
        name={idInput}
        id={idInput}
        value={value === 0 ? undefined : value}
        onChange={onInputChange}
      />
    </div>
  );
};
