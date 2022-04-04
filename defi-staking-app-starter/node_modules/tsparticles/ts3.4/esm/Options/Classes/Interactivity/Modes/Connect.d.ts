import { IConnect } from "../../../Interfaces/Interactivity/Modes/IConnect";
import { ConnectLinks } from "./ConnectLinks";
import { RecursivePartial } from "../../../../Types";
import { IOptionLoader } from "../../../Interfaces/IOptionLoader";
export declare class Connect implements IConnect, IOptionLoader<IConnect> {
    line_linked: ConnectLinks;
    lineLinked: ConnectLinks;
    distance: number;
    links: ConnectLinks;
    radius: number;
    constructor();
    load(data?: RecursivePartial<IConnect>): void;
}
