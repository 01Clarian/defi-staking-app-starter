import { getDistances } from "../../Utils";
import { ParticlesInteractorBase } from "../../Core/ParticlesInteractorBase";
export class Attractor extends ParticlesInteractorBase {
    constructor(container) {
        super(container);
    }
    interact(p1) {
        var _a;
        const container = this.container;
        const distance = (_a = p1.attractDistance) !== null && _a !== void 0 ? _a : container.retina.attractDistance;
        const pos1 = p1.getPosition();
        const query = container.particles.quadTree.queryCircle(pos1, distance);
        for (const p2 of query) {
            if (p1 === p2 || !p2.options.move.attract.enable || p2.destroyed || p2.spawning) {
                continue;
            }
            const pos2 = p2.getPosition();
            const { dx, dy } = getDistances(pos1, pos2);
            const rotate = p1.options.move.attract.rotate;
            const ax = dx / (rotate.x * 1000);
            const ay = dy / (rotate.y * 1000);
            p1.velocity.x -= ax;
            p1.velocity.y -= ay;
            p2.velocity.x += ax;
            p2.velocity.y += ay;
        }
    }
    isEnabled(particle) {
        return particle.options.move.attract.enable;
    }
    reset() {
    }
}
