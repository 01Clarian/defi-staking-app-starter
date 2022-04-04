import { IMoveAngle } from "../../../Interfaces/Particles/Move/IMoveAngle";
import { IOptionLoader } from "../../../Interfaces/IOptionLoader";
import { RecursivePartial } from "../../../../Types";
export declare class MoveAngle implements IMoveAngle, IOptionLoader<IMoveAngle> {
    offset: number;
    value: number;
    constructor();
    load(data?: RecursivePartial<IMoveAngle>): void;
}
