// SVG element generation for additional rings
import { RING_CONFIG } from './constants.js';

const SVG_NS = 'http://www.w3.org/2000/svg';

// Generate SVG group with circle and text for a note
export function createNoteGroup(ringKey, chromIndex) {
    const config = RING_CONFIG[ringKey];
    const groupId = `${config.groupPrefix}${chromIndex + 1}`;
    const circleId = `${config.idPrefix}${chromIndex + 1}`;

    const group = document.createElementNS(SVG_NS, 'g');
    group.setAttribute('id', groupId);
    group.setAttribute('data-ring', ringKey);
    group.setAttribute('data-chrom', chromIndex);

    const circle = document.createElementNS(SVG_NS, 'circle');
    circle.setAttribute('class', 'off');
    circle.setAttribute('id', circleId);
    circle.setAttribute('cx', '0');
    circle.setAttribute('cy', '0');
    circle.setAttribute('r', config.circleRadius);
    circle.setAttribute('stroke', 'black');
    circle.setAttribute('stroke-width', config.strokeWidth);
    circle.setAttribute('data-n', '0');

    const text = document.createElementNS(SVG_NS, 'text');
    text.setAttribute('text-anchor', 'middle');
    text.setAttribute('alignment-baseline', 'central');
    text.setAttribute('font-size', config.fontSize);
    text.textContent = '';  // Will be set by updateAccidentals

    group.appendChild(circle);
    group.appendChild(text);

    return group;
}

// Generate all groups for a ring and insert before center circle
export function generateRing(ringKey, svgElement) {
    const centerCircle = svgElement.querySelector('#centerCircle');

    for (let i = 0; i < 12; i++) {
        const group = createNoteGroup(ringKey, i);
        svgElement.insertBefore(group, centerCircle);
    }
}
