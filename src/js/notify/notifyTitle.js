export const createContentTemplate = (title) => {
    if(typeof title !== 'string') {
        throw new Error('title must be string')
    }

    return true
}