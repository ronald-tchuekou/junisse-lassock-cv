/**
 * Fichier qui permet de gérer les contexts.
 * @author Ronald Tchuekou
 * @emeil ronaldtchuekou@gmail.com
 * @copyright 28-10-2021 12:11
 */

import React from 'react';

export const LangContext = React.createContext({
    lang: 'fr',
    setLang: () => {},
});
