import { IConnectLinks } from "../../../Interfaces/Interactivity/Modes/IConnectLinks";
import { RecursivePartial } from "../../../../Types";
import { IOptionLoader } from "../../../Interfaces/IOptionLoader";
export declare class ConnectLinks implements IConnectLinks, IOptionLoader<IConnectLinks> {
    opacity: number;
    constructor();
    load(data?: RecursivePartial<IConnectLinks>): void;
}
