// Circle positioning and geometry calculations
import { svgGroups } from './dom.js';

// Convert chromatic index to Circle of Fifths position (and vice versa)
export function chromToCOF(index) {
    return (index * 7) % 12;
}

// Convert circle position (0=top, clockwise) to x,y coordinates
export function indexToCoordinates(index) {
    const angle = (index - 3) * ((2 * Math.PI) / 12);
    const x = Math.cos(angle) * 100 + 125;
    const y = Math.sin(angle) * 100 + 125;
    return [x, y];
}

// Arrange circles in Circle of Fifths or chromatic order
export function arrangeCircles(useCoF) {
    for (let i = 0; i < 12; i++) {
        const xy = useCoF ? indexToCoordinates(chromToCOF(i)) : indexToCoordinates(i);
        svgGroups[i].setAttribute('transform', `translate(${xy[0].toFixed(3)},${xy[1].toFixed(3)})`);
    }
}
