import { Updater } from "./Particle/Updater";
import { ParticlesOptions } from "../Options/Classes/Particles/ParticlesOptions";
import { Shape } from "../Options/Classes/Particles/Shape/Shape";
import { AnimationStatus, DestroyMode, OutMode, RotateDirection, ShapeType, StartValueType, TiltDirection, } from "../Enums";
import { clamp, colorToHsl, colorToRgb, deepExtend, getDistance, getHslFromAnimation, getParticleBaseVelocity, getParticleDirectionAngle, getRangeMax, getRangeMin, getRangeValue, getValue, isInArray, itemFromArray, loadImage, Plugins, randomInRange, replaceColorSvg, setRangeValue, } from "../Utils";
import { Mover } from "./Particle/Mover";
import { Vector } from "./Particle/Vector";
import { Vector3d } from "./Particle/Vector3d";
export class Particle {
    constructor(id, container, position, overrideOptions, group) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        this.id = id;
        this.container = container;
        this.group = group;
        this.links = [];
        this.fill = true;
        this.close = true;
        this.lastPathTime = 0;
        this.destroyed = false;
        this.unbreakable = false;
        this.splitCount = 0;
        this.misplaced = false;
        this.loops = {
            opacity: 0,
            size: 0,
        };
        this.maxDistance = {};
        const pxRatio = container.retina.pixelRatio;
        const options = container.actualOptions;
        const particlesOptions = new ParticlesOptions();
        particlesOptions.load(options.particles);
        const shapeType = particlesOptions.shape.type;
        const reduceDuplicates = particlesOptions.reduceDuplicates;
        this.shape = shapeType instanceof Array ? itemFromArray(shapeType, this.id, reduceDuplicates) : shapeType;
        if (overrideOptions === null || overrideOptions === void 0 ? void 0 : overrideOptions.shape) {
            if (overrideOptions.shape.type) {
                const overrideShapeType = overrideOptions.shape.type;
                this.shape =
                    overrideShapeType instanceof Array
                        ? itemFromArray(overrideShapeType, this.id, reduceDuplicates)
                        : overrideShapeType;
            }
            const shapeOptions = new Shape();
            shapeOptions.load(overrideOptions.shape);
            if (this.shape) {
                const shapeData = shapeOptions.options[this.shape];
                if (shapeData) {
                    this.shapeData = deepExtend({}, shapeData instanceof Array ? itemFromArray(shapeData, this.id, reduceDuplicates) : shapeData);
                }
            }
        }
        else {
            const shapeData = particlesOptions.shape.options[this.shape];
            if (shapeData) {
                this.shapeData = deepExtend({}, shapeData instanceof Array ? itemFromArray(shapeData, this.id, reduceDuplicates) : shapeData);
            }
        }
        if (overrideOptions !== undefined) {
            particlesOptions.load(overrideOptions);
        }
        if (((_a = this.shapeData) === null || _a === void 0 ? void 0 : _a.particles) !== undefined) {
            particlesOptions.load((_b = this.shapeData) === null || _b === void 0 ? void 0 : _b.particles);
        }
        this.fill = (_d = (_c = this.shapeData) === null || _c === void 0 ? void 0 : _c.fill) !== null && _d !== void 0 ? _d : this.fill;
        this.close = (_f = (_e = this.shapeData) === null || _e === void 0 ? void 0 : _e.close) !== null && _f !== void 0 ? _f : this.close;
        this.options = particlesOptions;
        const zIndexValue = getRangeValue(this.options.zIndex.value);
        this.pathDelay = getValue(this.options.move.path.delay) * 1000;
        this.wobbleDistance = 0;
        container.retina.initParticle(this);
        const color = this.options.color;
        const sizeOptions = this.options.size;
        const sizeValue = getValue(sizeOptions) * container.retina.pixelRatio;
        this.size = {
            value: sizeValue,
            max: getRangeMax(sizeOptions.value) * pxRatio,
            min: getRangeMin(sizeOptions.value) * pxRatio,
        };
        const sizeAnimation = sizeOptions.animation;
        if (sizeAnimation.enable) {
            this.size.status = AnimationStatus.increasing;
            const sizeRange = setRangeValue(sizeOptions.value, sizeAnimation.minimumValue * pxRatio);
            this.size.min = getRangeMin(sizeRange);
            this.size.max = getRangeMax(sizeRange);
            switch (sizeAnimation.startValue) {
                case StartValueType.min:
                    this.size.value = this.size.min;
                    this.size.status = AnimationStatus.increasing;
                    break;
                case StartValueType.random:
                    this.size.value = randomInRange(this.size);
                    this.size.status = Math.random() >= 0.5 ? AnimationStatus.increasing : AnimationStatus.decreasing;
                    break;
                case StartValueType.max:
                default:
                    this.size.value = this.size.max;
                    this.size.status = AnimationStatus.decreasing;
                    break;
            }
            this.size.velocity =
                (((_g = this.sizeAnimationSpeed) !== null && _g !== void 0 ? _g : container.retina.sizeAnimationSpeed) / 100) *
                    container.retina.reduceFactor;
            if (!sizeAnimation.sync) {
                this.size.velocity *= Math.random();
            }
        }
        this.direction = getParticleDirectionAngle(this.options.move.direction);
        this.bubble = {
            inRange: false,
        };
        this.initialVelocity = this.calculateVelocity();
        this.velocity = this.initialVelocity.copy();
        const rotateOptions = this.options.rotate;
        this.rotate = {
            value: (getRangeValue(rotateOptions.value) * Math.PI) / 180,
        };
        let rotateDirection = rotateOptions.direction;
        if (rotateDirection === RotateDirection.random) {
            const index = Math.floor(Math.random() * 2);
            rotateDirection = index > 0 ? RotateDirection.counterClockwise : RotateDirection.clockwise;
        }
        switch (rotateDirection) {
            case RotateDirection.counterClockwise:
            case "counterClockwise":
                this.rotate.status = AnimationStatus.decreasing;
                break;
            case RotateDirection.clockwise:
                this.rotate.status = AnimationStatus.increasing;
                break;
        }
        const rotateAnimation = this.options.rotate.animation;
        if (rotateAnimation.enable) {
            this.rotate.velocity = (rotateAnimation.speed / 360) * container.retina.reduceFactor;
            if (!rotateAnimation.sync) {
                this.rotate.velocity *= Math.random();
            }
        }
        const tiltOptions = this.options.tilt;
        this.tilt = {
            value: (getRangeValue(tiltOptions.value) * Math.PI) / 180,
            sinDirection: Math.random() >= 0.5 ? 1 : -1,
            cosDirection: Math.random() >= 0.5 ? 1 : -1,
        };
        let tiltDirection = tiltOptions.direction;
        if (tiltDirection === TiltDirection.random) {
            const index = Math.floor(Math.random() * 2);
            tiltDirection = index > 0 ? TiltDirection.counterClockwise : TiltDirection.clockwise;
        }
        switch (tiltDirection) {
            case TiltDirection.counterClockwise:
            case "counterClockwise":
                this.tilt.status = AnimationStatus.decreasing;
                break;
            case TiltDirection.clockwise:
                this.tilt.status = AnimationStatus.increasing;
                break;
        }
        const tiltAnimation = this.options.tilt.animation;
        if (tiltAnimation.enable) {
            this.tilt.velocity = (tiltAnimation.speed / 360) * container.retina.reduceFactor;
            if (!tiltAnimation.sync) {
                this.tilt.velocity *= Math.random();
            }
        }
        const hslColor = colorToHsl(color, this.id, reduceDuplicates);
        if (hslColor) {
            this.color = {
                h: {
                    value: hslColor.h,
                },
                s: {
                    value: hslColor.s,
                },
                l: {
                    value: hslColor.l,
                },
            };
            const colorAnimation = this.options.color.animation;
            this.setColorAnimation(colorAnimation.h, this.color.h);
            this.setColorAnimation(colorAnimation.s, this.color.s);
            this.setColorAnimation(colorAnimation.l, this.color.l);
        }
        const rollOpt = this.options.roll;
        if (rollOpt.enable) {
            if (this.color) {
                if (rollOpt.backColor) {
                    this.backColor = colorToHsl(rollOpt.backColor);
                }
                else if (rollOpt.darken.enable) {
                    this.backColor = {
                        h: this.color.h.value,
                        s: this.color.s.value,
                        l: this.color.l.value - rollOpt.darken.value,
                    };
                }
                else if (rollOpt.enlighten.enable) {
                    this.backColor = {
                        h: this.color.h.value,
                        s: this.color.s.value,
                        l: this.color.l.value + rollOpt.darken.value,
                    };
                }
            }
            this.rollAngle = Math.random() * Math.PI * 2;
            this.rollSpeed = getRangeValue(rollOpt.speed) / 360;
        }
        else {
            this.rollAngle = 0;
            this.rollSpeed = 0;
        }
        const wobbleOpt = this.options.wobble;
        if (wobbleOpt.enable) {
            this.wobbleAngle = Math.random() * Math.PI * 2;
            this.wobbleSpeed = getRangeValue(wobbleOpt.speed) / 360;
        }
        else {
            this.wobbleAngle = 0;
            this.wobbleSpeed = 0;
        }
        this.position = this.calcPosition(this.container, position, clamp(zIndexValue, 0, container.zLayers));
        this.initialPosition = this.position.copy();
        this.offset = Vector.origin;
        const particles = this.container.particles;
        particles.needsSort = particles.needsSort || particles.lastZIndex < this.position.z;
        particles.lastZIndex = this.position.z;
        this.zIndexFactor = this.position.z / container.zLayers;
        const opacityOptions = this.options.opacity;
        this.opacity = {
            max: getRangeMax(opacityOptions.value),
            min: getRangeMin(opacityOptions.value),
            value: getValue(opacityOptions),
        };
        const opacityAnimation = opacityOptions.animation;
        if (opacityAnimation.enable) {
            this.opacity.status = AnimationStatus.increasing;
            const opacityRange = setRangeValue(opacityOptions.value, opacityAnimation.minimumValue);
            this.opacity.min = getRangeMin(opacityRange);
            this.opacity.max = getRangeMax(opacityRange);
            switch (opacityAnimation.startValue) {
                case StartValueType.min:
                    this.opacity.value = this.opacity.min;
                    this.opacity.status = AnimationStatus.increasing;
                    break;
                case StartValueType.random:
                    this.opacity.value = randomInRange(this.opacity);
                    this.opacity.status =
                        Math.random() >= 0.5 ? AnimationStatus.increasing : AnimationStatus.decreasing;
                    break;
                case StartValueType.max:
                default:
                    this.opacity.value = this.opacity.max;
                    this.opacity.status = AnimationStatus.decreasing;
                    break;
            }
            this.opacity.velocity = (opacityAnimation.speed / 100) * container.retina.reduceFactor;
            if (!opacityAnimation.sync) {
                this.opacity.velocity *= Math.random();
            }
        }
        this.sides = 24;
        let drawer = container.drawers.get(this.shape);
        if (!drawer) {
            drawer = Plugins.getShapeDrawer(this.shape);
            if (drawer) {
                container.drawers.set(this.shape, drawer);
            }
        }
        const sideCountFunc = drawer === null || drawer === void 0 ? void 0 : drawer.getSidesCount;
        if (sideCountFunc) {
            this.sides = sideCountFunc(this);
        }
        const imageShape = this.loadImageShape(container, drawer);
        if (imageShape) {
            this.image = imageShape.image;
            this.fill = imageShape.fill;
            this.close = imageShape.close;
        }
        this.stroke =
            this.options.stroke instanceof Array
                ? itemFromArray(this.options.stroke, this.id, reduceDuplicates)
                : this.options.stroke;
        this.strokeWidth = this.stroke.width * container.retina.pixelRatio;
        const strokeHslColor = (_h = colorToHsl(this.stroke.color)) !== null && _h !== void 0 ? _h : this.getFillColor();
        if (strokeHslColor) {
            this.strokeColor = {
                h: {
                    value: strokeHslColor.h,
                },
                s: {
                    value: strokeHslColor.s,
                },
                l: {
                    value: strokeHslColor.l,
                },
            };
            const strokeColorAnimation = (_j = this.stroke.color) === null || _j === void 0 ? void 0 : _j.animation;
            if (strokeColorAnimation && this.strokeColor) {
                this.setColorAnimation(strokeColorAnimation.h, this.strokeColor.h);
                this.setColorAnimation(strokeColorAnimation.s, this.strokeColor.s);
                this.setColorAnimation(strokeColorAnimation.l, this.strokeColor.l);
            }
        }
        this.life = this.loadLife();
        this.spawning = this.life.delay > 0;
        this.shadowColor = colorToRgb(this.options.shadow.color);
        this.updater = new Updater(container, this);
        this.mover = new Mover(container, this);
        if (drawer && drawer.particleInit) {
            drawer.particleInit(container, this);
        }
    }
    move(delta) {
        this.mover.move(delta);
    }
    update(delta) {
        this.updater.update(delta);
    }
    draw(delta) {
        this.container.canvas.drawParticle(this, delta);
    }
    getPosition() {
        return this.position.add(this.offset);
    }
    getRadius() {
        return this.bubble.radius || this.size.value;
    }
    getMass() {
        const radius = this.getRadius();
        return (Math.pow(radius, 2) * Math.PI) / 2;
    }
    getFillColor() {
        if (this.bubble.color) {
            return this.bubble.color;
        }
        if (this.backColor && Math.floor(this.rollAngle / (Math.PI / 2)) % 2) {
            return this.backColor;
        }
        return getHslFromAnimation(this.color);
    }
    getStrokeColor() {
        var _a, _b;
        return (_b = (_a = this.bubble.color) !== null && _a !== void 0 ? _a : getHslFromAnimation(this.strokeColor)) !== null && _b !== void 0 ? _b : this.getFillColor();
    }
    destroy(override) {
        this.destroyed = true;
        this.bubble.inRange = false;
        this.links = [];
        if (this.unbreakable) {
            return;
        }
        this.destroyed = true;
        this.bubble.inRange = false;
        for (const [, plugin] of this.container.plugins) {
            if (plugin.particleDestroyed) {
                plugin.particleDestroyed(this, override);
            }
        }
        if (override) {
            return;
        }
        const destroyOptions = this.options.destroy;
        if (destroyOptions.mode === DestroyMode.split) {
            this.split();
        }
    }
    reset() {
        this.loops.opacity = 0;
        this.loops.size = 0;
    }
    split() {
        const splitOptions = this.options.destroy.split;
        if (splitOptions.count >= 0 && this.splitCount++ > splitOptions.count) {
            return;
        }
        const rate = getRangeValue(splitOptions.rate.value);
        for (let i = 0; i < rate; i++) {
            this.container.particles.addSplitParticle(this);
        }
    }
    setColorAnimation(colorAnimation, colorValue) {
        if (colorAnimation.enable) {
            colorValue.velocity = (colorAnimation.speed / 100) * this.container.retina.reduceFactor;
            if (colorAnimation.sync) {
                return;
            }
            colorValue.status = AnimationStatus.increasing;
            colorValue.velocity *= Math.random();
            if (colorValue.value) {
                colorValue.value *= Math.random();
            }
        }
        else {
            colorValue.velocity = 0;
        }
    }
    calcPosition(container, position, zIndex, tryCount = 0) {
        var _a, _b;
        for (const [, plugin] of container.plugins) {
            const pluginPos = plugin.particlePosition !== undefined ? plugin.particlePosition(position, this) : undefined;
            if (pluginPos !== undefined) {
                return Vector3d.create(pluginPos.x, pluginPos.y, zIndex);
            }
        }
        const canvasSize = container.canvas.size;
        const pos = Vector3d.create((_a = position === null || position === void 0 ? void 0 : position.x) !== null && _a !== void 0 ? _a : Math.random() * canvasSize.width, (_b = position === null || position === void 0 ? void 0 : position.y) !== null && _b !== void 0 ? _b : Math.random() * canvasSize.height, zIndex);
        const outMode = this.options.move.outMode;
        if (isInArray(outMode, OutMode.bounce) || isInArray(outMode, OutMode.bounceHorizontal)) {
            if (pos.x > container.canvas.size.width - this.size.value * 2) {
                pos.x -= this.size.value;
            }
            else if (pos.x < this.size.value * 2) {
                pos.x += this.size.value;
            }
        }
        if (isInArray(outMode, OutMode.bounce) || isInArray(outMode, OutMode.bounceVertical)) {
            if (pos.y > container.canvas.size.height - this.size.value * 2) {
                pos.y -= this.size.value;
            }
            else if (pos.y < this.size.value * 2) {
                pos.y += this.size.value;
            }
        }
        if (this.checkOverlap(pos, tryCount)) {
            return this.calcPosition(container, undefined, zIndex, tryCount + 1);
        }
        return pos;
    }
    checkOverlap(pos, tryCount = 0) {
        const overlapOptions = this.options.collisions.overlap;
        if (!overlapOptions.enable) {
            const retries = overlapOptions.retries;
            if (retries >= 0 && tryCount > retries) {
                throw new Error("Particle is overlapping and can't be placed");
            }
            let overlaps = false;
            for (const particle of this.container.particles.array) {
                if (getDistance(pos, particle.position) < this.size.value + particle.size.value) {
                    overlaps = true;
                    break;
                }
            }
            return overlaps;
        }
        return false;
    }
    calculateVelocity() {
        const baseVelocity = getParticleBaseVelocity(this.direction);
        const res = baseVelocity.copy();
        const moveOptions = this.options.move;
        const rad = (Math.PI / 180) * moveOptions.angle.value;
        const radOffset = (Math.PI / 180) * moveOptions.angle.offset;
        const range = {
            left: radOffset - rad / 2,
            right: radOffset + rad / 2,
        };
        if (!moveOptions.straight) {
            res.angle += randomInRange(setRangeValue(range.left, range.right));
        }
        if (moveOptions.random && typeof moveOptions.speed === "number") {
            res.length *= Math.random();
        }
        return res;
    }
    loadImageShape(container, drawer) {
        var _a, _b, _c, _d, _e;
        if (!(this.shape === ShapeType.image || this.shape === ShapeType.images)) {
            return;
        }
        const imageDrawer = drawer;
        const images = imageDrawer.getImages(container).images;
        const imageData = this.shapeData;
        const image = (_a = images.find((t) => t.source === imageData.src)) !== null && _a !== void 0 ? _a : images[0];
        const color = this.getFillColor();
        let imageRes;
        if (!image) {
            return;
        }
        if (image.svgData !== undefined && imageData.replaceColor && color) {
            const svgColoredData = replaceColorSvg(image, color, this.opacity.value);
            const svg = new Blob([svgColoredData], { type: "image/svg+xml" });
            const domUrl = URL || window.URL || window.webkitURL || window;
            const url = domUrl.createObjectURL(svg);
            const img = new Image();
            imageRes = {
                data: Object.assign(Object.assign({}, image), { svgData: svgColoredData }),
                loaded: false,
                ratio: imageData.width / imageData.height,
                replaceColor: (_b = imageData.replaceColor) !== null && _b !== void 0 ? _b : imageData.replace_color,
                source: imageData.src,
            };
            img.addEventListener("load", () => {
                if (this.image) {
                    this.image.loaded = true;
                    image.element = img;
                }
                domUrl.revokeObjectURL(url);
            });
            img.addEventListener("error", () => {
                domUrl.revokeObjectURL(url);
                loadImage(imageData.src).then((img2) => {
                    if (this.image && img2) {
                        image.element = img2.element;
                        this.image.loaded = true;
                    }
                });
            });
            img.src = url;
        }
        else {
            imageRes = {
                data: image,
                loaded: true,
                ratio: imageData.width / imageData.height,
                replaceColor: (_c = imageData.replaceColor) !== null && _c !== void 0 ? _c : imageData.replace_color,
                source: imageData.src,
            };
        }
        if (!imageRes.ratio) {
            imageRes.ratio = 1;
        }
        const fill = (_d = imageData.fill) !== null && _d !== void 0 ? _d : this.fill;
        const close = (_e = imageData.close) !== null && _e !== void 0 ? _e : this.close;
        return {
            image: imageRes,
            fill,
            close,
        };
    }
    loadLife() {
        const container = this.container;
        const particlesOptions = this.options;
        const lifeOptions = particlesOptions.life;
        const life = {
            delay: container.retina.reduceFactor
                ? ((getRangeValue(lifeOptions.delay.value) * (lifeOptions.delay.sync ? 1 : Math.random())) /
                    container.retina.reduceFactor) *
                    1000
                : 0,
            delayTime: 0,
            duration: container.retina.reduceFactor
                ? ((getRangeValue(lifeOptions.duration.value) * (lifeOptions.duration.sync ? 1 : Math.random())) /
                    container.retina.reduceFactor) *
                    1000
                : 0,
            time: 0,
            count: particlesOptions.life.count,
        };
        if (life.duration <= 0) {
            life.duration = -1;
        }
        if (life.count <= 0) {
            life.count = -1;
        }
        return life;
    }
}
