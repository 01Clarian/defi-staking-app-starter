import { MainSlim } from "./main.slim";
import { loadInfectionPlugin } from "./Plugins/Infection/plugin";
import { loadEmittersPlugin } from "./Plugins/Emitters/plugin";
import { loadPolygonMaskPlugin } from "./Plugins/PolygonMask/plugin";
import { loadAbsorbersPlugin } from "./Plugins/Absorbers/plugin";
export class Main extends MainSlim {
    constructor() {
        super();
        loadAbsorbersPlugin(this);
        loadEmittersPlugin(this);
        loadInfectionPlugin(this);
        loadPolygonMaskPlugin(this);
    }
}
