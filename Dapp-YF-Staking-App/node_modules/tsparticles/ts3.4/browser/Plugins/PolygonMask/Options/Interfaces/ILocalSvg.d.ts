import { SingleOrMultiple } from "../../../../Types";
import { IDimension } from "../../../../Core/Interfaces/IDimension";
export interface ILocalSvg {
    path: SingleOrMultiple<string>;
    size: IDimension;
}
