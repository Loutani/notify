export const createContentTemplate = (content) => {
    if(typeof content !== 'string') {
        throw new Error('content must be string');
    }

    return true
}