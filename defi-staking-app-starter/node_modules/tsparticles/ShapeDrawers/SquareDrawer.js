"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SquareDrawer = void 0;
class SquareDrawer {
    getSidesCount() {
        return 4;
    }
    draw(context, particle, radius) {
        context.rect(-radius, -radius, radius * 2, radius * 2);
    }
}
exports.SquareDrawer = SquareDrawer;
