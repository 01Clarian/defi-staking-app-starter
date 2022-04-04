import { getDistance, getDistances } from "./NumberUtils";
import { colorMix, colorToRgb, getStyleFromHsl, getStyleFromRgb } from "./ColorUtils";
function drawLine(context, begin, end) {
    context.beginPath();
    context.moveTo(begin.x, begin.y);
    context.lineTo(end.x, end.y);
    context.closePath();
}
function drawTriangle(context, p1, p2, p3) {
    context.beginPath();
    context.moveTo(p1.x, p1.y);
    context.lineTo(p2.x, p2.y);
    context.lineTo(p3.x, p3.y);
    context.closePath();
}
export function paintBase(context, dimension, baseColor) {
    context.save();
    context.fillStyle = baseColor !== null && baseColor !== void 0 ? baseColor : "rgba(0,0,0,0)";
    context.fillRect(0, 0, dimension.width, dimension.height);
    context.restore();
}
export function clear(context, dimension) {
    context.clearRect(0, 0, dimension.width, dimension.height);
}
export function drawLinkLine(context, width, begin, end, maxDistance, canvasSize, warp, backgroundMask, composite, colorLine, opacity, shadow) {
    let drawn = false;
    if (getDistance(begin, end) <= maxDistance) {
        drawLine(context, begin, end);
        drawn = true;
    }
    else if (warp) {
        let pi1;
        let pi2;
        const endNE = {
            x: end.x - canvasSize.width,
            y: end.y,
        };
        const d1 = getDistances(begin, endNE);
        if (d1.distance <= maxDistance) {
            const yi = begin.y - (d1.dy / d1.dx) * begin.x;
            pi1 = { x: 0, y: yi };
            pi2 = { x: canvasSize.width, y: yi };
        }
        else {
            const endSW = {
                x: end.x,
                y: end.y - canvasSize.height,
            };
            const d2 = getDistances(begin, endSW);
            if (d2.distance <= maxDistance) {
                const yi = begin.y - (d2.dy / d2.dx) * begin.x;
                const xi = -yi / (d2.dy / d2.dx);
                pi1 = { x: xi, y: 0 };
                pi2 = { x: xi, y: canvasSize.height };
            }
            else {
                const endSE = {
                    x: end.x - canvasSize.width,
                    y: end.y - canvasSize.height,
                };
                const d3 = getDistances(begin, endSE);
                if (d3.distance <= maxDistance) {
                    const yi = begin.y - (d3.dy / d3.dx) * begin.x;
                    const xi = -yi / (d3.dy / d3.dx);
                    pi1 = { x: xi, y: yi };
                    pi2 = { x: pi1.x + canvasSize.width, y: pi1.y + canvasSize.height };
                }
            }
        }
        if (pi1 && pi2) {
            drawLine(context, begin, pi1);
            drawLine(context, end, pi2);
            drawn = true;
        }
    }
    if (!drawn) {
        return;
    }
    context.lineWidth = width;
    if (backgroundMask) {
        context.globalCompositeOperation = composite;
    }
    context.strokeStyle = getStyleFromRgb(colorLine, opacity);
    if (shadow.enable) {
        const shadowColor = colorToRgb(shadow.color);
        if (shadowColor) {
            context.shadowBlur = shadow.blur;
            context.shadowColor = getStyleFromRgb(shadowColor);
        }
    }
    context.stroke();
}
export function drawLinkTriangle(context, pos1, pos2, pos3, backgroundMask, composite, colorTriangle, opacityTriangle) {
    drawTriangle(context, pos1, pos2, pos3);
    if (backgroundMask) {
        context.globalCompositeOperation = composite;
    }
    context.fillStyle = getStyleFromRgb(colorTriangle, opacityTriangle);
    context.fill();
}
export function drawConnectLine(context, width, lineStyle, begin, end) {
    context.save();
    drawLine(context, begin, end);
    context.lineWidth = width;
    context.strokeStyle = lineStyle;
    context.stroke();
    context.restore();
}
export function gradient(context, p1, p2, opacity) {
    const gradStop = Math.floor(p2.getRadius() / p1.getRadius());
    const color1 = p1.getFillColor();
    const color2 = p2.getFillColor();
    if (!color1 || !color2) {
        return;
    }
    const sourcePos = p1.getPosition();
    const destPos = p2.getPosition();
    const midRgb = colorMix(color1, color2, p1.getRadius(), p2.getRadius());
    const grad = context.createLinearGradient(sourcePos.x, sourcePos.y, destPos.x, destPos.y);
    grad.addColorStop(0, getStyleFromHsl(color1, opacity));
    grad.addColorStop(gradStop > 1 ? 1 : gradStop, getStyleFromRgb(midRgb, opacity));
    grad.addColorStop(1, getStyleFromHsl(color2, opacity));
    return grad;
}
export function drawGrabLine(context, width, begin, end, colorLine, opacity) {
    context.save();
    drawLine(context, begin, end);
    context.strokeStyle = getStyleFromRgb(colorLine, opacity);
    context.lineWidth = width;
    context.stroke();
    context.restore();
}
export function drawLight(container, context, mousePos) {
    const lightOptions = container.actualOptions.interactivity.modes.light.area;
    context.beginPath();
    context.arc(mousePos.x, mousePos.y, lightOptions.radius, 0, 2 * Math.PI);
    const gradientAmbientLight = context.createRadialGradient(mousePos.x, mousePos.y, 0, mousePos.x, mousePos.y, lightOptions.radius);
    const gradient = lightOptions.gradient;
    const gradientRgb = {
        start: colorToRgb(gradient.start),
        stop: colorToRgb(gradient.stop),
    };
    if (!gradientRgb.start || !gradientRgb.stop) {
        return;
    }
    gradientAmbientLight.addColorStop(0, getStyleFromRgb(gradientRgb.start));
    gradientAmbientLight.addColorStop(1, getStyleFromRgb(gradientRgb.stop));
    context.fillStyle = gradientAmbientLight;
    context.fill();
}
export function drawParticleShadow(container, context, particle, mousePos) {
    const pos = particle.getPosition();
    const shadowOptions = container.actualOptions.interactivity.modes.light.shadow;
    context.save();
    const radius = particle.getRadius();
    const sides = particle.sides;
    const full = (Math.PI * 2) / sides;
    const angle = -particle.rotate.value + Math.PI / 4;
    const factor = 1;
    const dots = [];
    for (let i = 0; i < sides; i++) {
        dots.push({
            x: pos.x + radius * Math.sin(angle + full * i) * factor,
            y: pos.y + radius * Math.cos(angle + full * i) * factor,
        });
    }
    const points = [];
    const shadowLength = shadowOptions.length;
    for (const dot of dots) {
        const dotAngle = Math.atan2(mousePos.y - dot.y, mousePos.x - dot.x);
        const endX = dot.x + shadowLength * Math.sin(-dotAngle - Math.PI / 2);
        const endY = dot.y + shadowLength * Math.cos(-dotAngle - Math.PI / 2);
        points.push({
            endX: endX,
            endY: endY,
            startX: dot.x,
            startY: dot.y,
        });
    }
    const shadowRgb = colorToRgb(shadowOptions.color);
    if (!shadowRgb) {
        return;
    }
    const shadowColor = getStyleFromRgb(shadowRgb);
    for (let i = points.length - 1; i >= 0; i--) {
        const n = i == points.length - 1 ? 0 : i + 1;
        context.beginPath();
        context.moveTo(points[i].startX, points[i].startY);
        context.lineTo(points[n].startX, points[n].startY);
        context.lineTo(points[n].endX, points[n].endY);
        context.lineTo(points[i].endX, points[i].endY);
        context.fillStyle = shadowColor;
        context.fill();
    }
    context.restore();
}
export function drawParticle(container, context, particle, delta, fillColorValue, strokeColorValue, backgroundMask, composite, radius, opacity, shadow) {
    const pos = particle.getPosition();
    const tiltOptions = particle.options.tilt;
    const rollOptions = particle.options.roll;
    context.save();
    if (tiltOptions.enable || rollOptions.enable) {
        context.setTransform(rollOptions.enable ? Math.cos(particle.rollAngle) : 1, tiltOptions.enable ? Math.cos(particle.tilt.value) * particle.tilt.cosDirection : 0, tiltOptions.enable ? Math.sin(particle.tilt.value) * particle.tilt.sinDirection : 0, rollOptions.enable ? Math.sin(particle.rollAngle) : 1, pos.x, pos.y);
    }
    else {
        context.translate(pos.x, pos.y);
    }
    context.beginPath();
    const angle = particle.rotate.value + (particle.options.rotate.path ? particle.velocity.angle : 0);
    if (angle !== 0) {
        context.rotate(angle);
    }
    if (backgroundMask) {
        context.globalCompositeOperation = composite;
    }
    const shadowColor = particle.shadowColor;
    if (shadow.enable && shadowColor) {
        context.shadowBlur = shadow.blur;
        context.shadowColor = getStyleFromRgb(shadowColor);
        context.shadowOffsetX = shadow.offset.x;
        context.shadowOffsetY = shadow.offset.y;
    }
    if (fillColorValue) {
        context.fillStyle = fillColorValue;
    }
    const stroke = particle.stroke;
    context.lineWidth = particle.strokeWidth;
    if (strokeColorValue) {
        context.strokeStyle = strokeColorValue;
    }
    drawShape(container, context, particle, radius, opacity, delta);
    if (stroke.width > 0) {
        context.stroke();
    }
    if (particle.close) {
        context.closePath();
    }
    if (particle.fill) {
        context.fill();
    }
    context.restore();
    context.save();
    if (tiltOptions.enable) {
        context.setTransform(1, Math.cos(particle.tilt.value) * particle.tilt.cosDirection, Math.sin(particle.tilt.value) * particle.tilt.sinDirection, 1, pos.x, pos.y);
    }
    else {
        context.translate(pos.x, pos.y);
    }
    if (angle !== 0) {
        context.rotate(angle);
    }
    if (backgroundMask) {
        context.globalCompositeOperation = composite;
    }
    drawShapeAfterEffect(container, context, particle, radius, opacity, delta);
    context.restore();
}
export function drawShape(container, context, particle, radius, opacity, delta) {
    if (!particle.shape) {
        return;
    }
    const drawer = container.drawers.get(particle.shape);
    if (!drawer) {
        return;
    }
    drawer.draw(context, particle, radius, opacity, delta, container.retina.pixelRatio);
}
export function drawShapeAfterEffect(container, context, particle, radius, opacity, delta) {
    if (!particle.shape) {
        return;
    }
    const drawer = container.drawers.get(particle.shape);
    if (!(drawer === null || drawer === void 0 ? void 0 : drawer.afterEffect)) {
        return;
    }
    drawer.afterEffect(context, particle, radius, opacity, delta, container.retina.pixelRatio);
}
export function drawPlugin(context, plugin, delta) {
    if (!plugin.draw) {
        return;
    }
    context.save();
    plugin.draw(context, delta);
    context.restore();
}
export class CanvasUtils {
    static paintBase(context, dimension, baseColor) {
        paintBase(context, dimension, baseColor);
    }
    static clear(context, dimension) {
        clear(context, dimension);
    }
    static drawLinkLine(context, width, begin, end, maxDistance, canvasSize, warp, backgroundMask, composite, colorLine, opacity, shadow) {
        drawLinkLine(context, width, begin, end, maxDistance, canvasSize, warp, backgroundMask, composite, colorLine, opacity, shadow);
    }
    static drawLinkTriangle(context, pos1, pos2, pos3, backgroundMask, composite, colorTriangle, opacityTriangle) {
        drawLinkTriangle(context, pos1, pos2, pos3, backgroundMask, composite, colorTriangle, opacityTriangle);
    }
    static drawConnectLine(context, width, lineStyle, begin, end) {
        drawConnectLine(context, width, lineStyle, begin, end);
    }
    static gradient(context, p1, p2, opacity) {
        return gradient(context, p1, p2, opacity);
    }
    static drawGrabLine(context, width, begin, end, colorLine, opacity) {
        drawGrabLine(context, width, begin, end, colorLine, opacity);
    }
    static drawLight(container, context, mousePos) {
        drawLight(container, context, mousePos);
    }
    static drawParticleShadow(container, context, particle, mousePos) {
        drawParticleShadow(container, context, particle, mousePos);
    }
    static drawParticle(container, context, particle, delta, fillColorValue, strokeColorValue, backgroundMask, composite, radius, opacity, shadow) {
        drawParticle(container, context, particle, delta, fillColorValue, strokeColorValue, backgroundMask, composite, radius, opacity, shadow);
    }
    static drawShape(container, context, particle, radius, opacity, delta) {
        drawShape(container, context, particle, radius, opacity, delta);
    }
    static drawShapeAfterEffect(container, context, particle, radius, opacity, delta) {
        drawShapeAfterEffect(container, context, particle, radius, opacity, delta);
    }
    static drawPlugin(context, plugin, delta) {
        drawPlugin(context, plugin, delta);
    }
}
