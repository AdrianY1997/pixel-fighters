"use client";

function typeText(name, placeholder, onInputChangeHandler) {
  return (
    <input
      className="bg-[whitesmoke] shadow-inner rounded-md px-2 py-1"
      type="text"
      name={name}
      onChange={(e) => onInputChangeHandler(e)}
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
        {options &&
          options.map((e, i) => {
            return (
              <option key={i} value={e}>
                {e}
              </option>
            );
          })}
      </select>
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
}) {
  const inputTypes = {
    text: () => typeText(name, placeholder, onInputChangeHandler),
    select: () => typeSelect({ options, name, onInputChangeHandler }),
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
