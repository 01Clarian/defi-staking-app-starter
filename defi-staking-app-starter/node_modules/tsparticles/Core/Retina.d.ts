import type { Container } from "./Container";
import type { Particle } from "./Particle";
export declare class Retina {
    private readonly container;
    reduceFactor: number;
    bubbleModeDistance: number;
    bubbleModeSize?: number;
    connectModeDistance: number;
    connectModeRadius: number;
    grabModeDistance: number;
    repulseModeDistance: number;
    attractModeDistance: number;
    attractDistance: number;
    slowModeRadius: number;
    linksDistance: number;
    linksWidth: number;
    sizeValue: number;
    sizeAnimationSpeed: number;
    pixelRatio: number;
    bounceModeDistance: number;
    maxSpeed: number;
    constructor(container: Container);
    init(): void;
    initParticle(particle: Particle): void;
    private handleMotionChange;
}
