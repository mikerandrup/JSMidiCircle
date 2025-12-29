# CLAUDE.md

Project instructions for Claude Code when working with this codebase.

## Project Overview

JSMidiCircle is a WebMIDI-based Circle of Fifths visualizer. It displays 12 musical notes in a circle and provides real-time visual feedback when notes are played on a connected MIDI device.

## Technology Stack

- **Frontend**: Vanilla HTML/CSS/JavaScript (ES6+)
- **MIDI**: WebMIDI API via webmidi.js library (v2.5.3)
- **Build**: esbuild for bundling
- **Server**: Node.js with Express for local development

## Project Structure

```
/
├── src/
│   └── main.js       # Source - MIDI handling and circle arrangement logic
├── dist/
│   └── bundle.js     # Built output (generated)
├── index.html        # Main HTML with SVG circle layout and styles
├── server.js         # Express server for local development
└── package.json      # Node.js project configuration
```

## Key Concepts

### Circle Arrangement
- Notes are positioned around a circle using trigonometric calculations
- `chromToCOF()` converts between chromatic index and Circle of Fifths position
- Layout toggles between Circle of Fifths (musical) and chromatic (sequential) arrangements

### MIDI Handling
- Uses webmidi.js library (bundled via npm)
- Listens for `noteon`, `noteoff`, and `controlchange` events
- Tracks note state with `noteArray` (supports multiple simultaneous octaves)
- Sustain pedal (CC64) support with special visual states

### Visual States
- `data-n` attribute tracks note intensity (-1 = sustained, 0 = off, 1+ = number of keys pressed)
- CSS transitions provide smooth visual feedback
- Green gradient indicates active notes

## Development Commands

```bash
npm install     # Install dependencies
npm run build   # Build the bundle
npm start       # Build and start server on localhost:3000
npm run dev     # Start server without rebuilding
```

## Browser Requirements

WebMIDI requires a secure context (HTTPS or localhost) and is best supported in Chrome.
