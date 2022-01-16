/**
 * @file LookUpProduct tests.
 */
import {testApi} from '../__utils__/test.api';
import fixture from '../__fixtures__/market/LookUpProduct.json';
import LookUpProduct from '../../src/market/LookUpProduct';

/* eslint-disable max-len */

describe('LookUpProduct', () => testApi({fixture, fn: LookUpProduct, tests: [
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
