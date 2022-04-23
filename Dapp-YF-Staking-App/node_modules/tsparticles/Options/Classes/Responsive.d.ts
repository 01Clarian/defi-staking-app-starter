import type { IResponsive } from "../Interfaces/IResponsive";
import type { IOptionLoader } from "../Interfaces/IOptionLoader";
import type { RecursivePartial } from "../../Types";
import type { IOptions } from "../Interfaces/IOptions";
export declare class Responsive implements IResponsive, IOptionLoader<IResponsive> {
    maxWidth: number;
    options: RecursivePartial<IOptions>;
    constructor();
    load(data?: RecursivePartial<IResponsive>): void;
}
