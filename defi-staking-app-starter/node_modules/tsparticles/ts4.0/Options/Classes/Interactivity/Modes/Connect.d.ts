import type { IConnect } from "../../../Interfaces/Interactivity/Modes/IConnect";
import { ConnectLinks } from "./ConnectLinks";
import type { RecursivePartial } from "../../../../Types";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
export declare class Connect implements IConnect, IOptionLoader<IConnect> {
    get line_linked(): ConnectLinks;
    set line_linked(value: ConnectLinks);
    get lineLinked(): ConnectLinks;
    set lineLinked(value: ConnectLinks);
    distance: number;
    links: ConnectLinks;
    radius: number;
    constructor();
    load(data?: RecursivePartial<IConnect>): void;
}
