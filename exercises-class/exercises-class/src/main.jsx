import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//import after install error react 
import {ErrorBoundary} from 'react-error-boundary'
import ErrorMessage from './ErrorMessage/ErrorMessage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorMessage}>
    <App />
    </ErrorBoundary>
  </React.StrictMode>,
)
