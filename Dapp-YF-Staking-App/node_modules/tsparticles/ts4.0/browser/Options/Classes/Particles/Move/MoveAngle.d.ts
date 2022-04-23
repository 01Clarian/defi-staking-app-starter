import type { IMoveAngle } from "../../../Interfaces/Particles/Move/IMoveAngle";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
import type { RecursivePartial } from "../../../../Types";
export declare class MoveAngle implements IMoveAngle, IOptionLoader<IMoveAngle> {
    offset: number;
    value: number;
    constructor();
    load(data?: RecursivePartial<IMoveAngle>): void;
}
