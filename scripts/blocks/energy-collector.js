const energyCollectorColor = Color.valueOf("a3ddf5");
const energyCollectorWeaver = extend(GenericCrafter, "energy-collector", {});

const weaverOut = new Effect(60, e => {
    Draw.color(energyCollectorColor);
    Lines.stroke(e.fout() * 2);
    Lines.circle(e.x, e.y, 7 + e.fin() * 8);

    Angles.randLenVectors(e.id, 20, 4 + 20 * e.fin(), (x, y) => {
        Lines.lineAngle(e.x + x, e.y + y, Mathf.angle(x, y), e.fslope() * 4 + 1);
    });
});

energyCollectorWeaver.drawer = new DrawWeave();
energyCollectorWeaver.craftEffect = weaverOut;
