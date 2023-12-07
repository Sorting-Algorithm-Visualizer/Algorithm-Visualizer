// this is the entry point for the visualization page

import React from 'react';
import ReactDOM from 'react-dom/client';
import SortingVisualizer from './AlgoLogic';

const rootElement: any = document.querySelector('#root');
const root = ReactDOM.createRoot(rootElement);

root.render(<SortingVisualizer />);
