import type { ILinks } from "../../../Interfaces/Particles/Links/ILinks";
import { LinksShadow } from "./LinksShadow";
import type { RecursivePartial } from "../../../../Types";
import { LinksTriangle } from "./LinksTriangle";
import { OptionsColor } from "../../OptionsColor";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
export declare class Links implements ILinks, IOptionLoader<ILinks> {
    blink: boolean;
    color: OptionsColor;
    consent: boolean;
    distance: number;
    enable: boolean;
    frequency: number;
    id?: string;
    opacity: number;
    shadow: LinksShadow;
    triangles: LinksTriangle;
    width: number;
    warp: boolean;
    constructor();
    load(data?: RecursivePartial<ILinks>): void;
}
