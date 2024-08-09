import React, { ChangeEvent } from "react";

interface InputFieldProps {
  label: string;
  value: number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  prefix?: string;
  suffix?: string;
  readonly?: boolean;
}

export const InputField: React.FC<InputFieldProps> = ({ label, value, onChange, prefix, suffix, readonly }) => {
  return (
    <div className="input-field">
      <label>{label}</label>
      <div className="input-group">
        {prefix && <span className="input-group-text">{prefix}</span>}
        <input type="number" value={value} onChange={onChange} className="form-control" readOnly={readonly} />
        {suffix && <span className="input-group-text">{suffix}</span>}
      </div>
    </div>
  );
}