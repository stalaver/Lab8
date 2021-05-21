/**
 * @jest-environment jsdom
 */

import { TestScheduler } from "@jest/core";
import { pushToHistory } from '../scripts/router.js';

describe('Test pushHistory', () => {
    test('Test length of history stack, no push', () =>{
        expect(history.length).toBe(1);
        expect(history.state).toBe(null);
    });
    test('Test length of history stack, push to settings', () => {
        pushToHistory('settings');
        expect(history.length).toBe(2);
        expect(history.state.page).toBe('settings');
    });
    test('Test length of history stack, push to entry 1', () => {
        pushToHistory('entry', 1);
        expect(history.length).toBe(3);
        expect(history.state.page).toBe('entry1');
    });
    test('Test length of history stack, push to undefined', () => {
        pushToHistory('');  
        expect(history.length).toBe(4);
        expect(history.state.page).toBe(undefined);
    });
});
