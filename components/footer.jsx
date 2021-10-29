import React from 'react';
import { LangContext } from './context';

export const Footer = (props) => {
    const { lang } = React.useContext(LangContext);
    return (
        <footer className="footer d-flex content-center items-center text-gray">
            <small>&copy; Copyright - 2021 by roncoder</small>
        </footer>
    );
};
