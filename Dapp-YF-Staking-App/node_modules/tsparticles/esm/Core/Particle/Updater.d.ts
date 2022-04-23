import type { Container } from "../Container";
import type { Particle } from "../Particle";
import type { IColorAnimation } from "../../Options/Interfaces/IColorAnimation";
import { IDelta, IParticleValueAnimation } from "../Interfaces";
export declare class Updater {
    private readonly container;
    private readonly particle;
    constructor(container: Container, particle: Particle);
    update(delta: IDelta): void;
    private updateLife;
    private updateOpacity;
    private updateSize;
    private updateAngle;
    private updateTilt;
    private updateRoll;
    private updateWobble;
    private updateColor;
    private updateStrokeColor;
    updateColorValue(particle: Particle, delta: IDelta, value: IParticleValueAnimation<number>, valueAnimation: IColorAnimation, max: number, decrease: boolean): void;
    private updateOutModes;
    private updateOutMode;
    private fixOutOfCanvasPosition;
    private updateBounce;
    private bounceNone;
}
