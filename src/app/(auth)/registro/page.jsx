'use client';
import InputGroup from "@/components/form/inputGroup";
import { useRef, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faDotCircle, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { Toast } from "@/components/providers/toastProvider";

export default function LoginPage() {
  const [data, setData] = useState({})
  const [errors, setErrors] = useState({});
  const passwordPatterRed = useRef(null)

  const router = useRouter()

  const validateForm = () => {
    const regexp = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{8,16}$/);
    const newErrors = {};
    if (!data.user_email) {
      newErrors.user_email = "El campo de usuario es obligatorio.";
    }
    if (!data.user_name) {
      newErrors.user_name = "El campo de nombre es obligatorio.";
    }
    if (!data.user_password) {
      newErrors.user_password = "El campo de contraseña es obligatorio.";
    }
    if (!regexp.test(data.user_password)) {
      newErrors.user_password = "La contraseña debe coincidir el patron.";
    }
    if (data.user_password !== data.user_password_repeat) {
      newErrors.user_password_repeat = "Las contraseñas no coinciden.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita que la página se recargue al enviar el formulario
    if (validateForm()) {
      await fetch('/api/user',{
        method:"POST",
        body:JSON.stringify(data)
      }) 

      // Restablece el estado del formulario después de enviarlo, si es necesario
      setData({});


      Toast.success("Registro completo")

      router.push("/ingreso")
    }
  }

  const handleChange = (e) => {
    // Actualiza el estado del formulario cuando los campos cambian
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <div className="w-[500px] shadow-md bg-white rounded-md px-20 py-16 mx-auto">
        <form onSubmit={handleSubmit}>
          <p className="text-center mb-4">Accede a tu cuenta</p>
          <div className="flex flex-col gap-4 mb-4">
            <InputGroup name={"user_email"} label={"usuario"} onInputChangeHandler={handleChange}/>
            {errors.user_email && (
              <p className="text-red-500">{errors.user_email}</p>
            )}
            <InputGroup name={"user_name"} label={"nombre"}  onInputChangeHandler={handleChange} />
            {errors.user_name && (
              <p className="text-red-500">{errors.user_name}</p>
            )}
            <div className="relative">
              <span className="absolute top-0 right-0 text-slate-600 cursor-pointer">
                <FontAwesomeIcon icon={faInfoCircle} />
              </span>
              <div className="absolute !hidden bottom-full right-0 -mt-6 bg-white shadow-md rounded-md flex flex-col gap-2 px-4 py-2" ref={passwordPatterRed}>
                <p>Por favor siga este patron para poder crear su contraseña</p>
                <p className="text-xs"><FontAwesomeIcon width={10} icon={faCaretRight} /> <span>No debe contener espacios</span></p>
                <p className="text-xs"><FontAwesomeIcon width={10} icon={faCaretRight} /> <span>Debe tener entre 8 y 16 caracteres</span></p>
                <p className="text-xs"><FontAwesomeIcon width={10} icon={faCaretRight} /> <span>Debe tener al menos un numero</span></p>
                <p className="text-xs"><FontAwesomeIcon width={10} icon={faCaretRight} /> <span>Debe tener al menos una letra</span></p>
                <p className="text-xs"><FontAwesomeIcon width={10} icon={faCaretRight} /> <span>Debe tener al menos una letra mayuscula</span></p>
              </div>
              <InputGroup name={"user_password"} type={"password"} label={"contraseña"} onInputChangeHandler={handleChange} onFocus={() => {
                passwordPatterRed.current.classList.remove("!hidden")
              }} onBlurInput={() => {
                passwordPatterRed.current.classList.add("!hidden")
              }}/>
              {errors.user_password && (
                <p className="text-red-500">{errors.user_password}</p>
              )}
            </div>
            <InputGroup label={"repetir contraseña"} type={"password"} name={"user_password_repeat"} onInputChangeHandler={handleChange}/>
            {errors.user_password_repeat && (
              <p className="text-red-500">{errors.user_password_repeat}</p>
            )}
            <InputGroup
              name={"user_level"}
              type={"select"}
              options={[{name:"kouhai",value:"kouhai"},{name:"minarai", value:"minarai"} ,{name:"senpai",value:"senpai"} ]}
              label={"nivel de experticia"}
              onInputChangeHandler={handleChange}
            />

          </div>
          <div>
            <button
              className="px-8 py-1 bg-blue-500 text-white rounded-md mb-4"
              type="submit"
            >
              Acceder
            </button>
          </div>
          <div className="text-slate-400">
            <p>
              Ya tienes cuenta?{" "}
              <Link href={"/ingreso"} className="text-blue-500">
                Acceder
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
