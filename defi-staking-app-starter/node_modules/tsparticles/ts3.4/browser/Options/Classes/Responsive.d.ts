import { IResponsive } from "../Interfaces/IResponsive";
import { IOptionLoader } from "../Interfaces/IOptionLoader";
import { RecursivePartial } from "../../Types";
import { IOptions } from "../Interfaces/IOptions";
export declare class Responsive implements IResponsive, IOptionLoader<IResponsive> {
    maxWidth: number;
    options: RecursivePartial<IOptions>;
    constructor();
    load(data?: RecursivePartial<IResponsive>): void;
}
