import React from "react";
import { useToast } from "../../core/store";
import Toast from "../Toast";
import './index.scss';

const isLast = (index: number, total: number) => index === total - 1;

const ToastWrapper = () => {
  const { state: toasts, handles } = useToast();
  const [latestHeight, setLatestHeight] = React.useState(0);
  const refs = React.useRef<(HTMLDivElement | null)[]>([]);
  return (
    <div className="toast-wrapper">
      {toasts.map((toast, i) => {
        return (<Toast
          handles={handles}
          ref={(ref) => {
            refs.current[i] = ref;
            let rect = ref?.getBoundingClientRect();
            if (i !== toasts.length - 1) {
              setTimeout(() => {
                const offset = refs.current
                  .slice(i + 1)
                  .reduce((num, r) => num += (r?.offsetHeight ?? 0), 0)
                ref?.style.setProperty('--offset-height', -offset + 'px');  
                ref?.style.setProperty('--index', `${toasts.length - i - 1}`);  
              }, 0);
            } else {
              ref?.style.setProperty('--offset-height', 0 + 'px');  
              ref?.style.setProperty('--index', `${toasts.length - i - 1}`);  
            }
            if (isLast(i, toasts.length)) {
              setLatestHeight(rect?.height ?? 0);
            }
          }}
          latestHeight={latestHeight}
          total={toasts.length - 1}
          key={toast.key} 
          state={toast} 
          index={i}>{toast.message}
        </Toast>)
      })}
    </div>
  )
}

export default ToastWrapper;
