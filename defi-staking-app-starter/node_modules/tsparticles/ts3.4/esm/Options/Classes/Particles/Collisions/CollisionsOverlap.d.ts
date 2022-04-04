import { RecursivePartial } from "../../../../Types";
import { IOptionLoader } from "../../../Interfaces/IOptionLoader";
import { ICollisionsOverlap } from "../../../Interfaces/Particles/Collisions/ICollisionsOverlap";
export declare class CollisionsOverlap implements ICollisionsOverlap, IOptionLoader<ICollisionsOverlap> {
    enable: boolean;
    retries: number;
    constructor();
    load(data?: RecursivePartial<ICollisionsOverlap>): void;
}
