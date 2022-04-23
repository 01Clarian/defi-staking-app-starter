"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Responsive = void 0;
const Utils_1 = require("../../Utils");
class Responsive {
    constructor() {
        this.maxWidth = Infinity;
        this.options = {};
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.maxWidth !== undefined) {
            this.maxWidth = data.maxWidth;
        }
        if (data.options !== undefined) {
            this.options = Utils_1.deepExtend({}, data.options);
        }
    }
}
exports.Responsive = Responsive;
