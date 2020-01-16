import { NAME } from './constants';

/**
 * Fired by the {@link actions.updateTransactions updateTransactions}
 * action creator.
 *
 * @type {Array}
 */

export const UPDATE_TRANSACTIONS = `${NAME}/UPDATE_TRANSACTIONS`;

/**
 * Fired by the {@link actions.requestTransactions requestTransactions}
 * action creator.
 *
 * @type {Array}
 */

export const REQUEST_TRANSACTIONS = `${NAME}/REQUEST_TRANSACTIONS`;

/**
 * Fired by the {@link actions.loadTransactions loadTransactions}
 * action creator.
 *
 */

export const LOAD_TRANSACTIONS = `${NAME}/LOAD_TRANSACTIONS`;
