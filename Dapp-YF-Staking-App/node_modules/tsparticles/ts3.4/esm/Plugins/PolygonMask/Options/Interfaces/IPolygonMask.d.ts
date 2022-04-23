import { IDraw } from "./IDraw";
import { IMove } from "./IMove";
import { InlineArrangement, InlineArrangementAlt } from "../../Enums";
import { IInline } from "./IInline";
import { ICoordinates } from "../../../../Core/Interfaces/ICoordinates";
import { ILocalSvg } from "./ILocalSvg";
import { Type } from "../../Enums";
export interface IPolygonMask {
    draw: IDraw;
    enable: boolean;
    inline: IInline;
    inlineArrangement: InlineArrangement | keyof typeof InlineArrangement | InlineArrangementAlt;
    move: IMove;
    position?: ICoordinates;
    scale: number;
    type: Type;
    url?: string;
    data?: string | ILocalSvg;
}
