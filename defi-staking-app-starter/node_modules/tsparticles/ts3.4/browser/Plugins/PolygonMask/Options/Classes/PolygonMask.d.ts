import { IPolygonMask } from "../Interfaces/IPolygonMask";
import { InlineArrangement, InlineArrangementAlt, Type } from "../../Enums";
import { Draw } from "./Draw";
import { Move } from "./Move";
import { Inline } from "./Inline";
import { RecursivePartial } from "../../../../Types";
import { ICoordinates } from "../../../../Core/Interfaces/ICoordinates";
import { LocalSvg } from "./LocalSvg";
import { IOptionLoader } from "../../../../Options/Interfaces/IOptionLoader";
export declare class PolygonMask implements IPolygonMask, IOptionLoader<IPolygonMask> {
    inlineArrangement: InlineArrangement | keyof typeof InlineArrangement | InlineArrangementAlt;
    draw: Draw;
    enable: boolean;
    inline: Inline;
    move: Move;
    position?: ICoordinates;
    scale: number;
    type: Type;
    url?: string;
    data?: string | LocalSvg;
    constructor();
    load(data?: RecursivePartial<IPolygonMask>): void;
}
