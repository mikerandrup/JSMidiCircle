// DOM element caching and setup

// Circle and group elements (indexed 0-11)
export const circles = [];
export const svgGroups = [];

// Initialize DOM element references
export function initDom() {
    for (let i = 1; i < 13; i++) {
        circles.push(document.getElementById('c' + i));
        svgGroups.push(document.getElementById('g' + i));
    }

    // Add cover circles for animation
    circles.forEach(circle => {
        circle.insertAdjacentHTML('afterend', '<circle cx="0" cy="0" r="21" class="cover"/>');
    });
}

// Chord display elements (cached on first access)
let _chordElements = null;
export function getChordElements() {
    if (!_chordElements) {
        _chordElements = {
            root: document.getElementById('chordRoot'),
            quality: document.getElementById('chordQuality'),
            inversion: document.getElementById('chordInversion')
        };
    }
    return _chordElements;
}
