import type { IConnectLinks } from "../../../Interfaces/Interactivity/Modes/IConnectLinks";
import type { RecursivePartial } from "../../../../Types";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
export declare class ConnectLinks implements IConnectLinks, IOptionLoader<IConnectLinks> {
    opacity: number;
    constructor();
    load(data?: RecursivePartial<IConnectLinks>): void;
}
