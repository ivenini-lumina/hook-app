import React from 'react';
import ReactDOM from 'react-dom/client';
import { MainApp } from './09-useContext/MainApp';
// import { Padre } from './07-tarea-memo/Padre';
// import { TodoApp } from './08-useReducer/TodoApp';
// import { CallbackHook } from './06-memos/CallbackHook';
// import { MemoHook } from './06-memos/MemoHook';
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
// import { FocusScreen } from './04-useRef/FocusScreen';
// import { Layout } from './05-useLayoutEffect/Layout';
// import { Memorize } from './06-memos/Memorize';
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
// import { SimpleForm } from './02-useEffect/SimpleForm';
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
// import { HooksApp } from './HooksApp';
// import './08-useReducer/intro-reducer';

import './index.css';
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  // <MultipleCustomHooks />
  // <FocusScreen />
  // <Layout />
    // <Memorize />
    // <MemoHook />
    // <CallbackHook />
    // <Padre />
    // <TodoApp /> 
    <BrowserRouter>
      {/* <React.StrictMode> */}
      <MainApp />
      {/* </React.StrictMode> */}
    </BrowserRouter>   
);
