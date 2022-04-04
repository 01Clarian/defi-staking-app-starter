var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { downloadSvgImage, isInArray, loadImage } from "../Utils";
import { ShapeType } from "../Enums";
export class ImageDrawer {
    constructor() {
        this.images = [];
    }
    getSidesCount() {
        return 12;
    }
    getImages(container) {
        const containerImages = this.images.filter((t) => t.id === container.id);
        if (!containerImages.length) {
            this.images.push({
                id: container.id,
                images: [],
            });
            return this.getImages(container);
        }
        return containerImages[0];
    }
    addImage(container, image) {
        const containerImages = this.getImages(container);
        containerImages === null || containerImages === void 0 ? void 0 : containerImages.images.push(image);
    }
    init(container) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.loadImagesFromParticlesOptions(container, container.actualOptions.particles);
            yield this.loadImagesFromParticlesOptions(container, container.actualOptions.interactivity.modes.trail.particles);
            for (const manualParticle of container.actualOptions.manualParticles) {
                yield this.loadImagesFromParticlesOptions(container, manualParticle.options);
            }
            const emitterOptions = container.actualOptions;
            if (emitterOptions.emitters) {
                if (emitterOptions.emitters instanceof Array) {
                    for (const emitter of emitterOptions.emitters) {
                        yield this.loadImagesFromParticlesOptions(container, emitter.particles);
                    }
                }
                else {
                    yield this.loadImagesFromParticlesOptions(container, emitterOptions.emitters.particles);
                }
            }
            const interactiveEmitters = emitterOptions.interactivity.modes.emitters;
            if (interactiveEmitters) {
                if (interactiveEmitters instanceof Array) {
                    for (const emitter of interactiveEmitters) {
                        yield this.loadImagesFromParticlesOptions(container, emitter.particles);
                    }
                }
                else {
                    yield this.loadImagesFromParticlesOptions(container, interactiveEmitters.particles);
                }
            }
        });
    }
    destroy() {
        this.images = [];
    }
    loadImagesFromParticlesOptions(container, options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const shapeOptions = options === null || options === void 0 ? void 0 : options.shape;
            if (!(shapeOptions === null || shapeOptions === void 0 ? void 0 : shapeOptions.type) ||
                !shapeOptions.options ||
                (!isInArray(ShapeType.image, shapeOptions.type) && !isInArray(ShapeType.images, shapeOptions.type))) {
                return;
            }
            const idx = this.images.findIndex((t) => t.id === container.id);
            if (idx >= 0) {
                this.images.splice(idx, 1);
            }
            const imageOptions = (_a = shapeOptions.options[ShapeType.images]) !== null && _a !== void 0 ? _a : shapeOptions.options[ShapeType.image];
            if (imageOptions instanceof Array) {
                for (const optionsImage of imageOptions) {
                    yield this.loadImageShape(container, optionsImage);
                }
            }
            else {
                yield this.loadImageShape(container, imageOptions);
            }
            if (options === null || options === void 0 ? void 0 : options.groups) {
                for (const groupName in options.groups) {
                    const group = options.groups[groupName];
                    yield this.loadImagesFromParticlesOptions(container, group);
                }
            }
            if ((_c = (_b = options === null || options === void 0 ? void 0 : options.destroy) === null || _b === void 0 ? void 0 : _b.split) === null || _c === void 0 ? void 0 : _c.particles) {
                yield this.loadImagesFromParticlesOptions(container, options === null || options === void 0 ? void 0 : options.destroy.split.particles);
            }
        });
    }
    loadImageShape(container, imageShape) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const image = imageShape.replaceColor
                    ? yield downloadSvgImage(imageShape.src)
                    : yield loadImage(imageShape.src);
                if (image) {
                    this.addImage(container, image);
                }
            }
            catch (_a) {
                console.warn(`tsParticles error - ${imageShape.src} not found`);
            }
        });
    }
    draw(context, particle, radius, opacity) {
        var _a, _b;
        if (!context) {
            return;
        }
        const image = particle.image;
        const element = (_a = image === null || image === void 0 ? void 0 : image.data) === null || _a === void 0 ? void 0 : _a.element;
        if (!element) {
            return;
        }
        const ratio = (_b = image === null || image === void 0 ? void 0 : image.ratio) !== null && _b !== void 0 ? _b : 1;
        const pos = {
            x: -radius,
            y: -radius,
        };
        if (!(image === null || image === void 0 ? void 0 : image.data.svgData) || !(image === null || image === void 0 ? void 0 : image.replaceColor)) {
            context.globalAlpha = opacity;
        }
        context.drawImage(element, pos.x, pos.y, radius * 2, (radius * 2) / ratio);
        if (!(image === null || image === void 0 ? void 0 : image.data.svgData) || !(image === null || image === void 0 ? void 0 : image.replaceColor)) {
            context.globalAlpha = 1;
        }
    }
}
