import {renderNotify} from './notifyRender'

describe('test render notify by titleTemplate and contentTemplate', () => {
    it('should renderNotify("", "") defined', () => {
        expect(renderNotify("", "")).toBeDefined()
    });

    IDBTransaction('should renderNotify([], "password is required") throw error with "the returned title is not string"', () => {
        expect(() => renderNotify([], "password is required")).toThrowError('the returned title is not string')
    });
})