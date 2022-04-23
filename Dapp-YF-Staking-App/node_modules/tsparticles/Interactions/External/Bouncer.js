"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bouncer = void 0;
const Utils_1 = require("../../Utils");
const Enums_1 = require("../../Enums");
const Vector_1 = require("../../Core/Particle/Vector");
const ExternalInteractorBase_1 = require("../../Core/ExternalInteractorBase");
class Bouncer extends ExternalInteractorBase_1.ExternalInteractorBase {
    constructor(container) {
        super(container);
    }
    isEnabled() {
        const container = this.container;
        const options = container.actualOptions;
        const mouse = container.interactivity.mouse;
        const events = options.interactivity.events;
        const divs = events.onDiv;
        return ((mouse.position && events.onHover.enable && Utils_1.isInArray(Enums_1.HoverMode.bounce, events.onHover.mode)) ||
            Utils_1.isDivModeEnabled(Enums_1.DivMode.bounce, divs));
    }
    interact() {
        const container = this.container;
        const options = container.actualOptions;
        const events = options.interactivity.events;
        const mouseMoveStatus = container.interactivity.status === Utils_1.Constants.mouseMoveEvent;
        const hoverEnabled = events.onHover.enable;
        const hoverMode = events.onHover.mode;
        const divs = events.onDiv;
        if (mouseMoveStatus && hoverEnabled && Utils_1.isInArray(Enums_1.HoverMode.bounce, hoverMode)) {
            this.processMouseBounce();
        }
        else {
            Utils_1.divModeExecute(Enums_1.DivMode.bounce, divs, (selector, div) => this.singleSelectorBounce(selector, div));
        }
    }
    reset() {
    }
    processMouseBounce() {
        const container = this.container;
        const pxRatio = container.retina.pixelRatio;
        const tolerance = 10 * pxRatio;
        const mousePos = container.interactivity.mouse.position;
        const radius = container.retina.bounceModeDistance;
        if (mousePos) {
            this.processBounce(mousePos, radius, new Utils_1.Circle(mousePos.x, mousePos.y, radius + tolerance));
        }
    }
    singleSelectorBounce(selector, div) {
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
            const radius = (elem.offsetWidth / 2) * pxRatio;
            const tolerance = 10 * pxRatio;
            const area = div.type === Enums_1.DivType.circle
                ? new Utils_1.Circle(pos.x, pos.y, radius + tolerance)
                : new Utils_1.Rectangle(elem.offsetLeft * pxRatio - tolerance, elem.offsetTop * pxRatio - tolerance, elem.offsetWidth * pxRatio + tolerance * 2, elem.offsetHeight * pxRatio + tolerance * 2);
            this.processBounce(pos, radius, area);
        });
    }
    processBounce(position, radius, area) {
        const query = this.container.particles.quadTree.query(area);
        for (const particle of query) {
            if (area instanceof Utils_1.Circle) {
                Utils_1.circleBounce(Utils_1.circleBounceDataFromParticle(particle), {
                    position,
                    radius,
                    mass: (Math.pow(radius, 2) * Math.PI) / 2,
                    velocity: Vector_1.Vector.create(0, 0),
                    factor: {
                        horizontal: 0,
                        vertical: 0,
                    },
                });
            }
            else if (area instanceof Utils_1.Rectangle) {
                Utils_1.rectBounce(particle, Utils_1.calculateBounds(position, radius));
            }
        }
    }
}
exports.Bouncer = Bouncer;
