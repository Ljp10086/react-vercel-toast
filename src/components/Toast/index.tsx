import React, { forwardRef } from "react";
import './index.scss';
import classNames from 'classnames';
import { State } from "../../core/type";
import { defaultOptions } from "../../core/utils";

type NativeProps = React.HTMLAttributes<HTMLDivElement>;

interface ToastProps {
  latestHeight: number;
  total: number;
  children: React.ReactNode;
  index: number;
  state: State;
  handles: {[key: string]: Function};
}

const Toast: React.ForwardRefRenderFunction<HTMLDivElement, NativeProps & ToastProps> = (props, ref) => {
  const { style, children, handles, total, latestHeight, index, state, className, ...attrs } = props;
  const toastRef: any = ref || React.createRef();
  let timer = React.useRef<NodeJS.Timeout | null>(null);

  const buildToastStyle = () => {
    let num = total - index;
    return {
      ...style,
      zIndex: 9999 + index,
      transform: `translate3d(0, calc(-${latestHeight}px + 100% + -${20 * (num)}px), -${num}px) scale(${1 - (num) / 20})`,
    }
  }

  React.useEffect(() => {
    timer.current = setTimeout(() => {
      handles.removeToast(state.key);
    }, defaultOptions.dismiss)
  }, [])
  
  const suspend = () => {
    clearTimeout(timer.current ?? 0);
  }

  const resume = () => {
    timer.current = setTimeout(() => {
      handles.removeToast(state.key);
    }, defaultOptions.dismiss)
  }
  
  return (
    <div 
      onMouseEnter={() => {
        suspend();
      }}
      onMouseLeave={() => {
        resume();
      }}
      {...attrs} 
      style={buildToastStyle()}
      ref={toastRef} 
      className={classNames('toast', className, 'enter', {
        'success': state.type === 'success',
        'error': state.type === 'error',
      })}>
      {children}
    </div>
  )
}

export default forwardRef(Toast);
