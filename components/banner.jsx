import React from 'react';
import { LangContext } from './context';
import Lang from './lang';
import Image from 'next/image';

export const AppBanner = (props) => {
    const { lang } = React.useContext(LangContext);
    return (
        <div className="row my-20 p-10 m-0">
            <div className="col-12 col-m-7">
                <div className="text-primary mt-10 mb-10">{Lang.hi[lang]}</div>
                <h2 className="text-bold text-primary">{Lang.namer[lang]}</h2>
                <h2 className="text-bold text-primary mb-20">{Lang.engineer_design[lang]}</h2>
                <p className="text-gray mt-10">{Lang.speech[lang]}</p>
            </div>
            <div className="col-12 col-m-5 ">
                <div className="d-flex content-center items-center banner-img mt-15">
                    <img src="/heroImg.png" alt={'Prescription cv'} />
                </div>
            </div>
        </div>
    );
};
