import "./input.css";

function input({ placeholder }) {
  return (
    <div className="input_container">
      <input type="text" placeholder={placeholder} />
    </div>
  );
}

export default input;
