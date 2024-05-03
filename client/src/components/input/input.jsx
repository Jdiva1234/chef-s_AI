import './input.css';

function input({ placeholder, value, onChange }) {
  return (
    <div className="input_container">
      <input
        type="text"
        size={50}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default input;
