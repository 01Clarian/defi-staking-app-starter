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
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _MainSlim_initialized;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainSlim = void 0;
const SquareDrawer_1 = require("./ShapeDrawers/SquareDrawer");
const TextDrawer_1 = require("./ShapeDrawers/TextDrawer");
const ImageDrawer_1 = require("./ShapeDrawers/ImageDrawer");
const Utils_1 = require("./Utils");
const Enums_1 = require("./Enums");
const LineDrawer_1 = require("./ShapeDrawers/LineDrawer");
const CircleDrawer_1 = require("./ShapeDrawers/CircleDrawer");
const TriangleDrawer_1 = require("./ShapeDrawers/TriangleDrawer");
const StarDrawer_1 = require("./ShapeDrawers/StarDrawer");
const PolygonDrawer_1 = require("./ShapeDrawers/PolygonDrawer");
const Loader_1 = require("./Core/Loader");
class MainSlim {
    constructor() {
        _MainSlim_initialized.set(this, void 0);
        __classPrivateFieldSet(this, _MainSlim_initialized, false, "f");
        const squareDrawer = new SquareDrawer_1.SquareDrawer();
        const textDrawer = new TextDrawer_1.TextDrawer();
        const imageDrawer = new ImageDrawer_1.ImageDrawer();
        Utils_1.Plugins.addShapeDrawer(Enums_1.ShapeType.line, new LineDrawer_1.LineDrawer());
        Utils_1.Plugins.addShapeDrawer(Enums_1.ShapeType.circle, new CircleDrawer_1.CircleDrawer());
        Utils_1.Plugins.addShapeDrawer(Enums_1.ShapeType.edge, squareDrawer);
        Utils_1.Plugins.addShapeDrawer(Enums_1.ShapeType.square, squareDrawer);
        Utils_1.Plugins.addShapeDrawer(Enums_1.ShapeType.triangle, new TriangleDrawer_1.TriangleDrawer());
        Utils_1.Plugins.addShapeDrawer(Enums_1.ShapeType.star, new StarDrawer_1.StarDrawer());
        Utils_1.Plugins.addShapeDrawer(Enums_1.ShapeType.polygon, new PolygonDrawer_1.PolygonDrawer());
        Utils_1.Plugins.addShapeDrawer(Enums_1.ShapeType.char, textDrawer);
        Utils_1.Plugins.addShapeDrawer(Enums_1.ShapeType.character, textDrawer);
        Utils_1.Plugins.addShapeDrawer(Enums_1.ShapeType.image, imageDrawer);
        Utils_1.Plugins.addShapeDrawer(Enums_1.ShapeType.images, imageDrawer);
    }
    init() {
        if (!__classPrivateFieldGet(this, _MainSlim_initialized, "f")) {
            __classPrivateFieldSet(this, _MainSlim_initialized, true, "f");
        }
    }
    loadFromArray(tagId, options, index) {
        return __awaiter(this, void 0, void 0, function* () {
            return Loader_1.Loader.load(tagId, options, index);
        });
    }
    load(tagId, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return Loader_1.Loader.load(tagId, options);
        });
    }
    set(id, element, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return Loader_1.Loader.set(id, element, options);
        });
    }
    loadJSON(tagId, pathConfigJson, index) {
        return Loader_1.Loader.loadJSON(tagId, pathConfigJson, index);
    }
    setJSON(id, element, pathConfigJson, index) {
        return __awaiter(this, void 0, void 0, function* () {
            return Loader_1.Loader.setJSON(id, element, pathConfigJson, index);
        });
    }
    setOnClickHandler(callback) {
        Loader_1.Loader.setOnClickHandler(callback);
    }
    dom() {
        return Loader_1.Loader.dom();
    }
    domItem(index) {
        return Loader_1.Loader.domItem(index);
    }
    addShape(shape, drawer, init, afterEffect, destroy) {
        let customDrawer;
        if (typeof drawer === "function") {
            customDrawer = {
                afterEffect: afterEffect,
                destroy: destroy,
                draw: drawer,
                init: init,
            };
        }
        else {
            customDrawer = drawer;
        }
        Utils_1.Plugins.addShapeDrawer(shape, customDrawer);
    }
    addPreset(preset, options, override = false) {
        Utils_1.Plugins.addPreset(preset, options, override);
    }
    addPlugin(plugin) {
        Utils_1.Plugins.addPlugin(plugin);
    }
    addPathGenerator(name, generator) {
        Utils_1.Plugins.addPathGenerator(name, generator);
    }
    addInteractor(name, interactorInitializer) {
        Utils_1.Plugins.addInteractor(name, interactorInitializer);
    }
    addParticleUpdater(name, updaterInitializer) {
        Utils_1.Plugins.addParticleUpdater(name, updaterInitializer);
    }
}
exports.MainSlim = MainSlim;
_MainSlim_initialized = new WeakMap();
