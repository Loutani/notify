/**
 * @jest-environment jsdom
 */

import {createContentTemplate} from './notifyContent'

describe('test create notify content template', () => {
    it('should createContentTemplate("") be defined', () => {
        expect(createContentTemplate("")).toBeDefined();
    });

    it('createContentTemplate([]) should throw error exception with "content must be string"', () => {
        expect(() => createContentTemplate([])).toThrowError('content must be string');
    });

    it('createContentTemplate("email is required") should return "email is required" as string', () => {
        let contentTemplate = createContentTemplate('email is required'),
        contentTemplateAsElement = document.createElement('div');

        contentTemplateAsElement.innerHTML = contentTemplate;
        document.body.appendChild(contentTemplateAsElement);

        let content = document.querySelector('.toast-body').textContent;

        expect(content).toBe('email is required')
    });

    it('createContentTemplate("<li>email is required</li>") should contain <li> element', () => {
        let contentTemplate = createContentTemplate('<li>email is required</li>'),
        contentTemplateAsElement = document.createElement('div');

        contentTemplateAsElement.innerHTML = contentTemplate;
        document.body.appendChild(contentTemplateAsElement);

        let content = document.querySelector('.toast-body li').textContent;

        expect(content).toBe('email is required')
    });
});