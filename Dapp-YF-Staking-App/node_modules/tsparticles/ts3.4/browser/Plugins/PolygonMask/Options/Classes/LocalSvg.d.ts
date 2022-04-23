import { ILocalSvg } from "../Interfaces/ILocalSvg";
import { SingleOrMultiple } from "../../../../Types";
import { IDimension } from "../../../../Core/Interfaces/IDimension";
import { RecursivePartial } from "../../../../Types";
import { IOptionLoader } from "../../../../Options/Interfaces/IOptionLoader";
export declare class LocalSvg implements ILocalSvg, IOptionLoader<ILocalSvg> {
    path: SingleOrMultiple<string>;
    size: IDimension;
    constructor();
    load(data?: RecursivePartial<ILocalSvg>): void;
}
