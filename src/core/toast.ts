import React from "react";
import { dispatch, genKey, toasts } from "./store";
import { ToastStatus, ToastType } from "./type";

const createToast = (type: ToastType, message: React.ReactNode) => {
  toasts.push({
    status: ToastStatus.Enter,
    key: genKey(),
    message,
    height: -1,
    type
  });
  dispatch(toasts);
};

export const toast = (message: React.ReactNode) => {
  createToast('info', message);
};

toast.success = (message: React.ReactNode) => {
  return createToast('success', message);
}

toast.error = (message: React.ReactNode) => {
  return createToast('error', message);
}
