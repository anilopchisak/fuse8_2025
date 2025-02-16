import React, {useContext} from 'react';
import './ui/CardList.scss';
import Card from "./ui/Card.jsx";
import {LOADING_STATUS} from "../../app/utils/storeUtils.js";
import {Context} from "../../index.jsx";

const CardList = () => {
    const {character} = useContext(Context);

    const getCards = () => {
        if (character.filterLoadingStatus === LOADING_STATUS.SUCCESS) {
            const result = [];
            const keys = Object.keys(character._filter.results);
            for (let i = 0; i < keys.length; i++) {
                const typeCard = i < 2 ? 'heading-card' : 'normal-card';
                result.push(<Card character={character._filter.results[i]} typeCard={typeCard}/>);
            }
            return result;
        }
    }

    return (
        <div id="search-results-section">
            {getCards()}
        </div>
    );
};

export default CardList;