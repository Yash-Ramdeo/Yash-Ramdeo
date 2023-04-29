import React, { useState } from 'react';
import "./SearchBar.css";
import { useDispatch } from "react-redux";
import { addString } from '../Hooks/Slice';

const SearchBar = () => {
    const [keyword, setKeyword] = useState("");    //to store the entered value in the input box 
    //and to dispatch for the redux store

    const dispatch = useDispatch();                 //useDispatch is a hook to access the redux dispatch function

    function handleValue(e) {
        setKeyword(e.target.value);                 //storing the input value keyword using setKeyword on input
    }                                                //tag's onChange event

    const search = () => {
        dispatch(addString(keyword));               //dispatching the keyword on button's onClick event where 
    };                                              //addString is a slice in redux's reducers

    return (
        <div className="container">
            <div className="search-box">
                <span className="keyword">Enter keywords</span>
                <input type="text" placeholder="e.g.) Levi's, Shop, Metal, etc." value={keyword} onChange={(e) => handleValue(e)} className='inp' />
                <button type='button' onClick={() => search()} className='search'>Search</button>
            </div>
        </div>
    )
}

export default SearchBar