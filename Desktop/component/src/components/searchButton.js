import SearchButtonIcon from './searchButton.svg';
import React from 'react';
import TextField from 'material-ui/TextField';

export const SearchModule = () =>(
    <div>
        <img src={SearchButtonIcon}/>
        <TextField 
            hintText='Search By ....'
        />
    </div>
);

