import { ITheme } from "../../Interfaces/Theme/ITheme";
import { RecursivePartial } from "../../../Types";
import { IOptionLoader } from "../../Interfaces/IOptionLoader";
import { IOptions } from "../../Interfaces/IOptions";
import { ThemeDefault } from "./ThemeDefault";
export declare class Theme implements ITheme, IOptionLoader<ITheme> {
    name: string;
    default: ThemeDefault;
    options?: RecursivePartial<IOptions>;
    constructor();
    load(data?: RecursivePartial<ITheme>): void;
}
