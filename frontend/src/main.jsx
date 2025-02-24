import React from 'react'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import StoreContextProvider from './context/StoreContext.jsx';
import 'boxicons/css/boxicons.min.css';



ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter basename="/luna-nero">
        <StoreContextProvider>
            <App />
        </StoreContextProvider>
    </BrowserRouter>
)
