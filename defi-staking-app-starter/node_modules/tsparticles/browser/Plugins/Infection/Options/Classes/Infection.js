import { InfectionStage } from "./InfectionStage";
export class Infection {
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
            const s = new InfectionStage();
            s.load(t);
            return s;
        });
    }
}
