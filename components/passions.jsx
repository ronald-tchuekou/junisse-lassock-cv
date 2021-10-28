import React from 'react';
import { LangContext } from './context';
import Lang from './lang';
import Image from 'next/image';

export const Passions = (props) => {
    const { lang } = React.useContext(LangContext);
    return (
        <div id="passions">
            <div className="row m-0">
                <div className="col-4 col-center d-flex content-center items-center text-25 my-30">
                    <span className="text-color">{Lang.mine[lang]}</span>&nbsp;&nbsp;
                    <span className="text-primary text-bold">{Lang.passions[lang]}</span>
                </div>
            </div>
            <div className="row m-0">
                <div className="col-12 col-m-6 col-l-3">
                    <div className="card text-center">
                        <Image
                            src="/conception_img.png"
                            alt={'Front end dev'}
                            layout={'responsive'}
                            width={150}
                            height={100}
                        />
                        <p className="text-17 text-nw mt-15">
                            <span>{'Conception'}</span>
                        </p>
                        <p className="text-12 text-gray text-nw">(NodeJS, Laravel, Codeigniter,...)</p>
                    </div>
                </div>

                <div className="col-12 col-m-6 col-l-3">
                    <div className="card text-center">
                        <Image
                            src="/font_end_img.png"
                            layout={'responsive'}
                            alt={'Front end dev'}
                            width={150}
                            height={100}
                        />
                        <p className="text-17 text-nw mt-15">
                            <span>{'Fron-End'}</span>&nbsp;
                            <span className="text-gray">{Lang.developper[lang]}</span>
                        </p>
                        <p className="text-12 text-gray text-nw">(NodeJS, Bootstrap, VueJS,...)</p>
                    </div>
                </div>

                <div className="col-12 col-m-6 col-l-3">
                    <div className="card text-center">
                        <Image
                            src="/back_end_img.png"
                            layout={'responsive'}
                            alt={'Front end dev'}
                            width={150}
                            height={100}
                        />
                        <p className="text-17 text-nw mt-15">
                            <span>{'Back-End'}</span>&nbsp;
                            <span className="text-gray">{Lang.developper[lang]}</span>
                        </p>
                        <p className="text-12 text-gray text-nw">(NodeJS, Laravel, Codeigniter,...)</p>
                    </div>
                </div>

                <div className="col-12 col-m-6 col-l-3">
                    <div className="card text-center">
                        <Image
                            src="/ui_ux_img.png"
                            layout={'responsive'}
                            alt={'Front end dev'}
                            width={150}
                            height={100}
                        />
                        <p className="text-17 text-nw mt-15">
                            <span>{'UI/UX'}</span>&nbsp;
                            <span className="text-gray">{Lang.design[lang]}</span>
                        </p>
                        <p className="text-12 text-gray text-nw">(Figma, Zeplin, Adobe XD,...)</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
