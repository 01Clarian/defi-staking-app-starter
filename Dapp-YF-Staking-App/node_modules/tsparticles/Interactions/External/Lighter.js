"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lighter = void 0;
const Utils_1 = require("../../Utils");
const Enums_1 = require("../../Enums");
const ExternalInteractorBase_1 = require("../../Core/ExternalInteractorBase");
class Lighter extends ExternalInteractorBase_1.ExternalInteractorBase {
    constructor(container) {
        super(container);
    }
    interact() {
        const container = this.container;
        const options = container.actualOptions;
        if (options.interactivity.events.onHover.enable && container.interactivity.status === "mousemove") {
            const mousePos = container.interactivity.mouse.position;
            if (!mousePos) {
                return;
            }
            container.canvas.drawLight(mousePos);
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
