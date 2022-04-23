import type { IFullScreen } from "../../Interfaces/FullScreen/IFullScreen";
import { IOptionLoader } from "../../Interfaces/IOptionLoader";
import { RecursivePartial } from "../../../Types";
export declare class FullScreen implements IFullScreen, IOptionLoader<IFullScreen> {
    enable: boolean;
    zIndex: number;
    constructor();
    load(data?: RecursivePartial<IFullScreen>): void;
}
