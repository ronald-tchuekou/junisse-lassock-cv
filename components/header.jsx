import React from 'react';
import { LangContext } from './context';
import Lang from './lang';
import { SlideAnimations } from 'mirajs/dist/js';

export const AppHeader = (props) => {
    const slide_ref = React.useRef(null);

    const { lang } = React.useContext(LangContext);

    const [is_show, show] = React.useState(false);

    React.useEffect(() => {
        if (!is_show) SlideAnimations.slideUp(slide_ref.current);
        else SlideAnimations.slideDown(slide_ref.current);
    }, [is_show]);

    return (
        <div className="d-flex m-d-flex d-flex-c app__header p-10">
            <div className="d-flex content-between items-center">
                <div className="m-flex-grow-none">
                    <h1 className="logo color-primary">CV</h1>
                </div>

                <div className="m-hide">
                    <button
                        style={{ width: 40, height: 40 }}
                        onClick={() => show((s) => !s)}
                        className="text-20 btn icon-btn text-primary contained-pirmary p-10"
                    >
                        {is_show ? (
                            <i className="fi fi-rr-cross d-flex content-center items-center"></i>
                        ) : (
                            <i className="fi fi-rr-menu-burger d-flex content-center items-center"></i>
                        )}
                    </button>
                </div>

                <div className="hide m-show-flex m-d-flex m-d-flex-r m-content-end m-items-center navbar mt-10">
                    <div className="nav-item my-10 m-my-0">
                        <a href="#about" className="btn text-primary d-block w-100 m-w-auto">
                            {Lang.about[lang]}
                        </a>
                    </div>
                    <div className="nav-item my-10 m-my-0">
                        <a href="#passions" className="btn text-primary d-block w-100 m-w-auto">
                            {Lang.passions[lang]}
                        </a>
                    </div>
                    <div className="nav-item my-10 m-my-0">
                        <a href="#porfolio" className="btn text-primary d-block w-100 m-w-auto">
                            {Lang.porfolio[lang]}
                        </a>
                    </div>
                    <div className="nav-item my-10 m-my-0">
                        <a
                            href="#contact-me"
                            className="btn btn-primary contained contained-primary d-block w-100 m-w-auto"
                        >
                            {Lang.contact_me[lang]}
                        </a>
                    </div>
                </div>
            </div>

            <div ref={slide_ref} className="hide d-flex d-flex-c content-around items-center navbar">
                <div className="nav-item my-10 m-my-0 w-100 text-center" onClick={() => show(false)}>
                    <a href="#about" className="btn text-primary d-block">
                        {Lang.about[lang]}
                    </a>
                </div>
                <div className="nav-item my-10 m-my-0 w-100 text-center" onClick={() => show(false)}>
                    <a href="#passions" className="btn text-primary d-block">
                        {Lang.passions[lang]}
                    </a>
                </div>
                <div className="nav-item my-10 m-my-0 w-100 text-center" onClick={() => show(false)}>
                    <a href="#porfolio" className="btn text-primary d-block">
                        {Lang.porfolio[lang]}
                    </a>
                </div>
                <div className="nav-item my-10 m-my-0 w-100 text-center" onClick={() => show(false)}>
                    <a href="#contact-me" className="btn btn-primary contained contained-primary d-block">
                        {Lang.contact_me[lang]}
                    </a>
                </div>
            </div>
        </div>
    );
};
