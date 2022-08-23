import "./Input.css";

type InputProps = {
  id?: string;
  type: string;
  icon?: React.ReactNode;
  placeholder?: string;
  value: string | number;
  required?: boolean;
  onValueChange: (value: any) => void;
};

export const Input = ({
  id,
  type = "text",
  icon,
  placeholder,
  value,
  required = false,
  onValueChange,
}: InputProps) => {
  return (
    <div className="input-wrapper" id={id}>
      <div className="input-container">
        <i>{icon}</i>
        <input
          type={type}
          className="input"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onValueChange(e)}
          required={required}
        />
      </div>
    </div>
  );
};
