import {createContentTemplate} from './notifyContent'

describe('test create notify content template', () => {
    it('should createContentTemplate("") be defined', () => {
        expect(createContentTemplate("")).toBeDefined();
    });

    it('createContentTemplate([]) should throw error exception with "content must be string"', () => {
        expect(() => createContentTemplate([])).toThrowError('content must be string');
    });
});