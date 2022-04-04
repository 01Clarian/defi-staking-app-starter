import { calculateBounds, clamp, getValue, isPointInside, randomInRange, setRangeValue } from "../../Utils";
import { AnimationStatus, DestroyType, OutMode, OutModeDirection } from "../../Enums";
function bounceHorizontal(data) {
    if (!(data.outMode === OutMode.bounce ||
        data.outMode === OutMode.bounceHorizontal ||
        data.outMode === "bounceHorizontal" ||
        data.outMode === OutMode.split)) {
        return;
    }
    const velocity = data.particle.velocity.x;
    if (!((data.direction === OutModeDirection.right && data.bounds.right >= data.canvasSize.width && velocity > 0) ||
        (data.direction === OutModeDirection.left && data.bounds.left <= 0 && velocity < 0))) {
        return;
    }
    const newVelocity = getValue(data.particle.options.bounce.horizontal);
    data.particle.velocity.x *= -newVelocity;
    const minPos = data.offset.x + data.size;
    if (data.bounds.right >= data.canvasSize.width) {
        data.particle.position.x = data.canvasSize.width - minPos;
    }
    else if (data.bounds.left <= 0) {
        data.particle.position.x = minPos;
    }
    if (data.outMode === OutMode.split) {
        data.particle.destroy();
    }
}
function bounceVertical(data) {
    if (!(data.outMode === OutMode.bounce ||
        data.outMode === OutMode.bounceVertical ||
        data.outMode === "bounceVertical" ||
        data.outMode === OutMode.split)) {
        return;
    }
    const velocity = data.particle.velocity.y;
    if (!((data.direction === OutModeDirection.bottom &&
        data.bounds.bottom >= data.canvasSize.height &&
        velocity > 0) ||
        (data.direction === OutModeDirection.top && data.bounds.top <= 0 && velocity < 0))) {
        return;
    }
    const newVelocity = getValue(data.particle.options.bounce.vertical);
    data.particle.velocity.y *= -newVelocity;
    const minPos = data.offset.y + data.size;
    if (data.bounds.bottom >= data.canvasSize.height) {
        data.particle.position.y = data.canvasSize.height - minPos;
    }
    else if (data.bounds.top <= 0) {
        data.particle.position.y = minPos;
    }
    if (data.outMode === OutMode.split) {
        data.particle.destroy();
    }
}
function checkDestroy(particle, destroy, value, minValue, maxValue) {
    switch (destroy) {
        case DestroyType.max:
            if (value >= maxValue) {
                particle.destroy();
            }
            break;
        case DestroyType.min:
            if (value <= minValue) {
                particle.destroy();
            }
            break;
    }
}
export class Updater {
    constructor(container, particle) {
        this.container = container;
        this.particle = particle;
    }
    update(delta) {
        if (this.particle.destroyed) {
            return;
        }
        this.updateLife(delta);
        if (this.particle.destroyed || this.particle.spawning) {
            return;
        }
        this.updateOpacity(delta);
        this.updateSize(delta);
        this.updateAngle(delta);
        this.updateTilt(delta);
        this.updateRoll(delta);
        this.updateWobble(delta);
        this.updateColor(delta);
        this.updateStrokeColor(delta);
        this.updateOutModes(delta);
    }
    updateLife(delta) {
        const particle = this.particle;
        let justSpawned = false;
        if (particle.spawning) {
            particle.life.delayTime += delta.value;
            if (particle.life.delayTime >= particle.life.delay) {
                justSpawned = true;
                particle.spawning = false;
                particle.life.delayTime = 0;
                particle.life.time = 0;
            }
        }
        if (particle.life.duration === -1) {
            return;
        }
        if (particle.spawning) {
            return;
        }
        if (justSpawned) {
            particle.life.time = 0;
        }
        else {
            particle.life.time += delta.value;
        }
        if (particle.life.time < particle.life.duration) {
            return;
        }
        particle.life.time = 0;
        if (particle.life.count > 0) {
            particle.life.count--;
        }
        if (particle.life.count === 0) {
            particle.destroy();
            return;
        }
        const canvasSize = this.container.canvas.size;
        particle.position.x = randomInRange(setRangeValue(0, canvasSize.width));
        particle.position.y = randomInRange(setRangeValue(0, canvasSize.height));
        particle.spawning = true;
        particle.life.delayTime = 0;
        particle.life.time = 0;
        particle.reset();
        const lifeOptions = particle.options.life;
        particle.life.delay = getValue(lifeOptions.delay) * 1000;
        particle.life.duration = getValue(lifeOptions.duration) * 1000;
    }
    updateOpacity(delta) {
        var _a, _b;
        const particle = this.particle;
        const opacityOpt = particle.options.opacity;
        const opacityAnim = opacityOpt.animation;
        const minValue = particle.opacity.min;
        const maxValue = particle.opacity.max;
        if (!(!particle.destroyed &&
            opacityAnim.enable &&
            (opacityAnim.count <= 0 || particle.loops.opacity < opacityAnim.count))) {
            return;
        }
        switch (particle.opacity.status) {
            case AnimationStatus.increasing:
                if (particle.opacity.value >= maxValue) {
                    particle.opacity.status = AnimationStatus.decreasing;
                    particle.loops.opacity++;
                }
                else {
                    particle.opacity.value += ((_a = particle.opacity.velocity) !== null && _a !== void 0 ? _a : 0) * delta.factor;
                }
                break;
            case AnimationStatus.decreasing:
                if (particle.opacity.value <= minValue) {
                    particle.opacity.status = AnimationStatus.increasing;
                    particle.loops.opacity++;
                }
                else {
                    particle.opacity.value -= ((_b = particle.opacity.velocity) !== null && _b !== void 0 ? _b : 0) * delta.factor;
                }
                break;
        }
        checkDestroy(particle, opacityAnim.destroy, particle.opacity.value, minValue, maxValue);
        if (!particle.destroyed) {
            particle.opacity.value = clamp(particle.opacity.value, minValue, maxValue);
        }
    }
    updateSize(delta) {
        var _a;
        const particle = this.particle;
        const sizeOpt = particle.options.size;
        const sizeAnim = sizeOpt.animation;
        const sizeVelocity = ((_a = particle.size.velocity) !== null && _a !== void 0 ? _a : 0) * delta.factor;
        const minValue = particle.size.min;
        const maxValue = particle.size.max;
        if (!(!particle.destroyed && sizeAnim.enable && (sizeAnim.count <= 0 || particle.loops.size < sizeAnim.count))) {
            return;
        }
        switch (particle.size.status) {
            case AnimationStatus.increasing:
                if (particle.size.value >= maxValue) {
                    particle.size.status = AnimationStatus.decreasing;
                    particle.loops.size++;
                }
                else {
                    particle.size.value += sizeVelocity;
                }
                break;
            case AnimationStatus.decreasing:
                if (particle.size.value <= minValue) {
                    particle.size.status = AnimationStatus.increasing;
                    particle.loops.size++;
                }
                else {
                    particle.size.value -= sizeVelocity;
                }
        }
        checkDestroy(particle, sizeAnim.destroy, particle.size.value, minValue, maxValue);
        if (!particle.destroyed) {
            particle.size.value = clamp(particle.size.value, minValue, maxValue);
        }
    }
    updateAngle(delta) {
        var _a;
        const particle = this.particle;
        const rotate = particle.options.rotate;
        const rotateAnimation = rotate.animation;
        const speed = ((_a = particle.rotate.velocity) !== null && _a !== void 0 ? _a : 0) * delta.factor;
        const max = 2 * Math.PI;
        if (!rotateAnimation.enable) {
            return;
        }
        switch (particle.rotate.status) {
            case AnimationStatus.increasing:
                particle.rotate.value += speed;
                if (particle.rotate.value > max) {
                    particle.rotate.value -= max;
                }
                break;
            case AnimationStatus.decreasing:
            default:
                particle.rotate.value -= speed;
                if (particle.rotate.value < 0) {
                    particle.rotate.value += max;
                }
                break;
        }
    }
    updateTilt(delta) {
        var _a;
        const particle = this.particle;
        const tilt = particle.options.tilt;
        const tiltAnimation = tilt.animation;
        const speed = ((_a = particle.tilt.velocity) !== null && _a !== void 0 ? _a : 0) * delta.factor;
        const max = 2 * Math.PI;
        if (!tiltAnimation.enable) {
            return;
        }
        switch (particle.tilt.status) {
            case AnimationStatus.increasing:
                particle.tilt.value += speed;
                if (particle.tilt.value > max) {
                    particle.tilt.value -= max;
                }
                break;
            case AnimationStatus.decreasing:
            default:
                particle.tilt.value -= speed;
                if (particle.tilt.value < 0) {
                    particle.tilt.value += max;
                }
                break;
        }
    }
    updateRoll(delta) {
        const particle = this.particle;
        const roll = particle.options.roll;
        const speed = particle.rollSpeed * delta.factor;
        const max = 2 * Math.PI;
        if (!roll.enable) {
            return;
        }
        particle.rollAngle += speed;
        if (particle.rollAngle > max) {
            particle.rollAngle -= max;
        }
    }
    updateWobble(delta) {
        const particle = this.particle;
        const wobble = particle.options.wobble;
        const speed = particle.wobbleSpeed * delta.factor;
        const distance = (particle.wobbleDistance * delta.factor) / (1000 / 60);
        const max = 2 * Math.PI;
        if (!wobble.enable) {
            return;
        }
        particle.wobbleAngle += speed;
        if (particle.wobbleAngle > max) {
            particle.wobbleAngle -= max;
        }
        particle.position.x += distance * Math.cos(particle.wobbleAngle);
        particle.position.y += distance * Math.abs(Math.sin(particle.wobbleAngle));
    }
    updateColor(delta) {
        var _a, _b, _c;
        const particle = this.particle;
        const animationOptions = particle.options.color.animation;
        if (((_a = particle.color) === null || _a === void 0 ? void 0 : _a.h) !== undefined) {
            this.updateColorValue(particle, delta, particle.color.h, animationOptions.h, 360, false);
        }
        if (((_b = particle.color) === null || _b === void 0 ? void 0 : _b.s) !== undefined) {
            this.updateColorValue(particle, delta, particle.color.s, animationOptions.s, 100, true);
        }
        if (((_c = particle.color) === null || _c === void 0 ? void 0 : _c.l) !== undefined) {
            this.updateColorValue(particle, delta, particle.color.l, animationOptions.l, 100, true);
        }
    }
    updateStrokeColor(delta) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        const particle = this.particle;
        if (!particle.stroke.color) {
            return;
        }
        const animationOptions = particle.stroke.color.animation;
        const valueAnimations = animationOptions;
        if (valueAnimations.enable !== undefined) {
            const hue = (_b = (_a = particle.strokeColor) === null || _a === void 0 ? void 0 : _a.h) !== null && _b !== void 0 ? _b : (_c = particle.color) === null || _c === void 0 ? void 0 : _c.h;
            if (hue) {
                this.updateColorValue(particle, delta, hue, valueAnimations, 360, false);
            }
        }
        else {
            const hslAnimations = animationOptions;
            const h = (_e = (_d = particle.strokeColor) === null || _d === void 0 ? void 0 : _d.h) !== null && _e !== void 0 ? _e : (_f = particle.color) === null || _f === void 0 ? void 0 : _f.h;
            if (h) {
                this.updateColorValue(particle, delta, h, hslAnimations.h, 360, false);
            }
            const s = (_h = (_g = particle.strokeColor) === null || _g === void 0 ? void 0 : _g.s) !== null && _h !== void 0 ? _h : (_j = particle.color) === null || _j === void 0 ? void 0 : _j.s;
            if (s) {
                this.updateColorValue(particle, delta, s, hslAnimations.s, 100, true);
            }
            const l = (_l = (_k = particle.strokeColor) === null || _k === void 0 ? void 0 : _k.l) !== null && _l !== void 0 ? _l : (_m = particle.color) === null || _m === void 0 ? void 0 : _m.l;
            if (l) {
                this.updateColorValue(particle, delta, l, hslAnimations.l, 100, true);
            }
        }
    }
    updateColorValue(particle, delta, value, valueAnimation, max, decrease) {
        var _a;
        const colorValue = value;
        if (!colorValue || !valueAnimation.enable) {
            return;
        }
        const offset = randomInRange(valueAnimation.offset);
        const velocity = ((_a = value.velocity) !== null && _a !== void 0 ? _a : 0) * delta.factor + offset * 3.6;
        if (!decrease || colorValue.status === AnimationStatus.increasing) {
            colorValue.value += velocity;
            if (decrease && colorValue.value > max) {
                colorValue.status = AnimationStatus.decreasing;
                colorValue.value -= colorValue.value % max;
            }
        }
        else {
            colorValue.value -= velocity;
            if (colorValue.value < 0) {
                colorValue.status = AnimationStatus.increasing;
                colorValue.value += colorValue.value;
            }
        }
        if (colorValue.value > max) {
            colorValue.value %= max;
        }
    }
    updateOutModes(delta) {
        var _a, _b, _c, _d;
        const outModes = this.particle.options.move.outModes;
        this.updateOutMode(delta, (_a = outModes.bottom) !== null && _a !== void 0 ? _a : outModes.default, OutModeDirection.bottom);
        this.updateOutMode(delta, (_b = outModes.left) !== null && _b !== void 0 ? _b : outModes.default, OutModeDirection.left);
        this.updateOutMode(delta, (_c = outModes.right) !== null && _c !== void 0 ? _c : outModes.default, OutModeDirection.right);
        this.updateOutMode(delta, (_d = outModes.top) !== null && _d !== void 0 ? _d : outModes.default, OutModeDirection.top);
    }
    updateOutMode(delta, outMode, direction) {
        const container = this.container;
        const particle = this.particle;
        switch (outMode) {
            case OutMode.bounce:
            case OutMode.bounceVertical:
            case OutMode.bounceHorizontal:
            case "bounceVertical":
            case "bounceHorizontal":
            case OutMode.split:
                this.updateBounce(delta, direction, outMode);
                break;
            case OutMode.destroy:
                if (!isPointInside(particle.position, container.canvas.size, particle.getRadius(), direction)) {
                    container.particles.remove(particle, undefined, true);
                }
                break;
            case OutMode.out:
                if (!isPointInside(particle.position, container.canvas.size, particle.getRadius(), direction)) {
                    this.fixOutOfCanvasPosition(direction);
                }
                break;
            case OutMode.none:
                this.bounceNone(direction);
                break;
        }
    }
    fixOutOfCanvasPosition(direction) {
        const container = this.container;
        const particle = this.particle;
        const wrap = particle.options.move.warp;
        const canvasSize = container.canvas.size;
        const newPos = {
            bottom: canvasSize.height + particle.getRadius() - particle.offset.y,
            left: -particle.getRadius() - particle.offset.x,
            right: canvasSize.width + particle.getRadius() + particle.offset.x,
            top: -particle.getRadius() - particle.offset.y,
        };
        const sizeValue = particle.getRadius();
        const nextBounds = calculateBounds(particle.position, sizeValue);
        if (direction === OutModeDirection.right && nextBounds.left > canvasSize.width - particle.offset.x) {
            particle.position.x = newPos.left;
            if (!wrap) {
                particle.position.y = Math.random() * canvasSize.height;
            }
        }
        else if (direction === OutModeDirection.left && nextBounds.right < -particle.offset.x) {
            particle.position.x = newPos.right;
            if (!wrap) {
                particle.position.y = Math.random() * canvasSize.height;
            }
        }
        if (direction === OutModeDirection.bottom && nextBounds.top > canvasSize.height - particle.offset.y) {
            if (!wrap) {
                particle.position.x = Math.random() * canvasSize.width;
            }
            particle.position.y = newPos.top;
        }
        else if (direction === OutModeDirection.top && nextBounds.bottom < -particle.offset.y) {
            if (!wrap) {
                particle.position.x = Math.random() * canvasSize.width;
            }
            particle.position.y = newPos.bottom;
        }
    }
    updateBounce(delta, direction, outMode) {
        const container = this.container;
        const particle = this.particle;
        let handled = false;
        for (const [, plugin] of container.plugins) {
            if (plugin.particleBounce !== undefined) {
                handled = plugin.particleBounce(particle, delta, direction);
            }
            if (handled) {
                break;
            }
        }
        if (handled) {
            return;
        }
        const pos = particle.getPosition(), offset = particle.offset, size = particle.getRadius(), bounds = calculateBounds(pos, size), canvasSize = container.canvas.size;
        bounceHorizontal({ particle, outMode, direction, bounds, canvasSize, offset, size });
        bounceVertical({ particle, outMode, direction, bounds, canvasSize, offset, size });
    }
    bounceNone(direction) {
        const particle = this.particle;
        if ((particle.options.move.distance.horizontal &&
            (direction === OutModeDirection.left || direction === OutModeDirection.right)) ||
            (particle.options.move.distance.vertical &&
                (direction === OutModeDirection.top || direction === OutModeDirection.bottom))) {
            return;
        }
        const gravityOptions = particle.options.move.gravity;
        const container = this.container;
        if (!gravityOptions.enable) {
            if (!isPointInside(particle.position, container.canvas.size, particle.getRadius(), direction)) {
                container.particles.remove(particle);
            }
        }
        else {
            const position = particle.position;
            if ((!gravityOptions.inverse &&
                position.y > container.canvas.size.height &&
                direction === OutModeDirection.bottom) ||
                (gravityOptions.inverse && position.y < 0 && direction === OutModeDirection.top)) {
                container.particles.remove(particle);
            }
        }
    }
}
