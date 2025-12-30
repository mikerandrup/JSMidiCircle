// Circle positioning and geometry calculations
import { rings } from './dom.js';
import { RING_CONFIG, RING_ORDER } from './constants.js';

const CENTER = 125;

// Convert chromatic index to Circle of Fifths position (and vice versa)
export function chromToCOF(index) {
    return (index * 7) % 12;
}

// Convert circle position (0=top, clockwise) to x,y coordinates
// radius parameter allows different ring sizes
export function indexToCoordinates(index, radius = 100) {
    const angle = (index - 3) * ((2 * Math.PI) / 12);
    const x = Math.cos(angle) * radius + CENTER;
    const y = Math.sin(angle) * radius + CENTER;
    return [x, y];
}

// Arrange all rings in Circle of Fifths or chromatic order
export function arrangeCircles(useCoF) {
    for (const ringKey of RING_ORDER) {
        const config = RING_CONFIG[ringKey];
        const groups = rings[ringKey]?.groups;
        if (!groups) continue;

        for (let chromIndex = 0; chromIndex < 12; chromIndex++) {
            const group = groups[chromIndex];
            if (!group) continue;

            let positionIndex;
            if (ringKey === 'major') {
                // Major ring: standard CoF or chromatic positioning
                positionIndex = useCoF ? chromToCOF(chromIndex) : chromIndex;
            } else {
                // Minor ring positioning
                if (useCoF) {
                    // Relative minor at same visual position as its relative major
                    // Am (chromIndex=9) should appear inside C (position 0)
                    // Relative major is 3 semitones up: (9+3)%12 = 0 = C
                    const relativeMajorChrom = (chromIndex + 3) % 12;
                    positionIndex = chromToCOF(relativeMajorChrom);
                } else {
                    // Parallel minor directly inside its parallel major
                    positionIndex = chromIndex;
                }
            }

            const [x, y] = indexToCoordinates(positionIndex, config.radius);
            group.setAttribute('transform',
                `translate(${x.toFixed(3)},${y.toFixed(3)})`);
        }
    }
}
