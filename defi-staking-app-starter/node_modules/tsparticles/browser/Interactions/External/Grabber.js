import { Constants, getLinkRandomColor, getLinkColor, getDistance, isInArray } from "../../Utils";
import { HoverMode } from "../../Enums";
import { ExternalInteractorBase } from "../../Core/ExternalInteractorBase";
export class Grabber extends ExternalInteractorBase {
    constructor(container) {
        super(container);
    }
    isEnabled() {
        const container = this.container;
        const mouse = container.interactivity.mouse;
        const events = container.actualOptions.interactivity.events;
        if (!(events.onHover.enable && mouse.position)) {
            return false;
        }
        const hoverMode = events.onHover.mode;
        return isInArray(HoverMode.grab, hoverMode);
    }
    reset() {
    }
    interact() {
        var _a;
        const container = this.container;
        const options = container.actualOptions;
        const interactivity = options.interactivity;
        if (interactivity.events.onHover.enable && container.interactivity.status === Constants.mouseMoveEvent) {
            const mousePos = container.interactivity.mouse.position;
            if (mousePos === undefined) {
                return;
            }
            const distance = container.retina.grabModeDistance;
            const query = container.particles.quadTree.queryCircle(mousePos, distance);
            for (const particle of query) {
                const pos = particle.getPosition();
                const pointDistance = getDistance(pos, mousePos);
                if (pointDistance <= distance) {
                    const grabLineOptions = interactivity.modes.grab.links;
                    const lineOpacity = grabLineOptions.opacity;
                    const opacityLine = lineOpacity - (pointDistance * lineOpacity) / distance;
                    if (opacityLine > 0) {
                        const optColor = (_a = grabLineOptions.color) !== null && _a !== void 0 ? _a : particle.options.links.color;
                        if (!container.particles.grabLineColor) {
                            const linksOptions = container.actualOptions.interactivity.modes.grab.links;
                            container.particles.grabLineColor = getLinkRandomColor(optColor, linksOptions.blink, linksOptions.consent);
                        }
                        const colorLine = getLinkColor(particle, undefined, container.particles.grabLineColor);
                        if (colorLine === undefined) {
                            return;
                        }
                        container.canvas.drawGrabLine(particle, colorLine, opacityLine, mousePos);
                    }
                }
            }
        }
    }
}
