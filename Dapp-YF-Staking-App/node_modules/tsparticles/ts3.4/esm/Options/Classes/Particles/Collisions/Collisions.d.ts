import { ICollisions } from "../../../Interfaces/Particles/Collisions/ICollisions";
import { CollisionMode } from "../../../../Enums";
import { RecursivePartial } from "../../../../Types";
import { IOptionLoader } from "../../../Interfaces/IOptionLoader";
import { Bounce } from "../Bounce/Bounce";
import { CollisionsOverlap } from "./CollisionsOverlap";
export declare class Collisions implements ICollisions, IOptionLoader<ICollisions> {
    bounce: Bounce;
    enable: boolean;
    mode: CollisionMode | keyof typeof CollisionMode;
    overlap: CollisionsOverlap;
    constructor();
    load(data?: RecursivePartial<ICollisions>): void;
}
