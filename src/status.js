// Status display utility

export function showStatus(message, isError = false) {
    const midiStatus = document.getElementById('midiStatus');
    if (midiStatus) {
        midiStatus.innerHTML = message;
        midiStatus.style.background = isError ? '#660000' : 'black';
    }
    if (isError) {
        console.error('[JSMidiCircle]', message);
    } else {
        console.log('[JSMidiCircle]', message);
    }
}
