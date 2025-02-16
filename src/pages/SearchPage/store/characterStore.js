import {makeAutoObservable} from "mobx";
import {LOADING_STATUS} from "../../../app/utils/storeUtils";
import {fetchFilterByName} from "../api/characterAPI.js";

class CharacterStore {
    // переменные для отслеживания статуса загрузки данных
    filterLoadingStatus = LOADING_STATUS.IDLE;

    constructor() {
        this._filter = []; // все персонажи, фильтрация по имени

        makeAutoObservable(this);
    }

    setFilter(filter) {
        this._filter = filter;
    }

    get filter() {
        return this._filter;
    }

    removeFilter() {
        this._filter = [];
        this.filterLoadingStatus = LOADING_STATUS.IDLE;
    }

    async fetchFilter(name) {
        this.filterLoadingStatus =  LOADING_STATUS.LOADING;

        try {
            const response = await fetchFilterByName(name);
            if (response.results !== undefined)
            {
                this.setFilter(response);
                this.filterLoadingStatus = LOADING_STATUS.SUCCESS;
            }
            else this.filterLoadingStatus = LOADING_STATUS.NOT_FOUND;
        } catch(error) {
            console.log(error.message);
            this.filterLoadingStatus = LOADING_STATUS.ERROR;
        }
    }
}

export default CharacterStore;
