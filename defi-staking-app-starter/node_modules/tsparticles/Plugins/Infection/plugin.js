"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadInfectionPlugin = void 0;
const InfectionInstance_1 = require("./InfectionInstance");
const ParticlesInfecter_1 = require("./ParticlesInfecter");
const Infection_1 = require("./Options/Classes/Infection");
class Plugin {
    constructor() {
        this.id = "infection";
    }
    getPlugin(container) {
        return new InfectionInstance_1.InfectionInstance(container);
    }
    needsPlugin(options) {
        var _a, _b;
        return (_b = (_a = options === null || options === void 0 ? void 0 : options.infection) === null || _a === void 0 ? void 0 : _a.enable) !== null && _b !== void 0 ? _b : false;
    }
    loadOptions(options, source) {
        if (!this.needsPlugin(source)) {
            return;
        }
        const optionsCast = options;
        let infectionOptions = optionsCast.infection;
        if ((infectionOptions === null || infectionOptions === void 0 ? void 0 : infectionOptions.load) === undefined) {
            optionsCast.infection = infectionOptions = new Infection_1.Infection();
        }
        infectionOptions.load(source === null || source === void 0 ? void 0 : source.infection);
    }
}
function loadInfectionPlugin(tsParticles) {
    const plugin = new Plugin();
    tsParticles.addPlugin(plugin);
    tsParticles.addInteractor("particlesInfection", (container) => new ParticlesInfecter_1.ParticlesInfecter(container));
}
exports.loadInfectionPlugin = loadInfectionPlugin;
