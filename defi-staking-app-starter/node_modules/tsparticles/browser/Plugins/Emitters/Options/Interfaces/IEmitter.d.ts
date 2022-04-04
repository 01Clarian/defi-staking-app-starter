import type { ICoordinates } from "../../../../Core/Interfaces/ICoordinates";
import type { MoveDirection, MoveDirectionAlt } from "../../../../Enums";
import type { IParticles } from "../../../../Options/Interfaces/Particles/IParticles";
import type { IEmitterRate } from "./IEmitterRate";
import type { IEmitterLife } from "./IEmitterLife";
import type { RecursivePartial } from "../../../../Types";
import type { IEmitterSize } from "./IEmitterSize";
import type { IAnimatableColor } from "../../../../Options/Interfaces/Particles/IAnimatableColor";
export interface IEmitter {
    autoPlay: boolean;
    size?: IEmitterSize;
    direction?: MoveDirection | keyof typeof MoveDirection | MoveDirectionAlt | number;
    life: IEmitterLife;
    name?: string;
    particles?: RecursivePartial<IParticles>;
    position?: RecursivePartial<ICoordinates>;
    rate: IEmitterRate;
    spawnColor?: IAnimatableColor;
}
