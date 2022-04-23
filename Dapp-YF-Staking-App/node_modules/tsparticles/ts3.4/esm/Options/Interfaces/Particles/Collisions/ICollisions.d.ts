import { CollisionMode } from "../../../../Enums";
import { IBounce } from "../Bounce/IBounce";
import { ICollisionsOverlap } from "./ICollisionsOverlap";
export interface ICollisions {
    bounce: IBounce;
    enable: boolean;
    mode: CollisionMode | keyof typeof CollisionMode;
    overlap: ICollisionsOverlap;
}
