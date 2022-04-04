"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lighter = void 0;
const Utils_1 = require("../../Utils");
const Enums_1 = require("../../Enums");
const ParticlesInteractorBase_1 = require("../../Core/ParticlesInteractorBase");
class Lighter extends ParticlesInteractorBase_1.ParticlesInteractorBase {
    constructor(container) {
        super(container);
    }
    interact(particle) {
        const container = this.container;
        const options = container.actualOptions;
        if (options.interactivity.events.onHover.enable && container.interactivity.status === "mousemove") {
            const mousePos = this.container.interactivity.mouse.position;
            if (mousePos) {
                container.canvas.drawParticleShadow(particle, mousePos);
            }
        }
    }
    isEnabled() {
        const container = this.container;
        const mouse = container.interactivity.mouse;
        const events = container.actualOptions.interactivity.events;
        if (!(events.onHover.enable && mouse.position)) {
            return false;
        }
        const hoverMode = events.onHover.mode;
        return Utils_1.isInArray(Enums_1.HoverMode.light, hoverMode);
    }
    reset() {
    }
}
exports.Lighter = Lighter;
