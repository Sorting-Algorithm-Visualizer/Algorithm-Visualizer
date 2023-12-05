// this is the entry point for our front end
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';


const rootElement = document.createElement('div');
// const rootElement: any = document.querySelector('#root');
const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
