"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Infection = void 0;
const InfectionStage_1 = require("./InfectionStage");
class Infection {
    constructor() {
        this.cure = false;
        this.delay = 0;
        this.enable = false;
        this.infections = 0;
        this.stages = [];
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        if (data.cure !== undefined) {
            this.cure = data.cure;
        }
        if (data.delay !== undefined) {
            this.delay = data.delay;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.infections !== undefined) {
            this.infections = data.infections;
        }
        if (data.stages === undefined) {
            return;
        }
        this.stages = data.stages.map((t) => {
            const s = new InfectionStage_1.InfectionStage();
            s.load(t);
            return s;
        });
    }
}
exports.Infection = Infection;
