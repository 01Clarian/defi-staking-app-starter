import { ICoordinates } from "../../../../Core/Interfaces/ICoordinates";
import { MoveDirection, MoveDirectionAlt } from "../../../../Enums";
import { IParticles } from "../../../../Options/Interfaces/Particles/IParticles";
import { IEmitterRate } from "./IEmitterRate";
import { IEmitterLife } from "./IEmitterLife";
import { RecursivePartial } from "../../../../Types";
import { IEmitterSize } from "./IEmitterSize";
import { IAnimatableColor } from "../../../../Options/Interfaces/Particles/IAnimatableColor";
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
