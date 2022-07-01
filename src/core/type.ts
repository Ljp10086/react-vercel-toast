import React from "react";

export type ToastType = 'success' | 'error';
export enum ToastStatus {
  Enter,
  Leave,
}
export interface State {
  height: number;
  status: ToastStatus;
  message: string | React.ReactNode;
  type: ToastType;
  key: number;
};
