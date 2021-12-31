/**
 * @file ListAlerts tests.
 */
import {AlertCategory, AlertStatus} from '../../src/alerts/enums';
import {SortOrder} from '../../src/enums';
import {testApi} from '../__utils__/test.api';
import {ListAlerts as TestFn} from '../../src/alerts/ListAlerts';
import fixture from '../__fixtures__/alerts/ListAlerts.json';

/* eslint-disable max-len */

describe('ListAlerts', () => testApi({fixture, fn: TestFn, method: 'GET', tests: [
  {
    args: {
      category: AlertCategory.ACCOUNT,
      count: 20,
      direction: SortOrder.ASC,
      search: 'some search',
      status: AlertStatus.READ
    },
    path: '/user/alerts.json?category=ACCOUNT&count=20&direction=ASC&search=some+search&status=READ',
    title: 'calls correct endpoint with all arguments'
  },
  {
    args: {},
    error: 'some error',
    path: '/user/alerts.json',
    title: 'throws if invalid data'
  }
]}));
