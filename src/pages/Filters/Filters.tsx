import React, { useState } from 'react'
import Layout from '../../layout/Layout';
import DropDown from '../../components/DropDown/DropDown';
import FilterSearchBar from '../../components/FilterSearchBar/FilterSearchBar';
import MainPageContent from '../../components/MainPageContent/MainPageContent';
import BackToTopButton from '../../components/BackToTopButton/BackToTopButton';

import './Filters.css'



const Filters = () =>{

    const [selectedYear, setSelectedYear] = useState('Год');
    const [selectedCountry, setSelectedCountry] = useState('Страна');
    const [selectedDirector, setSelectedDirector] = useState('Режиссер');

    const[selectedRating, setSelectedRating] = useState('');
    const[selectedActor, setSelectedActor] = useState('');
    const[selectedGenre, setSelectedGenre] = useState('');

    const[isActiveYear, setIsActiveYear] = useState(false);
    const[isActiveCountry, setIsActiveCountry] = useState(false);
    const[isActiveDirector, setIsActiveDirector] = useState(false);

    const[isActiveRating, setIsActiveRating] = useState(false);
    const[isActiveActor, setIsActiveActor] = useState(false);
    const[isActiveGenre, setIsActiveGenre] = useState(false);

    // isActive={isActiveYear} setIsActive={setIsActiveYear} 
    // isActive={isActiveCountry} setIsActive={setIsActiveCountry}
    // isActive={isActiveDirector} setIsActive={setIsActiveDirector}

    return (
        <Layout>
            <div className='filters-page-component'>
                <div className='filters-logo'>Фильтры</div>
                <div className='filters'>
                    <div className='filters-dropdowns-container'>
                   <DropDown isActive={isActiveYear} setIsActive={setIsActiveYear}  selected={selectedYear} setSelected={setSelectedYear} items={['1960','1961','1962']}/>
                   <DropDown isActive={isActiveCountry} setIsActive={setIsActiveCountry} selected={selectedCountry} setSelected={setSelectedCountry} items={['USA']}/>
                   <DropDown isActive={isActiveDirector} setIsActive={setIsActiveDirector} selected={selectedDirector} setSelected={setSelectedDirector} items={['Кристофер Нолан', 'Джеймс Кэмерон']}/>
                    </div>
                    <div className='filters-searchbars-container'>
                    <FilterSearchBar isActive={isActiveRating} setIsActive={setIsActiveRating} selected={selectedRating} setSelected={setSelectedRating} logo='Рейтинг' items={['1','2','3','4','5','6','7','8','9','10']}/>
                    <FilterSearchBar isActive={isActiveActor} setIsActive={setIsActiveActor} selected={selectedActor} setSelected={setSelectedActor} logo='Актер' items={['Роберт Паттинсон', 'Райан Гослинг','Том Харди']}/>
                    <FilterSearchBar isActive={isActiveGenre} setIsActive={setIsActiveGenre} selected={selectedGenre} setSelected={setSelectedGenre} logo='Жанр' items={['Боевик','Триллер']}/>
                    </div>
                </div>
                <div className='filters-content'>
                    <MainPageContent data={['Бойцовский клуб','Довод','Интерстеллар', 'Гордость и предубеждение']}/>
                </div>
                
            </div>
        </Layout>
    );
}


export default Filters;