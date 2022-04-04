import { EmitterRate } from "./EmitterRate";
import { EmitterLife } from "./EmitterLife";
import { deepExtend } from "../../../../Utils";
import { EmitterSize } from "./EmitterSize";
import { AnimatableColor } from "../../../../Options/Classes/Particles/AnimatableColor";
export class Emitter {
    constructor() {
        this.autoPlay = true;
        this.life = new EmitterLife();
        this.rate = new EmitterRate();
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        if (data.autoPlay !== undefined) {
            this.autoPlay = data.autoPlay;
        }
        if (data.size !== undefined) {
            if (this.size === undefined) {
                this.size = new EmitterSize();
            }
            this.size.load(data.size);
        }
        if (data.direction !== undefined) {
            this.direction = data.direction;
        }
        this.life.load(data.life);
        this.name = data.name;
        if (data.particles !== undefined) {
            this.particles = deepExtend({}, data.particles);
        }
        this.rate.load(data.rate);
        if (data.position !== undefined) {
            this.position = {
                x: data.position.x,
                y: data.position.y,
            };
        }
        if (data.spawnColor !== undefined) {
            if (this.spawnColor === undefined) {
                this.spawnColor = new AnimatableColor();
            }
            this.spawnColor.load(data.spawnColor);
        }
    }
}
