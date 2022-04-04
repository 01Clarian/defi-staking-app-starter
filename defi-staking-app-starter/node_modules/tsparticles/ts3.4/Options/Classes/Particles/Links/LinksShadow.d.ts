import { ILinksShadow } from "../../../Interfaces/Particles/Links/ILinksShadow";
import { RecursivePartial } from "../../../../Types";
import { OptionsColor } from "../../OptionsColor";
import { IOptionLoader } from "../../../Interfaces/IOptionLoader";
export declare class LinksShadow implements ILinksShadow, IOptionLoader<ILinksShadow> {
    blur: number;
    color: OptionsColor;
    enable: boolean;
    constructor();
    load(data?: RecursivePartial<ILinksShadow>): void;
}
