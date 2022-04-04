import { IAttract } from "../../../Interfaces/Particles/Move/IAttract";
import { ICoordinates } from "../../../../Core/Interfaces/ICoordinates";
import { RecursivePartial } from "../../../../Types/RecursivePartial";
import { IOptionLoader } from "../../../Interfaces/IOptionLoader";
export declare class Attract implements IAttract, IOptionLoader<IAttract> {
    rotateX: number;
    rotateY: number;
    distance: number;
    enable: boolean;
    rotate: ICoordinates;
    constructor();
    load(data?: RecursivePartial<IAttract>): void;
}
