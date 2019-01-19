import { getResourceById } from '../api/api-utils';

describe('getResourceById()', () => {
    it('should return the corresponding resource to the id', () => {
        expect(getResourceById(1).id).toBe(1);
        expect(getResourceById(1).content).toBe("resource1");
    });
});
