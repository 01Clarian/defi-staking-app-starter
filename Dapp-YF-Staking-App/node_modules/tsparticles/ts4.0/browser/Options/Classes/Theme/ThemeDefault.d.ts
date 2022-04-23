import type { IThemeDefault } from "../../Interfaces/Theme/IThemeDefault";
import type { IOptionLoader } from "../../Interfaces/IOptionLoader";
import { ThemeMode } from "../../../Enums/Modes";
import type { RecursivePartial } from "../../../Types";
export declare class ThemeDefault implements IThemeDefault, IOptionLoader<IThemeDefault> {
    mode: ThemeMode | keyof ThemeMode;
    value: boolean;
    constructor();
    load(data?: RecursivePartial<IThemeDefault>): void;
}
