export const renderNotify = (titleTemplate, contentTemplate) => {
    if(typeof titleTemplate !== 'string') {
        throw new Error('the returned title is not string')
    }

    if(typeof contentTemplate !== 'string') {
        throw new Error('the returned content is not string')
    }

    return true;
}