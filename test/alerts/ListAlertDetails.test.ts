/**
 * @file ListAlertDetails tests.
 */
import {testApi} from '../__utils__/test.api';
import {ListAlertDetails as TestFn} from '../../src/alerts/ListAlertDetails';
import fixture from '../__fixtures__/alerts/ListAlertDetails.json';

/* eslint-disable max-len */

describe('ListAlertDetails', () => testApi({fixture, fn: TestFn, method: 'GET', tests: [
  {
    args: {htmlTags: true, id: 'id1'},
    path: '/user/alerts/id1.json?htmlTags=true',
    title: 'calls correct endpoint with all arguments'
  },
  {
    args: {id: 'id1'},
    error: 'some error',
    path: '/user/alerts/id1.json',
    title: 'throws if invalid data'
  }
]}));
