import type { IMove } from "../Interfaces/IMove";
import type { RecursivePartial } from "../../../../Types";
import { MoveType } from "../../Enums";
import type { IOptionLoader } from "../../../../Options/Interfaces/IOptionLoader";
export declare class Move implements IMove, IOptionLoader<IMove> {
    radius: number;
    type: MoveType | keyof typeof MoveType;
    constructor();
    load(data?: RecursivePartial<IMove>): void;
}
