"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Linker = void 0;
const Utils_1 = require("../../Utils");
const ParticlesInteractorBase_1 = require("../../Core/ParticlesInteractorBase");
class Linker extends ParticlesInteractorBase_1.ParticlesInteractorBase {
    constructor(container) {
        super(container);
    }
    isEnabled(particle) {
        return particle.options.links.enable;
    }
    reset() {
    }
    interact(p1) {
        var _a;
        const container = this.container;
        const linkOpt1 = p1.options.links;
        const optOpacity = linkOpt1.opacity;
        const optDistance = (_a = p1.linksDistance) !== null && _a !== void 0 ? _a : container.retina.linksDistance;
        const canvasSize = container.canvas.size;
        const warp = linkOpt1.warp;
        const pos1 = p1.getPosition();
        const range = warp
            ? new Utils_1.CircleWarp(pos1.x, pos1.y, optDistance, canvasSize)
            : new Utils_1.Circle(pos1.x, pos1.y, optDistance);
        const query = container.particles.quadTree.query(range);
        for (const p2 of query) {
            const linkOpt2 = p2.options.links;
            if (p1 === p2 ||
                !linkOpt2.enable ||
                linkOpt1.id !== linkOpt2.id ||
                p2.spawning ||
                p2.destroyed ||
                p1.links.map((t) => t.destination).indexOf(p2) !== -1 ||
                p2.links.map((t) => t.destination).indexOf(p1) !== -1) {
                continue;
            }
            const pos2 = p2.getPosition();
            let distance = Utils_1.getDistance(pos1, pos2);
            if (warp && distance > optDistance) {
                const pos2NE = {
                    x: pos2.x - canvasSize.width,
                    y: pos2.y,
                };
                distance = Utils_1.getDistance(pos1, pos2NE);
                if (distance > optDistance) {
                    const pos2SE = {
                        x: pos2.x - canvasSize.width,
                        y: pos2.y - canvasSize.height,
                    };
                    distance = Utils_1.getDistance(pos1, pos2SE);
                    if (distance > optDistance) {
                        const pos2SW = {
                            x: pos2.x,
                            y: pos2.y - canvasSize.height,
                        };
                        distance = Utils_1.getDistance(pos1, pos2SW);
                    }
                }
            }
            if (distance > optDistance) {
                return;
            }
            const opacityLine = (1 - distance / optDistance) * optOpacity;
            const linksOptions = p1.options.links;
            let linkColor = linksOptions.id !== undefined
                ? container.particles.linksColors.get(linksOptions.id)
                : container.particles.linksColor;
            if (!linkColor) {
                const optColor = linksOptions.color;
                linkColor = Utils_1.getLinkRandomColor(optColor, linksOptions.blink, linksOptions.consent);
                if (linksOptions.id !== undefined) {
                    container.particles.linksColors.set(linksOptions.id, linkColor);
                }
                else {
                    container.particles.linksColor = linkColor;
                }
            }
            p1.links.push({
                destination: p2,
                opacity: opacityLine,
            });
        }
    }
}
exports.Linker = Linker;
