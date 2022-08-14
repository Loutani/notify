/**
 * @jest-environment jsdom
 */

import {createContentTemplate} from './notifyTitle';

describe('test create notify title template', () => {
    it('createContentTemplate() should be defined', () => {
        expect(createContentTemplate('')).toBeDefined();
    });

    it('createContentTemplate([]) should throw error exception with "title must be string"', () => {
        expect(() => createContentTemplate([])).toThrowError('title must be string')
    });

    it('createContentTemplate("validation error") should return "validation error" as string', () => {
        let titleTemplate = createContentTemplate('validation error'),
            titleTemplateAsElement = document.createElement('div');

        titleTemplateAsElement.innerHTML = titleTemplate;
        document.body.appendChild(titleTemplateAsElement);

        let titleContent = document.querySelector('.toast-title').textContent;

        expect(titleContent).toBe('validation error')
    });

    it('createContentTemplate("<h3>validation error</h3>") should contain <h3> element', () => {
        let titleTemplate = createContentTemplate('<h3>validation error</h3>'),
            titleTemplateAsElement = document.createElement('div');

        titleTemplateAsElement.innerHTML = titleTemplate;
        document.body.appendChild(titleTemplateAsElement);

        let titleContent = document.querySelector('.toast-title h3').textContent;

        expect(titleContent).toBe('validation error')
    });
});