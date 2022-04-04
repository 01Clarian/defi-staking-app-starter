import { clamp, getDistance, getDistances, getRangeMax, getRangeValue, isInArray, isSsr, Plugins } from "../../Utils";
import { HoverMode } from "../../Enums";
function applyDistance(particle) {
    const initialPosition = particle.initialPosition;
    const { dx, dy } = getDistances(initialPosition, particle.position);
    const dxFixed = Math.abs(dx), dyFixed = Math.abs(dy);
    const hDistance = particle.maxDistance.horizontal;
    const vDistance = particle.maxDistance.vertical;
    if (!hDistance && !vDistance) {
        return;
    }
    if (((hDistance && dxFixed >= hDistance) || (vDistance && dyFixed >= vDistance)) && !particle.misplaced) {
        particle.misplaced = (!!hDistance && dxFixed > hDistance) || (!!vDistance && dyFixed > vDistance);
        if (hDistance) {
            particle.velocity.x = particle.velocity.y / 2 - particle.velocity.x;
        }
        if (vDistance) {
            particle.velocity.y = particle.velocity.x / 2 - particle.velocity.y;
        }
    }
    else if ((!hDistance || dxFixed < hDistance) && (!vDistance || dyFixed < vDistance) && particle.misplaced) {
        particle.misplaced = false;
    }
    else if (particle.misplaced) {
        const pos = particle.position, vel = particle.velocity;
        if (hDistance && ((pos.x < initialPosition.x && vel.x < 0) || (pos.x > initialPosition.x && vel.x > 0))) {
            vel.x *= -Math.random();
        }
        if (vDistance && ((pos.y < initialPosition.y && vel.y < 0) || (pos.y > initialPosition.y && vel.y > 0))) {
            vel.y *= -Math.random();
        }
    }
}
export class Mover {
    constructor(container, particle) {
        this.container = container;
        this.particle = particle;
    }
    move(delta) {
        const particle = this.particle;
        particle.bubble.inRange = false;
        particle.links = [];
        for (const [, plugin] of this.container.plugins) {
            if (particle.destroyed) {
                break;
            }
            if (plugin.particleUpdate) {
                plugin.particleUpdate(particle, delta);
            }
        }
        if (particle.destroyed) {
            return;
        }
        this.moveParticle(delta);
        this.moveParallax();
    }
    moveParticle(delta) {
        var _a, _b, _c;
        const particle = this.particle;
        const particlesOptions = particle.options;
        if (!particlesOptions.move.enable) {
            return;
        }
        const container = this.container;
        const slowFactor = this.getProximitySpeedFactor();
        const baseSpeed = ((_a = particle.moveSpeed) !== null && _a !== void 0 ? _a : getRangeValue(particle.options.move.speed) * container.retina.pixelRatio) *
            container.retina.reduceFactor;
        const maxSize = getRangeMax(particle.options.size.value) * container.retina.pixelRatio;
        const sizeFactor = particlesOptions.move.size ? particle.getRadius() / maxSize : 1;
        const moveSpeed = (baseSpeed / 2) * sizeFactor * slowFactor * delta.factor;
        const moveDrift = (_b = particle.moveDrift) !== null && _b !== void 0 ? _b : getRangeValue(particle.options.move.drift) * container.retina.pixelRatio;
        this.applyPath(delta);
        const gravityOptions = particlesOptions.move.gravity;
        const gravityFactor = gravityOptions.enable && gravityOptions.inverse ? -1 : 1;
        if (gravityOptions.enable) {
            particle.velocity.y += (gravityFactor * (gravityOptions.acceleration * delta.factor)) / (60 * moveSpeed);
        }
        if (moveSpeed) {
            particle.velocity.x += (moveDrift * delta.factor) / (60 * moveSpeed);
        }
        particle.velocity.multTo(1 - particle.options.move.decay);
        const velocity = particle.velocity.mult(moveSpeed);
        const maxSpeed = (_c = particle.maxSpeed) !== null && _c !== void 0 ? _c : container.retina.maxSpeed;
        if (gravityOptions.enable &&
            ((!gravityOptions.inverse && velocity.y >= 0 && velocity.y >= maxSpeed) ||
                (gravityOptions.inverse && velocity.y <= 0 && velocity.y <= -maxSpeed)) &&
            gravityOptions.maxSpeed > 0) {
            velocity.y = gravityFactor * maxSpeed;
            if (moveSpeed) {
                particle.velocity.y = velocity.y / moveSpeed;
            }
        }
        const zIndexOptions = particle.options.zIndex, zVelocityFactor = 1 - zIndexOptions.velocityRate * particle.zIndexFactor;
        velocity.multTo(zVelocityFactor);
        particle.position.addTo(velocity);
        if (particlesOptions.move.vibrate) {
            particle.position.x += Math.sin(particle.position.x * Math.cos(particle.position.y));
            particle.position.y += Math.cos(particle.position.y * Math.sin(particle.position.x));
        }
        const initialPosition = particle.initialPosition;
        const initialDistance = getDistance(initialPosition, particle.position);
        if (particle.maxDistance) {
            if (initialDistance >= particle.maxDistance && !particle.misplaced) {
                particle.misplaced = initialDistance > particle.maxDistance;
                particle.velocity.x = particle.velocity.y / 2 - particle.velocity.x;
                particle.velocity.y = particle.velocity.x / 2 - particle.velocity.y;
            }
            else if (initialDistance < particle.maxDistance && particle.misplaced) {
                particle.misplaced = false;
            }
            else if (particle.misplaced) {
                if ((particle.position.x < initialPosition.x && particle.velocity.x < 0) ||
                    (particle.position.x > initialPosition.x && particle.velocity.x > 0)) {
                    particle.velocity.x *= -Math.random();
                }
                if ((particle.position.y < initialPosition.y && particle.velocity.y < 0) ||
                    (particle.position.y > initialPosition.y && particle.velocity.y > 0)) {
                    particle.velocity.y *= -Math.random();
                }
            }
        }
        applyDistance(particle);
    }
    applyPath(delta) {
        const particle = this.particle;
        const particlesOptions = particle.options;
        const pathOptions = particlesOptions.move.path;
        const pathEnabled = pathOptions.enable;
        if (!pathEnabled) {
            return;
        }
        const container = this.container;
        if (particle.lastPathTime <= particle.pathDelay) {
            particle.lastPathTime += delta.value;
            return;
        }
        let generator = container.pathGenerator;
        if (pathOptions.generator) {
            const customGenerator = Plugins.getPathGenerator(pathOptions.generator);
            if (customGenerator) {
                generator = customGenerator;
            }
        }
        const path = generator.generate(particle);
        particle.velocity.addTo(path);
        if (pathOptions.clamp) {
            particle.velocity.x = clamp(particle.velocity.x, -1, 1);
            particle.velocity.y = clamp(particle.velocity.y, -1, 1);
        }
        particle.lastPathTime -= particle.pathDelay;
    }
    moveParallax() {
        const container = this.container;
        const options = container.actualOptions;
        if (isSsr() || !options.interactivity.events.onHover.parallax.enable) {
            return;
        }
        const particle = this.particle;
        const parallaxForce = options.interactivity.events.onHover.parallax.force;
        const mousePos = container.interactivity.mouse.position;
        if (!mousePos) {
            return;
        }
        const canvasCenter = {
            x: container.canvas.size.width / 2,
            y: container.canvas.size.height / 2,
        };
        const parallaxSmooth = options.interactivity.events.onHover.parallax.smooth;
        const factor = particle.getRadius() / parallaxForce;
        const tmp = {
            x: (mousePos.x - canvasCenter.x) * factor,
            y: (mousePos.y - canvasCenter.y) * factor,
        };
        particle.offset.x += (tmp.x - particle.offset.x) / parallaxSmooth;
        particle.offset.y += (tmp.y - particle.offset.y) / parallaxSmooth;
    }
    getProximitySpeedFactor() {
        const container = this.container;
        const options = container.actualOptions;
        const active = isInArray(HoverMode.slow, options.interactivity.events.onHover.mode);
        if (!active) {
            return 1;
        }
        const mousePos = this.container.interactivity.mouse.position;
        if (!mousePos) {
            return 1;
        }
        const particlePos = this.particle.getPosition();
        const dist = getDistance(mousePos, particlePos);
        const radius = container.retina.slowModeRadius;
        if (dist > radius) {
            return 1;
        }
        const proximityFactor = dist / radius || 0;
        const slowFactor = options.interactivity.modes.slow.factor;
        return proximityFactor / slowFactor;
    }
}
