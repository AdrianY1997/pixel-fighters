"use client";

import React, { useEffect } from "react";
import { useState } from "react";
import EventEmitter from "events";
import ToastComponent from "../dashboard/ui/toast";

export const toastEmitter = new EventEmitter();

export const Toast = {
  success: (message) =>
    toastEmitter.emit("toast", { type: "success", message }),
  warning: (message) =>
    toastEmitter.emit("toast", { type: "warning", message }),
  error: (message) => toastEmitter.emit("toast", { type: "error", message }),
};

export function ToastProvider() {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    // Escuchar el evento 'toast'
    const listener = (toasts) => {
      setToasts((prevToasts) => [...prevToasts, toasts]);
    };
    toastEmitter.on("toast", listener);

    // Limpiar el listener cuando el componente se desmonte
    return () => {
      toastEmitter.off("toast", listener);
    };
  }, []);

  return (
    <>
      <div className="toast-container fixed bottom-0 right-0 m-4 w-[300px] flex flex-col gap-2">
        <ToastComponent toastList={toasts} />
      </div>
    </>
  );
}
