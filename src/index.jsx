import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './app/App.jsx'

export const Context = createContext(null);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,

)
