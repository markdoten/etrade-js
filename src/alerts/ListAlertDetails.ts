/**
 * @file List Alert Details.
 */
import session from '../session';
import type {IFetchResponse} from '../interfaces';

/* eslint-disable max-len */

export interface IListAlertDetailsRequest {
  /** The HTML tags on the alert. By default it is false. If set to true, it returns the alert details msgText with html tags. */
  htmlTags?: string;
  /** The alert ID value. Alert id whose details are needed. */
  id: string;
}

/**
 * @see {@link https://apisb.etrade.com/docs/api/user/api-alert-v1.html#/definitions/AlertDetailsResponse|AlertDetailsResponse Docs}
 */
export interface IListAlertDetailsResponse extends IFetchResponse {
  /** The date and time the alert was issued, in Epoch time. */
  createTime: number;
  /** The time the alert was deleted. */
  deleteTime: number;
  /** The numeric alert ID. */
  id: number;
  /** The text of the alert message. */
  msgText: string;
  /** Contains url for next alert. */
  next: string;
  /** Contains url for previous alert. */
  prev: string;
  /** The time the alert was read. */
  readTime: number;
  /** The subject of the alert. */
  subject: string;
  /** The market symbol for the instrument related to this alert, if any; for example, GOOG. It is set only in case of Stock alerts. */
  symbol: string;
}

/**
 * Returns the details for an alert.
 * @async
 * @param request - The request object.
 * @param [request.id] - The alert ID value. Alert id whose details are needed.
 * @returns {Promise<IListAlertDetailsResponse>} - Details for an alert.
 * @see {@link https://apisb.etrade.com/docs/api/user/api-alert-v1.html#/definition/getAlertDetails|List Alert Details Docs}
 */
export default ({id, ...query}: IListAlertDetailsRequest): Promise<IListAlertDetailsResponse> =>
  session.request<IListAlertDetailsResponse>({
    path: `/user/alerts/${id}`,
    query
  });
