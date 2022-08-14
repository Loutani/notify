import {createContentTemplate} from './notifyTitle';

describe('test create notify title template', () => {
    it('createContentTemplate() should be defined', () => {
        expect(createContentTemplate('')).toBeDefined();
    });

    it('createContentTemplate([]) should throw error exception with "title must be string"', () => {
        expect(() => createContentTemplate([])).toThrowError('title must be string')
    });

    it('createContentTemplate("validation error") should return "validation error" as string', () => {
        expect(createContentTemplate('validation error')).toBe('validation error')
    });
});