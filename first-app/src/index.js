import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';

const context = React.createContext();
const ctxConsumer = context.Consumer;
const ctxProvider = context.Provider;

const routing = (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={ App }></Route>
      <Route path="/header" component={ Header }></Route>
      <Route path="/footer" component={ Footer }></Route>
    </div>
  </BrowserRouter>
);

// ReactDOM.render(
//   <React.StrictMode>
//     <routing />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(routing, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
