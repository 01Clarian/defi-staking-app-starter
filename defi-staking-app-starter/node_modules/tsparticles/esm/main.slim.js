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
import { SquareDrawer } from "./ShapeDrawers/SquareDrawer";
import { TextDrawer } from "./ShapeDrawers/TextDrawer";
import { ImageDrawer } from "./ShapeDrawers/ImageDrawer";
import { Plugins } from "./Utils";
import { ShapeType } from "./Enums";
import { LineDrawer } from "./ShapeDrawers/LineDrawer";
import { CircleDrawer } from "./ShapeDrawers/CircleDrawer";
import { TriangleDrawer } from "./ShapeDrawers/TriangleDrawer";
import { StarDrawer } from "./ShapeDrawers/StarDrawer";
import { PolygonDrawer } from "./ShapeDrawers/PolygonDrawer";
import { Loader } from "./Core/Loader";
export class MainSlim {
    constructor() {
        _MainSlim_initialized.set(this, void 0);
        __classPrivateFieldSet(this, _MainSlim_initialized, false, "f");
        const squareDrawer = new SquareDrawer();
        const textDrawer = new TextDrawer();
        const imageDrawer = new ImageDrawer();
        Plugins.addShapeDrawer(ShapeType.line, new LineDrawer());
        Plugins.addShapeDrawer(ShapeType.circle, new CircleDrawer());
        Plugins.addShapeDrawer(ShapeType.edge, squareDrawer);
        Plugins.addShapeDrawer(ShapeType.square, squareDrawer);
        Plugins.addShapeDrawer(ShapeType.triangle, new TriangleDrawer());
        Plugins.addShapeDrawer(ShapeType.star, new StarDrawer());
        Plugins.addShapeDrawer(ShapeType.polygon, new PolygonDrawer());
        Plugins.addShapeDrawer(ShapeType.char, textDrawer);
        Plugins.addShapeDrawer(ShapeType.character, textDrawer);
        Plugins.addShapeDrawer(ShapeType.image, imageDrawer);
        Plugins.addShapeDrawer(ShapeType.images, imageDrawer);
    }
    init() {
        if (!__classPrivateFieldGet(this, _MainSlim_initialized, "f")) {
            __classPrivateFieldSet(this, _MainSlim_initialized, true, "f");
        }
    }
    loadFromArray(tagId, options, index) {
        return __awaiter(this, void 0, void 0, function* () {
            return Loader.load(tagId, options, index);
        });
    }
    load(tagId, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return Loader.load(tagId, options);
        });
    }
    set(id, element, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return Loader.set(id, element, options);
        });
    }
    loadJSON(tagId, pathConfigJson, index) {
        return Loader.loadJSON(tagId, pathConfigJson, index);
    }
    setJSON(id, element, pathConfigJson, index) {
        return __awaiter(this, void 0, void 0, function* () {
            return Loader.setJSON(id, element, pathConfigJson, index);
        });
    }
    setOnClickHandler(callback) {
        Loader.setOnClickHandler(callback);
    }
    dom() {
        return Loader.dom();
    }
    domItem(index) {
        return Loader.domItem(index);
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
        Plugins.addShapeDrawer(shape, customDrawer);
    }
    addPreset(preset, options, override = false) {
        Plugins.addPreset(preset, options, override);
    }
    addPlugin(plugin) {
        Plugins.addPlugin(plugin);
    }
    addPathGenerator(name, generator) {
        Plugins.addPathGenerator(name, generator);
    }
    addInteractor(name, interactorInitializer) {
        Plugins.addInteractor(name, interactorInitializer);
    }
    addParticleUpdater(name, updaterInitializer) {
        Plugins.addParticleUpdater(name, updaterInitializer);
    }
}
_MainSlim_initialized = new WeakMap();
