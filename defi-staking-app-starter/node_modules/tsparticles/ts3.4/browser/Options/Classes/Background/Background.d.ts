import { IBackground } from "../../Interfaces/Background/IBackground";
import { RecursivePartial } from "../../../Types";
import { OptionsColor } from "../OptionsColor";
import { IOptionLoader } from "../../Interfaces/IOptionLoader";
export declare class Background implements IBackground, IOptionLoader<IBackground> {
    color: OptionsColor;
    image: string;
    position: string;
    repeat: string;
    size: string;
    opacity: number;
    constructor();
    load(data?: RecursivePartial<IBackground>): void;
}
