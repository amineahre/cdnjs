export class ImageDrawer {
    draw(context, particle, radius) {
        var _a;
        if (!context) {
            return;
        }
        const imgObj = (_a = particle.image) === null || _a === void 0 ? void 0 : _a.data.obj;
        if (!imgObj) {
            return;
        }
        let ratio = 1;
        if (particle.image) {
            ratio = particle.image.ratio;
        }
        const pos = {
            x: -radius,
            y: -radius,
        };
        context.drawImage(imgObj, pos.x, pos.y, radius * 2, radius * 2 / ratio);
    }
}
//# sourceMappingURL=ImageDrawer.js.map