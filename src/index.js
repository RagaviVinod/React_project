import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
//import configureStore from "./store/configureStore";
//import { Provider } from "react-redux";
//import './styles/styles.css';
import CoursesPage from './components/home/CoursesPage';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

//const store = configureStore();
render(
    
        <CoursesPage/>
    ,
    document.getElementById('app')
);