import { InfectionInstance } from "./InfectionInstance";
import { ParticlesInfecter } from "./ParticlesInfecter";
import { Infection } from "./Options/Classes/Infection";
class Plugin {
    constructor() {
        this.id = "infection";
    }
    getPlugin(container) {
        return new InfectionInstance(container);
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
            optionsCast.infection = infectionOptions = new Infection();
        }
        infectionOptions.load(source === null || source === void 0 ? void 0 : source.infection);
    }
}
export function loadInfectionPlugin(tsParticles) {
    const plugin = new Plugin();
    tsParticles.addPlugin(plugin);
    tsParticles.addInteractor("particlesInfection", (container) => new ParticlesInfecter(container));
}
