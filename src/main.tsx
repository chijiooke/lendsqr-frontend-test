import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Routes'
import './global-styles/global.styles.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
