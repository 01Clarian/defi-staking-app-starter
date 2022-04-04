"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Infecter = void 0;
class Infecter {
    constructor(container) {
        this.container = container;
    }
    startInfection(particle, stage) {
        const options = this.container.actualOptions, stages = options.infection.stages, stagesCount = stages.length;
        if (stage > stagesCount || stage < 0) {
            return;
        }
        particle.infection.delay = 0;
        particle.infection.delayStage = stage;
    }
    updateInfectionStage(particle, stage) {
        const options = this.container.actualOptions, stagesCount = options.infection.stages.length;
        if (stage > stagesCount ||
            stage < 0 ||
            (particle.infection.stage !== undefined && particle.infection.stage > stage)) {
            return;
        }
        particle.infection.stage = stage;
        particle.infection.time = 0;
    }
    updateInfection(particle, delta) {
        const options = this.container.actualOptions, infection = options.infection, stages = options.infection.stages, stagesCount = stages.length;
        if (particle.infection.delay !== undefined && particle.infection.delayStage !== undefined) {
            const stage = particle.infection.delayStage;
            if (stage > stagesCount || stage < 0) {
                return;
            }
            if (particle.infection.delay >= infection.delay * 1000) {
                particle.infection.stage = stage;
                particle.infection.time = 0;
                delete particle.infection.delay;
                delete particle.infection.delayStage;
            }
            else {
                particle.infection.delay += delta;
            }
        }
        else {
            delete particle.infection.delay;
            delete particle.infection.delayStage;
        }
        if (particle.infection.stage !== undefined && particle.infection.time !== undefined) {
            const infectionStage = stages[particle.infection.stage];
            if (infectionStage.duration !== undefined && infectionStage.duration >= 0) {
                if (particle.infection.time > infectionStage.duration * 1000) {
                    this.nextInfectionStage(particle);
                }
                else {
                    particle.infection.time += delta;
                }
            }
            else {
                particle.infection.time += delta;
            }
        }
        else {
            delete particle.infection.stage;
            delete particle.infection.time;
        }
    }
    nextInfectionStage(particle) {
        const options = this.container.actualOptions, stagesCount = options.infection.stages.length;
        if (stagesCount <= 0 || particle.infection.stage === undefined) {
            return;
        }
        particle.infection.time = 0;
        if (stagesCount <= ++particle.infection.stage) {
            if (options.infection.cure) {
                delete particle.infection.stage;
                delete particle.infection.time;
                return;
            }
            else {
                particle.infection.stage = 0;
                particle.infection.time = 0;
            }
        }
    }
}
exports.Infecter = Infecter;
