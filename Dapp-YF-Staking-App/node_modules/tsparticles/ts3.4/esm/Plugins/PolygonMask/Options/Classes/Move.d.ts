import { IMove } from "../Interfaces/IMove";
import { RecursivePartial } from "../../../../Types";
import { MoveType } from "../../Enums";
import { IOptionLoader } from "../../../../Options/Interfaces/IOptionLoader";
export declare class Move implements IMove, IOptionLoader<IMove> {
    radius: number;
    type: MoveType | keyof typeof MoveType;
    constructor();
    load(data?: RecursivePartial<IMove>): void;
}
