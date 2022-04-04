import type { ILinksShadow } from "../../../Interfaces/Particles/Links/ILinksShadow";
import type { RecursivePartial } from "../../../../Types";
import { OptionsColor } from "../../OptionsColor";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
export declare class LinksShadow implements ILinksShadow, IOptionLoader<ILinksShadow> {
    blur: number;
    color: OptionsColor;
    enable: boolean;
    constructor();
    load(data?: RecursivePartial<ILinksShadow>): void;
}
