export default function InputField({ label, value, onChange, prefix, suffix }) {
  return (
    <div className="input-field">
      <label>{label}</label>
      <div className="input-group">
        {prefix && <span className="input-group-text">{prefix}</span>}
        <input type="number" value={value} onChange={onChange} className="form-control" />
        {suffix && <span className="input-group-text">{suffix}</span>}
      </div>
    </div>
  );
}