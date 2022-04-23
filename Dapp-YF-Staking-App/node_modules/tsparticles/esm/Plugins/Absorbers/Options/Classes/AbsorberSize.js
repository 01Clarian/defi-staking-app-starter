import { ValueWithRandom } from "../../../../Options/Classes/ValueWithRandom";
export class AbsorberSize extends ValueWithRandom {
    constructor() {
        super();
        this.density = 5;
        this.random.minimumValue = 1;
        this.value = 50;
    }
    load(data) {
        if (!data) {
            return;
        }
        super.load(data);
        if (data.density !== undefined) {
            this.density = data.density;
        }
        if (data.limit !== undefined) {
            this.limit = data.limit;
        }
        if (data.limit !== undefined) {
            this.limit = data.limit;
        }
    }
}
