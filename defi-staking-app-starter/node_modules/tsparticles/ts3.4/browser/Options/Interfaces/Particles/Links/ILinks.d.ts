import { ILinksShadow } from "./ILinksShadow";
import { ILinksTriangle } from "./ILinksTriangle";
import { IColor } from "../../../../Core/Interfaces/Colors";
export interface ILinks {
    blink: boolean;
    color: string | IColor;
    consent: boolean;
    distance: number;
    enable: boolean;
    frequency: number;
    id?: string;
    opacity: number;
    shadow: ILinksShadow;
    triangles: ILinksTriangle;
    warp: boolean;
    width: number;
}
