import { deepExtend } from "../../Utils";
export class Responsive {
    constructor() {
        this.maxWidth = Infinity;
        this.options = {};
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.maxWidth !== undefined) {
            this.maxWidth = data.maxWidth;
        }
        if (data.options !== undefined) {
            this.options = deepExtend({}, data.options);
        }
    }
}
