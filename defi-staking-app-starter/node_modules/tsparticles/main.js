"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
const main_slim_1 = require("./main.slim");
const plugin_1 = require("./Plugins/Infection/plugin");
const plugin_2 = require("./Plugins/Emitters/plugin");
const plugin_3 = require("./Plugins/PolygonMask/plugin");
const plugin_4 = require("./Plugins/Absorbers/plugin");
class Main extends main_slim_1.MainSlim {
    constructor() {
        super();
        plugin_4.loadAbsorbersPlugin(this);
        plugin_2.loadEmittersPlugin(this);
        plugin_1.loadInfectionPlugin(this);
        plugin_3.loadPolygonMaskPlugin(this);
    }
}
exports.Main = Main;
