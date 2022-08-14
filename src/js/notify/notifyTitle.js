export const createContentTemplate = (title) => {
    if(typeof title !== 'string') {
        throw new Error('title must be string')
    }

    let notifyTitleTemplate = `<div class="toast-header">
                                    <strong class="toast-title">${title}</strong>
                                </div>`
    return notifyTitleTemplate
}