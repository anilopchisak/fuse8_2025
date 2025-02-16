import React, {useContext, useEffect, useState} from 'react';
import './ui/SearchPage.scss';
import Search from "../../entities/Search/Search.jsx";
import CardList from "../../entities/Card/CardList.jsx";
import {Context} from "../../index.jsx";
import {observer} from "mobx-react-lite";

const SearchPage = observer(() => {
    const {character} = useContext(Context);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetchFilter = async (search) => {
            try {
                await character.fetchFilter(search);
            }
            catch (e) {
                console.log(e.message);
            }
        }

        if (search !== '') {
            if (search.length >= 3 ) fetchFilter(search);
        }
        else {
            character.removeFilter();
        }
    }, [search]);

    return (
        <section id={'wrapper'}>
            <Search setSearch={setSearch}/>
            <CardList/>
        </section>
    );
});

export default SearchPage;