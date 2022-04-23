"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadPolygonMaskPlugin = void 0;
const PolygonMaskInstance_1 = require("./PolygonMaskInstance");
const PolygonMask_1 = require("./Options/Classes/PolygonMask");
const Enums_1 = require("./Enums");
class Plugin {
    constructor() {
        this.id = "polygonMask";
    }
    getPlugin(container) {
        return new PolygonMaskInstance_1.PolygonMaskInstance(container);
    }
    needsPlugin(options) {
        var _a, _b, _c;
        return (_b = (_a = options === null || options === void 0 ? void 0 : options.polygon) === null || _a === void 0 ? void 0 : _a.enable) !== null && _b !== void 0 ? _b : (((_c = options === null || options === void 0 ? void 0 : options.polygon) === null || _c === void 0 ? void 0 : _c.type) !== undefined && options.polygon.type !== Enums_1.Type.none);
    }
    loadOptions(options, source) {
        if (!this.needsPlugin(source)) {
            return;
        }
        const optionsCast = options;
        let polygonOptions = optionsCast.polygon;
        if ((polygonOptions === null || polygonOptions === void 0 ? void 0 : polygonOptions.load) === undefined) {
            optionsCast.polygon = polygonOptions = new PolygonMask_1.PolygonMask();
        }
        polygonOptions.load(source === null || source === void 0 ? void 0 : source.polygon);
    }
}
function loadPolygonMaskPlugin(tsParticles) {
    const plugin = new Plugin();
    tsParticles.addPlugin(plugin);
}
exports.loadPolygonMaskPlugin = loadPolygonMaskPlugin;
