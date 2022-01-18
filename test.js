import test from 'ava';
import firstName from './index.js';

test('firstName return type to be string', t => {
    t.is(typeof firstName(), 'string');
    t.is(typeof firstName({locale: 'en_US'}), 'string');
    t.is(typeof firstName({locale: 'ru_RU'}), 'string');
    t.is(typeof firstName({gender: 'female'}), 'string');
    t.is(typeof firstName({gender: 'male'}), 'string');
});
