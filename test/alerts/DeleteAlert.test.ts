/**
 * @file DeleteAlert tests.
 */
import {testApi} from '@test/__utils__/test.api';
import DeleteAlert from '@src/alerts/DeleteAlert';
import fixture from '@test/__fixtures__/alerts/DeleteAlert.json';

/* eslint-disable max-len */

describe('DeleteAlert', () => testApi({fixture, fn: DeleteAlert, method: 'DELETE', tests: [
  {
    args: {alertIds: ['id1', 'id2', 'id3']},
    path: '/user/alerts/id1,id2,id3.json',
    title: 'calls correct endpoint with all arguments'
  },
  {
    args: {alertIds: ['id1', 'id2']},
    error: 'some error',
    path: '/user/alerts/id1,id2.json',
    title: 'throws if invalid data'
  }
]}));
