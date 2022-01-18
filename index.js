import {loadJsonFileSync} from 'load-json-file';

export default function firstName(options) {
    options = options || {};
    const gender = options.gender === undefined ? 'female' : options.gender;
    const locale = options.locale === undefined ? 'en_US' : options.locale;
    const firtnames = loadJsonFileSync(`./locales/${locale}/${gender}.json`);
    return firtnames[Math.floor(Math.random() * firtnames.length)];
}
