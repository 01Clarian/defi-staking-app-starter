import { RecursivePartial } from "../../Types";
import { IOptions } from "./IOptions";
export interface IResponsive {
    maxWidth: number;
    options: RecursivePartial<IOptions>;
}
