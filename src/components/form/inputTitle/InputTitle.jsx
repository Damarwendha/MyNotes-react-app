import { useState } from "react";

function InputTitle({ states }) {
  const [isMax, setIsMax] = useState(false);
  const onMax = () => {
    states.setTitle("");
    setIsMax(false);
  };

  return (
    <>
      <div className="inputs">
        <input
          value={states.title}
          onChange={(e) => states.title.length < 50
            ? states.setTitle(e.target.value)
            : setIsMax(true)}
          type="text"
          className="input-title"
          placeholder="Title"
        ></input>
        {states.title ? (
          <p className="tersisa">
            *tersisa {50 - states.title.length} karakter
          </p>
        ) : (
          ""
        )}
      </div>

      {isMax ? (
        <button onClick={onMax} className="onMax">
          Reset
        </button>
      ) : (
        ""
      )}
    </>
  );
}

export default InputTitle