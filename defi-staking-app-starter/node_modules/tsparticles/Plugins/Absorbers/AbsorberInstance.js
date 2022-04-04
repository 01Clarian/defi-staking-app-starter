"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbsorberInstance = void 0;
const Utils_1 = require("../../Utils");
const Vector_1 = require("../../Core/Particle/Vector");
class AbsorberInstance {
    constructor(absorbers, container, options, position) {
        var _a, _b, _c;
        this.absorbers = absorbers;
        this.container = container;
        this.initialPosition = position ? Vector_1.Vector.create(position.x, position.y) : undefined;
        this.options = options;
        this.dragging = false;
        this.name = this.options.name;
        this.opacity = this.options.opacity;
        this.size = Utils_1.getValue(options.size) * container.retina.pixelRatio;
        this.mass = this.size * options.size.density * container.retina.reduceFactor;
        const limit = options.size.limit;
        this.limit = limit !== undefined ? limit * container.retina.pixelRatio * container.retina.reduceFactor : limit;
        const color = typeof options.color === "string" ? { value: options.color } : options.color;
        this.color = (_a = Utils_1.colorToRgb(color)) !== null && _a !== void 0 ? _a : {
            b: 0,
            g: 0,
            r: 0,
        };
        this.position = (_c = (_b = this.initialPosition) === null || _b === void 0 ? void 0 : _b.copy()) !== null && _c !== void 0 ? _c : this.calcPosition();
    }
    attract(particle) {
        const options = this.options;
        if (options.draggable) {
            const mouse = this.container.interactivity.mouse;
            if (mouse.clicking && mouse.downPosition) {
                const mouseDist = Utils_1.getDistance(this.position, mouse.downPosition);
                if (mouseDist <= this.size) {
                    this.dragging = true;
                }
            }
            else {
                this.dragging = false;
            }
            if (this.dragging && mouse.position) {
                this.position.x = mouse.position.x;
                this.position.y = mouse.position.y;
            }
        }
        const pos = particle.getPosition();
        const { dx, dy, distance } = Utils_1.getDistances(this.position, pos);
        const v = Vector_1.Vector.create(dx, dy);
        v.length = (this.mass / Math.pow(distance, 2)) * this.container.retina.reduceFactor;
        if (distance < this.size + particle.getRadius()) {
            const sizeFactor = particle.getRadius() * 0.033 * this.container.retina.pixelRatio;
            if (this.size > particle.getRadius() && distance < this.size - particle.getRadius()) {
                if (options.destroy) {
                    particle.destroy();
                }
                else {
                    particle.needsNewPosition = true;
                    this.updateParticlePosition(particle, v);
                }
            }
            else {
                if (options.destroy) {
                    particle.size.value -= sizeFactor;
                }
                this.updateParticlePosition(particle, v);
            }
            if (this.limit === undefined || this.size < this.limit) {
                this.size += sizeFactor;
            }
            this.mass += sizeFactor * this.options.size.density * this.container.retina.reduceFactor;
        }
        else {
            this.updateParticlePosition(particle, v);
        }
    }
    resize() {
        const initialPosition = this.initialPosition;
        this.position =
            initialPosition && Utils_1.isPointInside(initialPosition, this.container.canvas.size)
                ? initialPosition
                : this.calcPosition();
    }
    draw(context) {
        context.translate(this.position.x, this.position.y);
        context.beginPath();
        context.arc(0, 0, this.size, 0, Math.PI * 2, false);
        context.closePath();
        context.fillStyle = Utils_1.getStyleFromRgb(this.color, this.opacity);
        context.fill();
    }
    calcPosition() {
        var _a, _b;
        const container = this.container;
        const percentPosition = this.options.position;
        return Vector_1.Vector.create((((_a = percentPosition === null || percentPosition === void 0 ? void 0 : percentPosition.x) !== null && _a !== void 0 ? _a : Math.random() * 100) / 100) * container.canvas.size.width, (((_b = percentPosition === null || percentPosition === void 0 ? void 0 : percentPosition.y) !== null && _b !== void 0 ? _b : Math.random() * 100) / 100) * container.canvas.size.height);
    }
    updateParticlePosition(particle, v) {
        var _a;
        if (particle.destroyed) {
            return;
        }
        const canvasSize = this.container.canvas.size;
        if (particle.needsNewPosition) {
            const pSize = particle.getRadius();
            particle.position.x = Math.random() * (canvasSize.width - pSize * 2) + pSize;
            particle.position.y = Math.random() * (canvasSize.height - pSize * 2) + pSize;
            particle.needsNewPosition = false;
        }
        if (this.options.orbits) {
            if (particle.orbit === undefined) {
                particle.orbit = Vector_1.Vector.create(0, 0);
                particle.orbit.length = Utils_1.getDistance(particle.getPosition(), this.position);
                particle.orbit.angle = Math.random() * Math.PI * 2;
            }
            if (particle.orbit.length <= this.size && !this.options.destroy) {
                particle.orbit.length = Math.random() * Math.max(canvasSize.width, canvasSize.height);
            }
            particle.velocity.x = 0;
            particle.velocity.y = 0;
            particle.position.setTo(particle.orbit.add(this.position));
            particle.orbit.length -= v.length;
            particle.orbit.angle +=
                (((_a = particle.moveSpeed) !== null && _a !== void 0 ? _a : Utils_1.getRangeValue(particle.options.move.speed) * this.container.retina.pixelRatio) /
                    100) *
                    this.container.retina.reduceFactor;
        }
        else {
            particle.velocity.addTo(v);
        }
    }
}
exports.AbsorberInstance = AbsorberInstance;
