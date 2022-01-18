import test from 'ava';
import firstname from './index.js';

test('firstname return type to be string', t => {
    t.is(typeof firstname(), 'string');
});
