"use client";

import React, { useEffect, useRef } from "react";
import {
  faBell,
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-regular-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ToastElement = ({ color, icon, header, children }) => {
  const ref = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      ref.current?.style.setProperty("opacity", "0");
      setTimeout(() => ref.current?.remove(), 200);
    }, 5000);
  });

  return (
    <div
      className=" overflow-hidden toast-element shadow-sm bg-white rounded-md w-full border border-slate-100"
      ref={ref}
    >
      <div className="flex justify-between w-full px-3 py-1 bg-black/5">
        <div>
          <span>
            <FontAwesomeIcon color={color} icon={icon} />
          </span>
          <span>{header}</span>
        </div>
        <div>
          <span
            className="cursor-pointer"
            onClick={() => ref.current?.style.setProperty("display", "none")}
          >
            <FontAwesomeIcon icon={faTimes} />
          </span>
        </div>
      </div>
      <div className="px-3 py-2">
        <p>{children}</p>
      </div>
    </div>
  );
};

export default function ToastComponent({ toastList }) {
  return (
    <>
      {toastList &&
        toastList.map((toast, i) => {
          const toastConfig = {
            success: {
              color: "#33b249",
              icon: faCheckCircle,
              text: "Correcto",
            },
            warning: {
              color: "#ffbd03",
              icon: faBell,
              text: "Alerta",
            },
            error: {
              color: "#ED0800",
              icon: faTimesCircle,
              text: "Error",
            },
          };

          const { color, icon, text } = toastConfig[toast.type];
          return (
            <ToastElement color={color} header={text} icon={icon}>
              {toast.message}
            </ToastElement>
          );
        })}
    </>
  );
}
