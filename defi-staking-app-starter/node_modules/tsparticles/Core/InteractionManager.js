"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InteractionManager = void 0;
const Utils_1 = require("../Utils");
const Enums_1 = require("../Enums");
const Bouncer_1 = require("../Interactions/External/Bouncer");
const Bubbler_1 = require("../Interactions/External/Bubbler");
const Connector_1 = require("../Interactions/External/Connector");
const Grabber_1 = require("../Interactions/External/Grabber");
const Lighter_1 = require("../Interactions/External/Lighter");
const Attractor_1 = require("../Interactions/External/Attractor");
const Repulser_1 = require("../Interactions/External/Repulser");
const TrailMaker_1 = require("../Interactions/External/TrailMaker");
const Attractor_2 = require("../Interactions/Particles/Attractor");
const Lighter_2 = require("../Interactions/Particles/Lighter");
const Collider_1 = require("../Interactions/Particles/Collider");
const Linker_1 = require("../Interactions/Particles/Linker");
class InteractionManager {
    constructor(container) {
        this.container = container;
        const interactors = Utils_1.Plugins.getInteractors(container);
        this.externalInteractors = [
            new Bouncer_1.Bouncer(container),
            new Bubbler_1.Bubbler(container),
            new Connector_1.Connector(container),
            new Grabber_1.Grabber(container),
            new Lighter_1.Lighter(container),
            new Attractor_1.Attractor(container),
            new Repulser_1.Repulser(container),
            new TrailMaker_1.TrailMaker(container),
        ];
        this.particleInteractors = [
            new Attractor_2.Attractor(container),
            new Lighter_2.Lighter(container),
            new Collider_1.Collider(container),
            new Linker_1.Linker(container),
        ];
        for (const interactor of interactors) {
            switch (interactor.type) {
                case Enums_1.InteractorType.External:
                    this.externalInteractors.push(interactor);
                    break;
                case Enums_1.InteractorType.Particles:
                    this.particleInteractors.push(interactor);
                    break;
            }
        }
    }
    externalInteract(delta) {
        for (const interactor of this.externalInteractors) {
            if (interactor.isEnabled()) {
                interactor.interact(delta);
            }
        }
    }
    particlesInteract(particle, delta) {
        for (const interactor of this.externalInteractors) {
            interactor.reset(particle);
        }
        for (const interactor of this.particleInteractors) {
            if (interactor.isEnabled(particle)) {
                interactor.interact(particle, delta);
            }
        }
    }
}
exports.InteractionManager = InteractionManager;
