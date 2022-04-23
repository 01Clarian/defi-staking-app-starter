import { IThemeDefault } from "../../Interfaces/Theme/IThemeDefault";
import { IOptionLoader } from "../../Interfaces/IOptionLoader";
import { ThemeMode } from "../../../Enums/Modes";
import { RecursivePartial } from "../../../Types";
export declare class ThemeDefault implements IThemeDefault, IOptionLoader<IThemeDefault> {
    mode: ThemeMode | keyof ThemeMode;
    value: boolean;
    constructor();
    load(data?: RecursivePartial<IThemeDefault>): void;
}
