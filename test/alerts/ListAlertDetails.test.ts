/**
 * @file ListAlertDetails tests.
 */
import {testApi} from '@test/__utils__/test.api';
import fixture from '@test/__fixtures__/alerts/ListAlertDetails.json';
import ListAlertDetails from '@src/alerts/ListAlertDetails';

/* eslint-disable max-len */

describe('ListAlertDetails', () => testApi({fixture, fn: ListAlertDetails, tests: [
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
