"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = exports.rectBounce = exports.circleBounce = exports.circleBounceDataFromParticle = exports.divMode = exports.singleDivModeExecute = exports.divModeExecute = exports.isDivModeEnabled = exports.deepExtend = exports.downloadSvgImage = exports.loadImage = exports.calculateBounds = exports.areBoundsInside = exports.isPointInside = exports.itemFromArray = exports.arrayRandomIndex = exports.loadFont = exports.isInArray = exports.cancelAnimation = exports.animate = exports.isSsr = void 0;
const Enums_1 = require("../Enums");
const NumberUtils_1 = require("./NumberUtils");
function rectSideBounce(pSide, pOtherSide, rectSide, rectOtherSide, velocity, factor) {
    const res = { bounced: false };
    if (pOtherSide.min >= rectOtherSide.min &&
        pOtherSide.min <= rectOtherSide.max &&
        pOtherSide.max >= rectOtherSide.min &&
        pOtherSide.max <= rectOtherSide.max) {
        if ((pSide.max >= rectSide.min && pSide.max <= (rectSide.max + rectSide.min) / 2 && velocity > 0) ||
            (pSide.min <= rectSide.max && pSide.min > (rectSide.max + rectSide.min) / 2 && velocity < 0)) {
            res.velocity = velocity * -factor;
            res.bounced = true;
        }
    }
    return res;
}
function checkSelector(element, selectors) {
    if (selectors instanceof Array) {
        for (const selector of selectors) {
            if (element.matches(selector)) {
                return true;
            }
        }
        return false;
    }
    else {
        return element.matches(selectors);
    }
}
function isSsr() {
    return typeof window === "undefined" || !window;
}
exports.isSsr = isSsr;
function animate() {
    return isSsr()
        ? (callback) => setTimeout(callback)
        : (callback) => (window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            window.setTimeout)(callback);
}
exports.animate = animate;
function cancelAnimation() {
    return isSsr()
        ? (handle) => clearTimeout(handle)
        : (handle) => (window.cancelAnimationFrame ||
            window.webkitCancelRequestAnimationFrame ||
            window.mozCancelRequestAnimationFrame ||
            window.oCancelRequestAnimationFrame ||
            window.msCancelRequestAnimationFrame ||
            window.clearTimeout)(handle);
}
exports.cancelAnimation = cancelAnimation;
function isInArray(value, array) {
    return value === array || (array instanceof Array && array.indexOf(value) > -1);
}
exports.isInArray = isInArray;
function loadFont(character) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield document.fonts.load(`${(_a = character.weight) !== null && _a !== void 0 ? _a : "400"} 36px '${(_b = character.font) !== null && _b !== void 0 ? _b : "Verdana"}'`);
        }
        catch (_c) {
        }
    });
}
exports.loadFont = loadFont;
function arrayRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}
exports.arrayRandomIndex = arrayRandomIndex;
function itemFromArray(array, index, useIndex = true) {
    const fixedIndex = index !== undefined && useIndex ? index % array.length : arrayRandomIndex(array);
    return array[fixedIndex];
}
exports.itemFromArray = itemFromArray;
function isPointInside(point, size, radius, direction) {
    return areBoundsInside(calculateBounds(point, radius !== null && radius !== void 0 ? radius : 0), size, direction);
}
exports.isPointInside = isPointInside;
function areBoundsInside(bounds, size, direction) {
    let inside = true;
    if (!direction || direction === Enums_1.OutModeDirection.bottom) {
        inside = bounds.top < size.height;
    }
    if (inside && (!direction || direction === Enums_1.OutModeDirection.left)) {
        inside = bounds.right > 0;
    }
    if (inside && (!direction || direction === Enums_1.OutModeDirection.right)) {
        inside = bounds.left < size.width;
    }
    if (inside && (!direction || direction === Enums_1.OutModeDirection.top)) {
        inside = bounds.bottom > 0;
    }
    return inside;
}
exports.areBoundsInside = areBoundsInside;
function calculateBounds(point, radius) {
    return {
        bottom: point.y + radius,
        left: point.x - radius,
        right: point.x + radius,
        top: point.y - radius,
    };
}
exports.calculateBounds = calculateBounds;
function loadImage(source) {
    return new Promise((resolve, reject) => {
        if (!source) {
            reject("Error tsParticles - No image.src");
            return;
        }
        const image = {
            source: source,
            type: source.substr(source.length - 3),
        };
        const img = new Image();
        img.addEventListener("load", () => {
            image.element = img;
            resolve(image);
        });
        img.addEventListener("error", () => {
            reject(`Error tsParticles - loading image: ${source}`);
        });
        img.src = source;
    });
}
exports.loadImage = loadImage;
function downloadSvgImage(source) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!source) {
            throw new Error("Error tsParticles - No image.src");
        }
        const image = {
            source: source,
            type: source.substr(source.length - 3),
        };
        if (image.type !== "svg") {
            return loadImage(source);
        }
        const response = yield fetch(image.source);
        if (!response.ok) {
            throw new Error("Error tsParticles - Image not found");
        }
        image.svgData = yield response.text();
        return image;
    });
}
exports.downloadSvgImage = downloadSvgImage;
function deepExtend(destination, ...sources) {
    for (const source of sources) {
        if (source === undefined || source === null) {
            continue;
        }
        if (typeof source !== "object") {
            destination = source;
            continue;
        }
        const sourceIsArray = Array.isArray(source);
        if (sourceIsArray && (typeof destination !== "object" || !destination || !Array.isArray(destination))) {
            destination = [];
        }
        else if (!sourceIsArray && (typeof destination !== "object" || !destination || Array.isArray(destination))) {
            destination = {};
        }
        for (const key in source) {
            if (key === "__proto__") {
                continue;
            }
            const sourceDict = source;
            const value = sourceDict[key];
            const isObject = typeof value === "object";
            const destDict = destination;
            destDict[key] =
                isObject && Array.isArray(value)
                    ? value.map((v) => deepExtend(destDict[key], v))
                    : deepExtend(destDict[key], value);
        }
    }
    return destination;
}
exports.deepExtend = deepExtend;
function isDivModeEnabled(mode, divs) {
    return divs instanceof Array ? !!divs.find((t) => t.enable && isInArray(mode, t.mode)) : isInArray(mode, divs.mode);
}
exports.isDivModeEnabled = isDivModeEnabled;
function divModeExecute(mode, divs, callback) {
    if (divs instanceof Array) {
        for (const div of divs) {
            const divMode = div.mode;
            const divEnabled = div.enable;
            if (divEnabled && isInArray(mode, divMode)) {
                singleDivModeExecute(div, callback);
            }
        }
    }
    else {
        const divMode = divs.mode;
        const divEnabled = divs.enable;
        if (divEnabled && isInArray(mode, divMode)) {
            singleDivModeExecute(divs, callback);
        }
    }
}
exports.divModeExecute = divModeExecute;
function singleDivModeExecute(div, callback) {
    const selectors = div.selectors;
    if (selectors instanceof Array) {
        for (const selector of selectors) {
            callback(selector, div);
        }
    }
    else {
        callback(selectors, div);
    }
}
exports.singleDivModeExecute = singleDivModeExecute;
function divMode(divs, element) {
    if (!element || !divs) {
        return;
    }
    if (divs instanceof Array) {
        return divs.find((d) => checkSelector(element, d.selectors));
    }
    else if (checkSelector(element, divs.selectors)) {
        return divs;
    }
}
exports.divMode = divMode;
function circleBounceDataFromParticle(p) {
    return {
        position: p.getPosition(),
        radius: p.getRadius(),
        mass: p.getMass(),
        velocity: p.velocity,
        factor: {
            horizontal: NumberUtils_1.getValue(p.options.bounce.horizontal),
            vertical: NumberUtils_1.getValue(p.options.bounce.vertical),
        },
    };
}
exports.circleBounceDataFromParticle = circleBounceDataFromParticle;
function circleBounce(p1, p2) {
    const xVelocityDiff = p1.velocity.x;
    const yVelocityDiff = p1.velocity.y;
    const pos1 = p1.position;
    const pos2 = p2.position;
    const xDist = pos2.x - pos1.x;
    const yDist = pos2.y - pos1.y;
    if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {
        const angle = -Math.atan2(pos2.y - pos1.y, pos2.x - pos1.x);
        const m1 = p1.mass;
        const m2 = p2.mass;
        const u1 = p1.velocity.rotate(angle);
        const u2 = p2.velocity.rotate(angle);
        const v1 = NumberUtils_1.collisionVelocity(u1, u2, m1, m2);
        const v2 = NumberUtils_1.collisionVelocity(u2, u1, m1, m2);
        const vFinal1 = v1.rotate(-angle);
        const vFinal2 = v2.rotate(-angle);
        p1.velocity.x = vFinal1.x * p1.factor.horizontal;
        p1.velocity.y = vFinal1.y * p1.factor.vertical;
        p2.velocity.x = vFinal2.x * p2.factor.horizontal;
        p2.velocity.y = vFinal2.y * p2.factor.vertical;
    }
}
exports.circleBounce = circleBounce;
function rectBounce(particle, divBounds) {
    const pPos = particle.getPosition();
    const size = particle.getRadius();
    const bounds = calculateBounds(pPos, size);
    const resH = rectSideBounce({
        min: bounds.left,
        max: bounds.right,
    }, {
        min: bounds.top,
        max: bounds.bottom,
    }, {
        min: divBounds.left,
        max: divBounds.right,
    }, {
        min: divBounds.top,
        max: divBounds.bottom,
    }, particle.velocity.x, NumberUtils_1.getValue(particle.options.bounce.horizontal));
    if (resH.bounced) {
        if (resH.velocity !== undefined) {
            particle.velocity.x = resH.velocity;
        }
        if (resH.position !== undefined) {
            particle.position.x = resH.position;
        }
    }
    const resV = rectSideBounce({
        min: bounds.top,
        max: bounds.bottom,
    }, {
        min: bounds.left,
        max: bounds.right,
    }, {
        min: divBounds.top,
        max: divBounds.bottom,
    }, {
        min: divBounds.left,
        max: divBounds.right,
    }, particle.velocity.y, NumberUtils_1.getValue(particle.options.bounce.vertical));
    if (resV.bounced) {
        if (resV.velocity !== undefined) {
            particle.velocity.y = resV.velocity;
        }
        if (resV.position !== undefined) {
            particle.position.y = resV.position;
        }
    }
}
exports.rectBounce = rectBounce;
class Utils {
    static isSsr() {
        return isSsr();
    }
    static get animate() {
        return animate();
    }
    static get cancelAnimation() {
        return cancelAnimation();
    }
    static isInArray(value, array) {
        return isInArray(value, array);
    }
    static loadFont(character) {
        return __awaiter(this, void 0, void 0, function* () {
            return loadFont(character);
        });
    }
    static arrayRandomIndex(array) {
        return arrayRandomIndex(array);
    }
    static itemFromArray(array, index, useIndex = true) {
        return itemFromArray(array, index, useIndex);
    }
    static isPointInside(point, size, radius, direction) {
        return isPointInside(point, size, radius, direction);
    }
    static areBoundsInside(bounds, size, direction) {
        return areBoundsInside(bounds, size, direction);
    }
    static calculateBounds(point, radius) {
        return calculateBounds(point, radius);
    }
    static loadImage(source) {
        return loadImage(source);
    }
    static downloadSvgImage(source) {
        return __awaiter(this, void 0, void 0, function* () {
            return downloadSvgImage(source);
        });
    }
    static deepExtend(destination, ...sources) {
        return deepExtend(destination, sources);
    }
    static isDivModeEnabled(mode, divs) {
        return isDivModeEnabled(mode, divs);
    }
    static divModeExecute(mode, divs, callback) {
        divModeExecute(mode, divs, callback);
    }
    static singleDivModeExecute(div, callback) {
        singleDivModeExecute(div, callback);
    }
    static divMode(divs, element) {
        return divMode(divs, element);
    }
    static circleBounceDataFromParticle(p) {
        return circleBounceDataFromParticle(p);
    }
    static circleBounce(p1, p2) {
        circleBounce(p1, p2);
    }
    static rectBounce(particle, divBounds) {
        rectBounce(particle, divBounds);
    }
}
exports.Utils = Utils;
