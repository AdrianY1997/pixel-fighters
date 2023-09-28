"use client";

function typeText(name, placeholder, onInputChangeHandler, onBlurInput) {
  return (
    <input
      className="bg-[whitesmoke] shadow-inner rounded-md px-2 py-1"
      type="text"
      name={name}
      onChange={(e) => onInputChangeHandler(e)}
      onBlur={onBlurInput}
      placeholder={placeholder}
    />
  );
}

function typeSelect({ options, name, onInputChangeHandler }) {
  return (
    <>
      <select
        className="shadow-md px-2 py-1 border border-slate-200 rounded-md"
        name={name}
        onChange={onInputChangeHandler}
      >
        <option selected disabled value="">
          Seleccione una opción...
        </option>
        {options ? (
          options.map((e, i) => {
            return (
              <option key={i} value={e.value}>
                {e.name}
              </option>
            );
          })
        ) : (
          <></>
        )}
      </select>
    </>
  );
}

function textareaType({ name, onInputChangeHandler, onBlurInput }) {
  return (
    <>
      <textarea
        name={name}
        cols="30"
        rows="10"
        onChange={onInputChangeHandler}
        onBlur={onBlurInput}
        className="bg-[whitesmoke] shadow-inner rounded-md px-2 py-1"
      ></textarea>
    </>
  );
}

export default function InputGroup({
  name,
  label,
  type,
  options,
  onInputChangeHandler,
  placeholder,
  onBlurInput
}) {
  const inputTypes = {
    text: () => typeText(name, placeholder, onInputChangeHandler, onBlurInput),
    select: () => typeSelect({ options, name, onInputChangeHandler }),
    textarea: () => textareaType({ name, onInputChangeHandler, onBlurInput }),
  };

  const input = inputTypes[type ? type : "text"]();

  return (
    <>
      <div className="flex flex-col">
        {label && (
          <label htmlFor="user" className="text-slate-400">
            {label[0].toUpperCase() + label.slice(1)}
          </label>
        )}
        {input}
      </div>
    </>
  );
}
