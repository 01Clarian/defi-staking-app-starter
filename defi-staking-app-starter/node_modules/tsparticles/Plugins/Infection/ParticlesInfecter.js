"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParticlesInfecter = void 0;
const ParticlesInteractorBase_1 = require("../../Core/ParticlesInteractorBase");
class ParticlesInfecter extends ParticlesInteractorBase_1.ParticlesInteractorBase {
    constructor(container) {
        super(container);
    }
    isEnabled() {
        var _a, _b;
        const infOptions = this.container.actualOptions;
        return (_b = (_a = infOptions === null || infOptions === void 0 ? void 0 : infOptions.infection) === null || _a === void 0 ? void 0 : _a.enable) !== null && _b !== void 0 ? _b : false;
    }
    reset() {
    }
    interact(p1, delta) {
        var _a, _b;
        const infecter = this.container.infecter;
        if (!infecter) {
            return;
        }
        infecter.updateInfection(p1, delta.value);
        if (p1.infection.stage === undefined) {
            return;
        }
        const container = this.container;
        const options = container.actualOptions;
        const infectionOptions = options.infection;
        if (!infectionOptions.enable || infectionOptions.stages.length < 1) {
            return;
        }
        const infectionStage1 = infectionOptions.stages[p1.infection.stage];
        const pxRatio = container.retina.pixelRatio;
        const radius = p1.getRadius() * 2 + infectionStage1.radius * pxRatio;
        const pos = p1.getPosition();
        const infectedStage1 = (_a = infectionStage1.infectedStage) !== null && _a !== void 0 ? _a : p1.infection.stage;
        const query = container.particles.quadTree.queryCircle(pos, radius);
        const infections = infectionStage1.rate;
        const neighbors = query.length;
        for (const p2 of query) {
            const infP2 = p2;
            if (infP2 === p1 ||
                infP2.destroyed ||
                infP2.spawning ||
                !(infP2.infection.stage === undefined || infP2.infection.stage !== p1.infection.stage)) {
                continue;
            }
            if (Math.random() < infections / neighbors) {
                if (infP2.infection.stage === undefined) {
                    infecter.startInfection(infP2, infectedStage1);
                }
                else if (infP2.infection.stage < p1.infection.stage) {
                    infecter.updateInfectionStage(infP2, infectedStage1);
                }
                else if (infP2.infection.stage > p1.infection.stage) {
                    const infectionStage2 = infectionOptions.stages[infP2.infection.stage];
                    const infectedStage2 = (_b = infectionStage2 === null || infectionStage2 === void 0 ? void 0 : infectionStage2.infectedStage) !== null && _b !== void 0 ? _b : infP2.infection.stage;
                    infecter.updateInfectionStage(p1, infectedStage2);
                }
            }
        }
    }
}
exports.ParticlesInfecter = ParticlesInfecter;
