export const createContentTemplate = (content) => {
    if(typeof content !== 'string') {
        throw new Error('content must be string');
    }

    let contentTemplate = `<div class="toast-body">${content}</div>`;
    return contentTemplate
}