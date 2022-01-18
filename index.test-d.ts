import {expectType} from 'tsd';
import firstName from './index.js';

expectType<string>(firstName());
