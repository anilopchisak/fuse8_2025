import './ui/Search.scss';
import {useContext} from "react";
import {Context} from "../../index.jsx";
import {LOADING_STATUS} from "../../app/utils/storeUtils.js";

const Search = ({setSearch}) => {
    const {character} = useContext(Context);

    const onChangeInput = (input) => {
        setSearch(input);
        if (input === '') {
            character.removeFilter();
        }
    }

    return (
        <form id="search-section">
            <input
                autoFocus={true}
                id="search-input"
                type={"search"}
                placeholder="Search characters..."
                onChange={(e) => onChangeInput(e.target.value)}
            />
            <label htmlFor="search-input">
                { character.filterLoadingStatus === LOADING_STATUS.IDLE &&
                    <span></span>
                }
                { character.filterLoadingStatus === LOADING_STATUS.SUCCESS &&
                    <span>Found characters: {character._filter.results.length}</span>
                }
                { character.filterLoadingStatus === LOADING_STATUS.NOT_FOUND &&
                    <span>{LOADING_STATUS.NOT_FOUND}</span>
                }
                { character.filterLoadingStatus === LOADING_STATUS.ERROR &&
                    <span>{LOADING_STATUS.ERROR}</span>
                }
            </label>
        </form>
    );
};

export default Search;