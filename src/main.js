import WebMidi from 'webmidi';

// DOM elements
const circles = [];
const svgGroups = [];

for (let i = 1; i < 13; i++) {
    circles.push(document.getElementById('c' + i));
    svgGroups.push(document.getElementById('g' + i));
}

// Add cover circles for animation
circles.forEach(circle => {
    circle.insertAdjacentHTML('afterend', '<circle cx="0" cy="0" r="21" class="cover"/>');
});

// Convert chromatic index to Circle of Fifths position (and vice versa)
function chromToCOF(index) {
    return (index * 7) % 12;
}

// Convert circle position (0=top, clockwise) to x,y coordinates
function indexToCoordinates(index) {
    const angle = (index - 3) * ((2 * Math.PI) / 12);
    const x = Math.cos(angle) * 100 + 125;
    const y = Math.sin(angle) * 100 + 125;
    return [x, y];
}

// Arrange circles in Circle of Fifths or chromatic order
function arrangeCircles(useCoF) {
    for (let i = 0; i < 12; i++) {
        const xy = useCoF ? indexToCoordinates(chromToCOF(i)) : indexToCoordinates(i);
        svgGroups[i].setAttribute('transform', `translate(${xy[0].toFixed(3)},${xy[1].toFixed(3)})`);
    }
}

arrangeCircles(true);

let layout = true;
window.switchLayout = function() {
    layout = !layout;
    arrangeCircles(layout);
};

window.switchText = function(element) {
    const swaps = {
        'B♭': 'A♯', 'A♯': 'B♭',
        'A♭': 'G♯', 'G♯': 'A♭',
        'G♭': 'F♯', 'F♯': 'G♭',
        'E♭': 'D♯', 'D♯': 'E♭',
        'D♭': 'C♯', 'C♯': 'D♭'
    };
    if (swaps[element.textContent]) {
        element.textContent = swaps[element.textContent];
    }
};

// Status display
function showStatus(message, isError = false) {
    const infobox = document.getElementById('infobox');
    if (infobox) {
        infobox.innerHTML = message;
        infobox.style.opacity = '1';
        infobox.style.background = isError ? '#660000' : 'black';
    }
    if (isError) {
        console.error('[JSMidiCircle]', message);
    } else {
        console.log('[JSMidiCircle]', message);
    }
}

// MIDI initialization
function initMidi() {
    console.log('[JSMidiCircle] Initializing WebMidi...');

    WebMidi.enable(function(err) {
        if (err) {
            console.error('[JSMidiCircle] WebMidi.enable error:', err);
            showStatus('WebMidi error: ' + err.message, true);
            return;
        }

        console.log('[JSMidiCircle] WebMidi enabled');
        console.log('[JSMidiCircle] Inputs:', WebMidi.inputs.length);
        WebMidi.inputs.forEach((input, i) => {
            console.log(`[JSMidiCircle] Input ${i}: ${input.name} (${input.manufacturer})`);
        });

        if (WebMidi.inputs.length === 0) {
            showStatus('No MIDI input detected. Connect a device and refresh.', true);
            return;
        }

        const input = WebMidi.inputs[0];
        let sustainPedal = false;
        const noteArray = new Array(12).fill(0);

        function updateNote(state, e) {
            const note = e.note.number % 12;

            if (state === 'on') {
                noteArray[note]++;
                if (noteArray[note] === 0) noteArray[note] = 1;
                circles[note].setAttribute('data-n', noteArray[note]);
                if (noteArray[note] === 1) {
                    circles[note].setAttribute('class', 'on');
                }
            } else {
                noteArray[note]--;
                if (noteArray[note] === 0) {
                    if (sustainPedal) {
                        noteArray[note] = -1;
                        state = 'on';
                    }
                    circles[note].setAttribute('class', state === 'on' ? 'on' : 'off');
                }
                circles[note].setAttribute('data-n', noteArray[note]);
            }
        }

        input.addListener('noteon', 'all', e => updateNote('on', e));
        input.addListener('noteoff', 'all', e => updateNote('off', e));

        input.addListener('controlchange', 'all', e => {
            if (e.controller.number === 64) {
                if (e.value > 63) {
                    sustainPedal = true;
                } else {
                    sustainPedal = false;
                    if (e.value === 0) {
                        noteArray.forEach((value, index) => {
                            if (value === -1) {
                                noteArray[index] = 0;
                                circles[index].setAttribute('data-n', 0);
                            }
                        });
                    }
                }
            }
        });

        showStatus('Connected: ' + (input.name || 'MIDI Device'));
    });
}

initMidi();
