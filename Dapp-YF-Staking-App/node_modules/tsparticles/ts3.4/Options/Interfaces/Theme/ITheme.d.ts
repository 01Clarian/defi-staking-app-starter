import { RecursivePartial } from "../../../Types";
import { IOptions } from "../../../Interfaces/Options/IOptions";
import { IThemeDefault } from "./IThemeDefault";
export interface ITheme {
    name: string;
    default: IThemeDefault;
    options?: RecursivePartial<IOptions>;
}
