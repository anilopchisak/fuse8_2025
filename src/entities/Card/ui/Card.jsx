import React from 'react';
import './CardList.scss';

const Card = ({character, typeCard}) => {
    const formattedDate = new Date(character.created).toLocaleDateString('ru-RU');

    const handleClick = () => {
        if (character.url) {
            window.location.href = character.url;
        }
    };

    return (
        <div className={`card ${typeCard}`} onClick={handleClick}>
            <h1>{character.name} - {character.species}</h1>
            <div className="card-info">
                <p className="status">Status: <span className={character.status === 'Alive' ? "alive" : "dead"}>
                        {character.status}</span></p>
                <p>Created: {formattedDate}</p>
            </div>
        </div>
    );
};

export default Card;