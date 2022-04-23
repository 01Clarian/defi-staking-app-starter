import { IPath } from "../../../../Interfaces/Particles/Move/Path/iPath";
import { RecursivePartial } from "../../../../../Types";
import { PathDelay } from "./PathDelay";
import { IOptionLoader } from "../../../../Interfaces/IOptionLoader";
export declare class Path implements IPath, IOptionLoader<IPath> {
    clamp: boolean;
    delay: PathDelay;
    enable: boolean;
    generator?: string;
    constructor();
    load(data?: RecursivePartial<IPath>): void;
}
