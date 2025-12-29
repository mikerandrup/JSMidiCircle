import WebMidi from 'webmidi';
import { Chord } from 'tonal';

// Note names for chord detection (chromatic, 0-11)
const NOTE_NAMES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

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

// Layout state: true = Circle of Fifths, false = Chromatic
let useCircleOfFifths = true;
arrangeCircles(useCircleOfFifths);

// Layout toggle button
const layoutButton = document.getElementById('layoutToggle');
if (layoutButton) {
    layoutButton.addEventListener('click', () => {
        useCircleOfFifths = !useCircleOfFifths;
        arrangeCircles(useCircleOfFifths);
        layoutButton.textContent = useCircleOfFifths ? 'Circle of Fifths' : 'Chromatic';
    });
}

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
        const chordRoot = document.getElementById('chordRoot');
        const chordQuality = document.getElementById('chordQuality');
        const chordInversion = document.getElementById('chordInversion');
        let chordTimeout = null;

        // Convert note name to chromatic index (0-11)
        function noteToIndex(noteName) {
            const base = noteName.charAt(0).toUpperCase();
            const accidental = noteName.slice(1);
            const baseIndex = { 'C': 0, 'D': 2, 'E': 4, 'F': 5, 'G': 7, 'A': 9, 'B': 11 }[base];
            let offset = 0;
            if (accidental.includes('#')) offset = accidental.split('#').length - 1;
            if (accidental.includes('b')) offset = -(accidental.split('b').length - 1);
            return (baseIndex + offset + 12) % 12;
        }

        // Format root note - expand accidentals
        function formatRoot(root) {
            return root
                .replace(/#/g, ' sharp')
                .replace(/b/g, ' flat');
        }

        function detectAndDisplayChord() {
            // Get all active note names
            const activeNotes = [];
            const activeIndices = [];
            for (let i = 0; i < 12; i++) {
                if (noteArray[i] !== 0) {
                    activeNotes.push(NOTE_NAMES[i]);
                    activeIndices.push(i);
                }
            }

            // Reset all circles to appropriate state
            for (let i = 0; i < 12; i++) {
                if (noteArray[i] !== 0) {
                    circles[i].setAttribute('class', 'partial');
                } else {
                    circles[i].setAttribute('class', 'off');
                }
            }

            // Clear chord display by default
            if (chordRoot) chordRoot.textContent = '';
            if (chordQuality) chordQuality.textContent = '';
            if (chordInversion) chordInversion.textContent = '';

            // Show hint when 1-2 notes pressed
            if (activeNotes.length > 0 && activeNotes.length < 3) {
                if (chordQuality) {
                    chordQuality.textContent = '(add more notes)';
                }
            }

            if (activeNotes.length >= 3) {
                const detected = Chord.detect(activeNotes);
                if (detected.length > 0) {
                    const chordName = detected[0];
                    const chordInfo = Chord.get(chordName);

                    if (chordInfo && chordInfo.tonic) {
                        // Highlight only the root note
                        const rootIndex = noteToIndex(chordInfo.tonic);
                        if (noteArray[rootIndex] !== 0) {
                            circles[rootIndex].setAttribute('class', 'on');
                        }

                        // Display formatted chord name
                        if (chordRoot && chordQuality) {
                            chordRoot.textContent = formatRoot(chordInfo.tonic);
                            const quality = chordInfo.type || '';
                            chordQuality.textContent = quality;
                        }

                        // Check for inversion (slash chord notation)
                        if (chordInversion && chordName.includes('/')) {
                            const bassNote = chordName.split('/')[1];
                            const bassIndex = noteToIndex(bassNote);
                            const rootIdx = noteToIndex(chordInfo.tonic);
                            const interval = (bassIndex - rootIdx + 12) % 12;

                            // Determine inversion based on interval from root
                            let inversionText = '';
                            if (interval === 3 || interval === 4) {
                                inversionText = '1st inversion (3rd in bass)';
                            } else if (interval === 7) {
                                inversionText = '2nd inversion (5th in bass)';
                            } else if (interval === 10 || interval === 11) {
                                inversionText = '3rd inversion (7th in bass)';
                            } else {
                                inversionText = formatRoot(bassNote) + ' in bass';
                            }
                            chordInversion.textContent = inversionText;
                        }
                    }
                }
            }
        }

        function updateNote(state, e) {
            const note = e.note.number % 12;

            if (state === 'on') {
                noteArray[note]++;
                if (noteArray[note] === 0) noteArray[note] = 1;
                circles[note].setAttribute('data-n', noteArray[note]);
                // Initially show as partial until chord detection runs
                if (noteArray[note] === 1) {
                    circles[note].setAttribute('class', 'partial');
                }
            } else {
                noteArray[note]--;
                if (noteArray[note] === 0) {
                    if (sustainPedal) {
                        noteArray[note] = -1;
                    } else {
                        circles[note].setAttribute('class', 'off');
                    }
                }
                circles[note].setAttribute('data-n', noteArray[note]);
            }

            // Debounced chord detection
            clearTimeout(chordTimeout);
            chordTimeout = setTimeout(detectAndDisplayChord, 40);
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
                        detectAndDisplayChord();
                    }
                }
            }
        });

        showStatus('Connected: ' + (input.name || 'MIDI Device'));
    });
}

initMidi();
