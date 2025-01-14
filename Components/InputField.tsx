import React, { ChangeEvent } from "react";

interface InputFieldProps {
  label: string;
  value: number;
  forId: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  prefix?: string;
  suffix?: string;
  readonly?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ label, value, onChange, prefix, suffix, readonly, forId }) => {
  return (
    <div className="input-field">
      <label htmlFor={forId}>{label}</label>
      <div className="input-group">
        {prefix && <span className="input-group-text">{prefix}</span>}
        <input type="number" value={value} onChange={onChange} className="form-control" readOnly={readonly} id={forId} />
        {suffix && <span className="input-group-text">{suffix}</span>}
      </div>
    </div>
  );
}

export default React.memo(InputField);