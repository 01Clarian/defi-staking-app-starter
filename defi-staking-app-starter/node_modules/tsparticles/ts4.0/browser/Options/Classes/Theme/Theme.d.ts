import type { ITheme } from "../../Interfaces/Theme/ITheme";
import type { RecursivePartial } from "../../../Types";
import type { IOptionLoader } from "../../Interfaces/IOptionLoader";
import type { IOptions } from "../../Interfaces/IOptions";
import { ThemeDefault } from "./ThemeDefault";
export declare class Theme implements ITheme, IOptionLoader<ITheme> {
    name: string;
    default: ThemeDefault;
    options?: RecursivePartial<IOptions>;
    constructor();
    load(data?: RecursivePartial<ITheme>): void;
}
