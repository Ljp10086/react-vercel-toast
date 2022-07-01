import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ToastWrapper, toast } from '../.';

const App = () => {
  const ref = React.useRef<HTMLInputElement>(null);
  return (
    <div>
      <input ref={ref} type="text" />
      <button onClick={() => toast.success(<>
        <span>{ref.current?.value}</span>
      </>)}>Add success</button>

      <button onClick={() => toast.error(<>
        <span>{ref.current?.value}</span>
      </>)}>Add error</button>

      <button onClick={() => toast(<>
        <span>{ref.current?.value}</span>
      </>)}>Add info</button>
      <ToastWrapper />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
