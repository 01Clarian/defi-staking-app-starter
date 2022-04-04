import { IMoveGravity } from "../../../Interfaces/Particles/Move/IMoveGravity";
import { IOptionLoader } from "../../../Interfaces/IOptionLoader";
import { RecursivePartial } from "../../../../Types";
export declare class MoveGravity implements IMoveGravity, IOptionLoader<IMoveGravity> {
    acceleration: number;
    enable: boolean;
    inverse: boolean;
    maxSpeed: number;
    constructor();
    load(data?: RecursivePartial<IMoveGravity>): void;
}
