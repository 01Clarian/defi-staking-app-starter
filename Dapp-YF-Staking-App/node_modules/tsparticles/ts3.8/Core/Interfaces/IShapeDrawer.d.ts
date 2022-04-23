import type { ShapeDrawerAfterEffectFunction, ShapeDrawerDestroyFunction, ShapeDrawerDrawFunction, ShapeDrawerInitFunction, ShapeDrawerParticleInitFunction, ShapeDrawerSidesCountFunction } from "../../Types";
export interface IShapeDrawer {
    getSidesCount?: ShapeDrawerSidesCountFunction;
    init?: ShapeDrawerInitFunction;
    particleInit?: ShapeDrawerParticleInitFunction;
    draw: ShapeDrawerDrawFunction;
    afterEffect?: ShapeDrawerAfterEffectFunction;
    destroy?: ShapeDrawerDestroyFunction;
}
