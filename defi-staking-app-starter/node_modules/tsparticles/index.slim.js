"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pJSDom = exports.particlesJS = exports.tsParticles = exports.MainSlim = exports.Utils = exports.Rectangle = exports.Point = exports.Constants = exports.ColorUtils = exports.CircleWarp = exports.Circle = exports.CanvasUtils = void 0;
const main_slim_1 = require("./main.slim");
Object.defineProperty(exports, "MainSlim", { enumerable: true, get: function () { return main_slim_1.MainSlim; } });
const pjs_1 = require("./pjs");
const Utils_1 = require("./Utils");
Object.defineProperty(exports, "CanvasUtils", { enumerable: true, get: function () { return Utils_1.CanvasUtils; } });
Object.defineProperty(exports, "Circle", { enumerable: true, get: function () { return Utils_1.Circle; } });
Object.defineProperty(exports, "CircleWarp", { enumerable: true, get: function () { return Utils_1.CircleWarp; } });
Object.defineProperty(exports, "ColorUtils", { enumerable: true, get: function () { return Utils_1.ColorUtils; } });
Object.defineProperty(exports, "Constants", { enumerable: true, get: function () { return Utils_1.Constants; } });
Object.defineProperty(exports, "Point", { enumerable: true, get: function () { return Utils_1.Point; } });
Object.defineProperty(exports, "Rectangle", { enumerable: true, get: function () { return Utils_1.Rectangle; } });
Object.defineProperty(exports, "Utils", { enumerable: true, get: function () { return Utils_1.Utils; } });
const tsParticles = new main_slim_1.MainSlim();
exports.tsParticles = tsParticles;
tsParticles.init();
const { particlesJS, pJSDom } = pjs_1.initPjs(tsParticles);
exports.particlesJS = particlesJS;
exports.pJSDom = pJSDom;
__exportStar(require("./Core/Particle/Vector"), exports);
__exportStar(require("./Core/Container"), exports);
__exportStar(require("./Enums"), exports);
__exportStar(require("./Types"), exports);
__exportStar(require("./Core/Interfaces/IShapeValues"), exports);
