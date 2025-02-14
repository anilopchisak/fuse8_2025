import './ui/App.scss';
import {BrowserRouter} from "react-router-dom";
import SearchPage from "../pages/SearchPage/SearchPage.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <div className={'body'}>
                <SearchPage/>
            </div>
        </BrowserRouter>
    );
}

export default App;
