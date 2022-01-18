import {loadJsonFileSync} from 'load-json-file';

export default function firstname(options) {
    options = options || {};
    const gender = options.gender === undefined ? 'female' : options.gender;
    const locale = options.locale === undefined ? 'en_US' : options.locale;
    const data = loadJsonFileSync(`./locales/${locale}/${gender}.json`);
    return data[Math.floor(Math.random() * data.length)];
}
