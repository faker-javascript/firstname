import {expectType} from 'tsd';
import firstname from './index.js';

expectType<string>(firstname());
