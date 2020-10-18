import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import "./project.css"
//import Todo from './Todo';
//import Keep from './Keep';
//import "./keep.css";
//import "./todo.css";
//import "./mini.css"
//import "./index.css"
//import Context from './Context';
//import PokemonApi from './PokemonApi';



ReactDOM.render(
        <BrowserRouter>
                <App/>
        </BrowserRouter>,
        document.getElementById('root')
    );