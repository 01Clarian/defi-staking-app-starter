import type { Particle } from "../Particle";
import { Vector } from "../Particle/Vector";
export interface IMovePathGenerator {
    init: () => void;
    update: () => void;
    generate: (particle: Particle) => Vector;
}
