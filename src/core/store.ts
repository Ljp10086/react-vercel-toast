import { useEffect, useState } from "react";
import { State } from "./type";

let key = 0;

export const listeners: Array<(state: State[]) => void> = [];
export const toasts: State[] = [];

export const genKey = () => ++key;

export const dispatch = (state: State[]) => {
  listeners.forEach(fn => fn([...state]));
}

const updateHeight = (key: number, h: number) => {
  const index = toasts.findIndex(toast => toast.key === key);
  toasts[index].height = h;
  dispatch([...toasts]);
}

const removeToast = (key: number) => {
  // const index = toasts.findIndex(toast => toast.key === key);
  // toasts[index].status = ToastStatus.Leave;
  // dispatch([...toasts]);
  // setTimeout(() => {
  const index = toasts.findIndex(toast => toast.key === key);
  toasts.splice(index, 1);
  dispatch([...toasts]);  
  // }, defaultOptions.dismiss);
}

export const useToast = () => {
  const [state, setState] = useState<State[]>([]);
  useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      index !== -1 && listeners.splice(index, 1);
    }
  }, [state])
  const handles: {[key: string]: Function} = {};
  handles.removeToast = removeToast;
  handles.updateHeight = updateHeight;
  return {state, handles}
}
