"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FrameManager = void 0;
class FrameManager {
    constructor(container) {
        this.container = container;
    }
    nextFrame(timestamp) {
        try {
            const container = this.container;
            if (container.lastFrameTime !== undefined &&
                timestamp < container.lastFrameTime + 1000 / container.fpsLimit) {
                container.draw();
                return;
            }
            const deltaValue = timestamp - container.lastFrameTime;
            const delta = {
                value: deltaValue,
                factor: (60 * deltaValue) / 1000,
            };
            container.lastFrameTime = timestamp;
            container.particles.draw(delta);
            if (container.getAnimationStatus()) {
                container.draw();
            }
        }
        catch (e) {
            console.error("tsParticles error in animation loop", e);
        }
    }
}
exports.FrameManager = FrameManager;
