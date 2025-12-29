# CLAUDE.md

Project instructions for Claude Code when working with this codebase.

## Project Overview

JSMidiCircle is a WebMIDI-based Circle of Fifths visualizer with chord detection. It displays 12 musical notes in a circle, detects chords in real-time, and provides visual feedback to help learn music theory.

## Technology Stack

- **Frontend**: Vanilla HTML/CSS/JavaScript (ES6+)
- **MIDI**: WebMIDI API via webmidi.js library (v2.5.3)
- **Chord Detection**: tonal.js library
- **Build**: esbuild for bundling
- **Server**: Node.js with Express for local development

## Project Structure

```
/
├── src/
│   └── main.js       # Source - MIDI handling, chord detection, circle arrangement
├── dist/
│   └── bundle.js     # Built output (generated)
├── index.html        # Main HTML with SVG circle layout and styles
├── server.js         # Express server for local development
└── package.json      # Node.js project configuration
```

## Key Concepts

### Circle Arrangement
- Notes positioned around a circle using trigonometric calculations
- `chromToCOF()` converts between chromatic index and Circle of Fifths position
- Layout toggles between Circle of Fifths (musical) and chromatic (sequential)

### Chord Detection
- Uses `Chord.detect()` from tonal.js to identify chords from active notes
- Uses `Chord.get()` to retrieve chord details (tonic, type, notes)
- Detects inversions via slash notation (e.g., "C/E" = C with E in bass)
- Displays root note, quality, and inversion info in center circle

### MIDI Handling
- Uses webmidi.js library (bundled via npm)
- Listens for `noteon`, `noteoff`, and `controlchange` events
- Tracks note state with `noteArray` (supports multiple simultaneous octaves)
- Sustain pedal (CC64) support with special visual states
- 40ms debounce on chord detection to handle rolled chords

### Visual States
- `.on` class (green) - chord root when a chord is detected
- `.partial` class (grey) - pressed notes that aren't the chord root
- `.off` class (white) - notes not being played
- `data-n` attribute tracks note intensity for stroke width styling

### Chord Display (center circle)
- `#chordRoot` - large text showing root note (e.g., "C")
- `#chordQuality` - smaller text showing chord type (e.g., "major seventh")
- `#chordInversion` - small grey text for inversions (e.g., "1st inversion (3rd in bass)")

## Development Commands

```bash
npm install     # Install dependencies
npm run build   # Build the bundle
npm start       # Build and start server on localhost:3000
npm run dev     # Start server without rebuilding
```

## Browser Requirements

WebMIDI requires a secure context (HTTPS or localhost) and is best supported in Chrome.
