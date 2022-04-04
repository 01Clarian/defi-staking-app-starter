"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repulser = void 0;
const Enums_1 = require("../../Enums");
const Utils_1 = require("../../Utils");
const Vector_1 = require("../../Core/Particle/Vector");
const ExternalInteractorBase_1 = require("../../Core/ExternalInteractorBase");
class Repulser extends ExternalInteractorBase_1.ExternalInteractorBase {
    constructor(container) {
        super(container);
    }
    isEnabled() {
        const container = this.container;
        const options = container.actualOptions;
        const mouse = container.interactivity.mouse;
        const events = options.interactivity.events;
        const divs = events.onDiv;
        const divRepulse = Utils_1.isDivModeEnabled(Enums_1.DivMode.repulse, divs);
        if (!(divRepulse || (events.onHover.enable && mouse.position) || (events.onClick.enable && mouse.clickPosition))) {
            return false;
        }
        const hoverMode = events.onHover.mode;
        const clickMode = events.onClick.mode;
        return Utils_1.isInArray(Enums_1.HoverMode.repulse, hoverMode) || Utils_1.isInArray(Enums_1.ClickMode.repulse, clickMode) || divRepulse;
    }
    reset() {
    }
    interact() {
        const container = this.container;
        const options = container.actualOptions;
        const mouseMoveStatus = container.interactivity.status === Utils_1.Constants.mouseMoveEvent;
        const events = options.interactivity.events;
        const hoverEnabled = events.onHover.enable;
        const hoverMode = events.onHover.mode;
        const clickEnabled = events.onClick.enable;
        const clickMode = events.onClick.mode;
        const divs = events.onDiv;
        if (mouseMoveStatus && hoverEnabled && Utils_1.isInArray(Enums_1.HoverMode.repulse, hoverMode)) {
            this.hoverRepulse();
        }
        else if (clickEnabled && Utils_1.isInArray(Enums_1.ClickMode.repulse, clickMode)) {
            this.clickRepulse();
        }
        else {
            Utils_1.divModeExecute(Enums_1.DivMode.repulse, divs, (selector, div) => this.singleSelectorRepulse(selector, div));
        }
    }
    singleSelectorRepulse(selector, div) {
        const container = this.container;
        const query = document.querySelectorAll(selector);
        if (!query.length) {
            return;
        }
        query.forEach((item) => {
            const elem = item;
            const pxRatio = container.retina.pixelRatio;
            const pos = {
                x: (elem.offsetLeft + elem.offsetWidth / 2) * pxRatio,
                y: (elem.offsetTop + elem.offsetHeight / 2) * pxRatio,
            };
            const repulseRadius = (elem.offsetWidth / 2) * pxRatio;
            const area = div.type === Enums_1.DivType.circle
                ? new Utils_1.Circle(pos.x, pos.y, repulseRadius)
                : new Utils_1.Rectangle(elem.offsetLeft * pxRatio, elem.offsetTop * pxRatio, elem.offsetWidth * pxRatio, elem.offsetHeight * pxRatio);
            const divs = container.actualOptions.interactivity.modes.repulse.divs;
            const divRepulse = Utils_1.divMode(divs, elem);
            this.processRepulse(pos, repulseRadius, area, divRepulse);
        });
    }
    hoverRepulse() {
        const container = this.container;
        const mousePos = container.interactivity.mouse.position;
        if (!mousePos) {
            return;
        }
        const repulseRadius = container.retina.repulseModeDistance;
        this.processRepulse(mousePos, repulseRadius, new Utils_1.Circle(mousePos.x, mousePos.y, repulseRadius));
    }
    processRepulse(position, repulseRadius, area, divRepulse) {
        var _a;
        const container = this.container;
        const repulseOptions = container.actualOptions.interactivity.modes.repulse;
        const query = container.particles.quadTree.query(area);
        for (const particle of query) {
            const { dx, dy, distance } = Utils_1.getDistances(particle.position, position);
            const normVec = {
                x: dx / distance,
                y: dy / distance,
            };
            const velocity = ((_a = divRepulse === null || divRepulse === void 0 ? void 0 : divRepulse.speed) !== null && _a !== void 0 ? _a : repulseOptions.speed) * repulseOptions.factor;
            const repulseFactor = Utils_1.clamp(Utils_1.calcEasing(1 - distance / repulseRadius, repulseOptions.easing) * velocity, 0, repulseOptions.maxSpeed);
            particle.position.x += normVec.x * repulseFactor;
            particle.position.y += normVec.y * repulseFactor;
        }
    }
    clickRepulse() {
        const container = this.container;
        if (!container.repulse.finish) {
            if (!container.repulse.count) {
                container.repulse.count = 0;
            }
            container.repulse.count++;
            if (container.repulse.count === container.particles.count) {
                container.repulse.finish = true;
            }
        }
        if (container.repulse.clicking) {
            const repulseDistance = container.retina.repulseModeDistance;
            const repulseRadius = Math.pow(repulseDistance / 6, 3);
            const mouseClickPos = container.interactivity.mouse.clickPosition;
            if (mouseClickPos === undefined) {
                return;
            }
            const range = new Utils_1.Circle(mouseClickPos.x, mouseClickPos.y, repulseRadius);
            const query = container.particles.quadTree.query(range);
            for (const particle of query) {
                const { dx, dy, distance } = Utils_1.getDistances(mouseClickPos, particle.position);
                const d = distance * distance;
                if (d <= repulseRadius) {
                    container.repulse.particles.push(particle);
                    const velocity = container.actualOptions.interactivity.modes.repulse.speed;
                    const v = Vector_1.Vector.create(dx, dy);
                    v.length = (-repulseRadius * velocity) / d;
                    particle.velocity.setTo(v);
                }
            }
        }
        else if (container.repulse.clicking === false) {
            for (const particle of container.repulse.particles) {
                particle.velocity.setTo(particle.initialVelocity);
            }
            container.repulse.particles = [];
        }
    }
}
exports.Repulser = Repulser;
