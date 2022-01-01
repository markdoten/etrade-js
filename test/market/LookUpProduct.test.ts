/**
 * @file LookUpProduct tests.
 */
import {testApi} from '../__utils__/test.api';
import {LookUpProduct as TestFn} from '../../src/market/LookUpProduct';
import fixture from '../__fixtures__/market/LookUpProduct.json';

/* eslint-disable max-len */

describe('LookUpProduct', () => testApi({fixture, fn: TestFn, tests: [
  {
    args: {search: 'ADBE'},
    path: '/market/lookup/ADBE.json',
    title: 'calls correct endpoint with all arguments'
  },
  {
    args: {search: 'ADBE'},
    error: 'some error',
    path: '/market/lookup/ADBE.json',
    title: 'throws if invalid data'
  }
]}));
