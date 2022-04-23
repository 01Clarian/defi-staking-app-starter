import { ICoordinates } from "../../../Core/Interfaces/ICoordinates";
import { IColor } from "../../../Core/Interfaces/Colors";
export interface IShadow {
    blur: number;
    color: string | IColor;
    enable: boolean;
    offset: ICoordinates;
}
