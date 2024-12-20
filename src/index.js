import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AppProvider } from './components/AppContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.render(
    <AppProvider>
        <App />
    </AppProvider>,
    document.getElementById('root')
);
