import React from 'react';
import Head from 'next/head';
import { AppHeader } from '../components/header';
import { LangContext } from '../components/context';
import { AppBanner } from '../components/banner';
import { Passions } from '../components/passions';
import { Footer } from '../components/footer';

export default function Home() {
    const [lang, setLang] = React.useState('fr');
    const lang_context = React.useMemo(
        () => ({
            lang: lang,
            setLang: setLang,
        }),
        [lang, setLang]
    );
    return (
        <LangContext.Provider value={lang_context}>
            <Head>
                <title>Junisse Lassock Ngwack CV</title>
                <meta name="description" content="Junisse Lassock Ngwack CV" />
                <link
                    rel="stylesheet"
                    href="https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="col-12 col-l-11 col-l-center col-xl-10 col-xl-center">
                <AppHeader />
                <AppBanner />
                <Passions />
            </main>
            <Footer />
        </LangContext.Provider>
    );
}
