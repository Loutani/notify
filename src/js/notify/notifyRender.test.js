import {renderNotify} from './notifyRender'

describe('test render notify by titleTemplate and contentTemplate', () => {
    it('should renderNotify("", "") defined', () => {
        expect(renderNotify("", "")).toBeDefined()
    });
})