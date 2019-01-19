import { greetings } from '../public/utils/client-app-utils.js';

describe('greetings()', () => {
    it('should return the right greetings to the name', () => {
        expect(greetings("Jane")).toBe("Hello Jane!");
    });
});
