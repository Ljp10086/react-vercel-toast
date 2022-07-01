import React from "react";
import { dispatch, genKey, toasts } from "./store";
import { ToastStatus, ToastType } from "./type";

const createToast = (type: ToastType, message: React.ReactNode) => ({
  status: ToastStatus.Enter,
  key: genKey(),
  message,
  height: -1,
  type
});

export const toast = (type: ToastType, message: React.ReactNode) => {
  const toast = createToast(type, message);
  toasts.push(toast);
  dispatch(toasts);
};

toast.success = (message: React.ReactNode) => {
  return toast('success', message);
}

toast.error = (message: React.ReactNode) => {
  return toast('error', message);
}
