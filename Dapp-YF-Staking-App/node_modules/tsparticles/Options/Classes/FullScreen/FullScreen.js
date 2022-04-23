"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FullScreen = void 0;
class FullScreen {
    constructor() {
        this.enable = false;
        this.zIndex = -1;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.zIndex !== undefined) {
            this.zIndex = data.zIndex;
        }
    }
}
exports.FullScreen = FullScreen;
