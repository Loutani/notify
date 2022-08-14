import {createContentTemplate} from './notifyContent'

describe('test create notify content template', () => {
    it('should createContentTemplate("") be defined', () => {
        expect(createContentTemplate("")).toBeDefined();
    });
});