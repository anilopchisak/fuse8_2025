import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './app/App.jsx'
import CharacterStore from "./pages/SearchPage/store/characterStore.js";

export const Context = createContext(null);

createRoot(document.getElementById('root')).render(
    <Context.Provider value={{
        character: new CharacterStore(),
    }}>
        <App />
    </Context.Provider>
)
