import type { IEmitter } from "../Interfaces/IEmitter";
import type { RecursivePartial } from "../../../../Types";
import type { ICoordinates } from "../../../../Core/Interfaces/ICoordinates";
import { MoveDirection, MoveDirectionAlt } from "../../../../Enums";
import type { IParticles } from "../../../../Options/Interfaces/Particles/IParticles";
import { EmitterRate } from "./EmitterRate";
import { EmitterLife } from "./EmitterLife";
import { EmitterSize } from "./EmitterSize";
import type { IOptionLoader } from "../../../../Options/Interfaces/IOptionLoader";
import { AnimatableColor } from "../../../../Options/Classes/Particles/AnimatableColor";
export declare class Emitter implements IEmitter, IOptionLoader<IEmitter> {
    autoPlay: boolean;
    size?: EmitterSize;
    direction?: MoveDirection | keyof typeof MoveDirection | MoveDirectionAlt | number;
    life: EmitterLife;
    name?: string;
    particles?: RecursivePartial<IParticles>;
    position?: RecursivePartial<ICoordinates>;
    rate: EmitterRate;
    spawnColor?: AnimatableColor;
    constructor();
    load(data?: RecursivePartial<IEmitter>): void;
}
