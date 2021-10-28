import React from 'react';
import { LangContext } from './context';
import Lang from './lang';

export const AppHeader = (props) => {
    const { lang } = React.useContext(LangContext);
    return (
        <div className="d-flex content-between items-center app__header p-10">
            <div className="flex-grow-none">
                <h1 className="logo color-primary">CV</h1>
            </div>
            <div className="d-flex content-end items-center navbar">
                <div className="nav-item">
                    <a href="#about" className="btn text-primary">
                        {Lang.about[lang]}
                    </a>
                </div>
                <div className="nav-item">
                    <a href="#passions" className="btn text-primary">
                        {Lang.passions[lang]}
                    </a>
                </div>
                <div className="nav-item">
                    <a href="#porfolio" className="btn text-primary">
                        {Lang.porfolio[lang]}
                    </a>
                </div>
                <div className="nav-item">
                    <a href="#contact-me" className="btn btn-primary contained contained-primary">
                        {Lang.contact_me[lang]}
                    </a>
                </div>
            </div>
        </div>
    );
};
