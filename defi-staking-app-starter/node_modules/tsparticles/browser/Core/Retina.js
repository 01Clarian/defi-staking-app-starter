import { getRangeValue, isSsr } from "../Utils";
export class Retina {
    constructor(container) {
        this.container = container;
    }
    init() {
        const container = this.container;
        const options = container.actualOptions;
        this.pixelRatio = !options.detectRetina || isSsr() ? 1 : window.devicePixelRatio;
        const motionOptions = this.container.actualOptions.motion;
        if (motionOptions && (motionOptions.disable || motionOptions.reduce.value)) {
            if (isSsr() || typeof matchMedia === "undefined" || !matchMedia) {
                this.reduceFactor = 1;
            }
            else {
                const mediaQuery = matchMedia("(prefers-reduced-motion: reduce)");
                if (mediaQuery) {
                    this.handleMotionChange(mediaQuery);
                    const handleChange = () => {
                        this.handleMotionChange(mediaQuery);
                        container.refresh().catch(() => {
                        });
                    };
                    if (mediaQuery.addEventListener !== undefined) {
                        mediaQuery.addEventListener("change", handleChange);
                    }
                    else if (mediaQuery.addListener !== undefined) {
                        mediaQuery.addListener(handleChange);
                    }
                }
            }
        }
        else {
            this.reduceFactor = 1;
        }
        const ratio = this.pixelRatio;
        if (container.canvas.element) {
            const element = container.canvas.element;
            container.canvas.size.width = element.offsetWidth * ratio;
            container.canvas.size.height = element.offsetHeight * ratio;
        }
        const particles = options.particles;
        this.attractDistance = particles.move.attract.distance * ratio;
        this.linksDistance = particles.links.distance * ratio;
        this.linksWidth = particles.links.width * ratio;
        this.sizeAnimationSpeed = particles.size.animation.speed * ratio;
        this.maxSpeed = particles.move.gravity.maxSpeed * ratio;
        const modes = options.interactivity.modes;
        this.connectModeDistance = modes.connect.distance * ratio;
        this.connectModeRadius = modes.connect.radius * ratio;
        this.grabModeDistance = modes.grab.distance * ratio;
        this.repulseModeDistance = modes.repulse.distance * ratio;
        this.bounceModeDistance = modes.bounce.distance * ratio;
        this.attractModeDistance = modes.attract.distance * ratio;
        this.slowModeRadius = modes.slow.radius * ratio;
        this.bubbleModeDistance = modes.bubble.distance * ratio;
        if (modes.bubble.size) {
            this.bubbleModeSize = modes.bubble.size * ratio;
        }
    }
    initParticle(particle) {
        const options = particle.options;
        const ratio = this.pixelRatio;
        const moveDistance = options.move.distance;
        particle.attractDistance = options.move.attract.distance * ratio;
        particle.linksDistance = options.links.distance * ratio;
        particle.linksWidth = options.links.width * ratio;
        particle.moveDrift = getRangeValue(options.move.drift) * ratio;
        particle.moveSpeed = getRangeValue(options.move.speed) * ratio;
        particle.sizeAnimationSpeed = options.size.animation.speed * ratio;
        const maxDistance = particle.maxDistance;
        maxDistance.horizontal = moveDistance.horizontal !== undefined ? moveDistance.horizontal * ratio : undefined;
        maxDistance.vertical = moveDistance.vertical !== undefined ? moveDistance.vertical * ratio : undefined;
        particle.wobbleDistance = getRangeValue(options.wobble.distance) * ratio;
        particle.maxSpeed = options.move.gravity.maxSpeed * ratio;
    }
    handleMotionChange(mediaQuery) {
        const options = this.container.actualOptions;
        if (mediaQuery.matches) {
            const motion = options.motion;
            this.reduceFactor = motion.disable ? 0 : motion.reduce.value ? 1 / motion.reduce.factor : 1;
        }
        else {
            this.reduceFactor = 1;
        }
    }
}
