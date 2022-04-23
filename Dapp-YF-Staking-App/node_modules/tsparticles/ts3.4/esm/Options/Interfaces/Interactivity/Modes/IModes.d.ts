import { IBubble } from "./IBubble";
import { IConnect } from "./IConnect";
import { IGrab } from "./IGrab";
import { IPush } from "./IPush";
import { IRemove } from "./IRemove";
import { IRepulse } from "./IRepulse";
import { ISlow } from "./ISlow";
import { ITrail } from "./ITrail";
import { IAttract } from "./IAttract";
import { ILight } from "./ILight";
export interface IModes {
    attract: IAttract;
    bubble: IBubble;
    connect: IConnect;
    grab: IGrab;
    light: ILight;
    push: IPush;
    remove: IRemove;
    repulse: IRepulse;
    slow: ISlow;
    trail: ITrail;
}
