# react-vercel-toast
> Implement the toast component of vercel design for react.

![](example-img/example.gif)

## Install
```
yarn add react-vercel-toast
```

## Usage
``` Typescript
// App.tsx
import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ToastWrapper, toast } from 'react-vercel-toast';

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
```
