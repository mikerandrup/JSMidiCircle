# JSMidiCircle

A WebMIDI-based Circle of Fifths visualizer that helps you learn music theory by displaying chords and notes in real-time as you play on a MIDI keyboard.

## Features

- **Chord Detection** - Recognizes chords and displays the name in the center (e.g., "C / major seventh")
- **Inversion Detection** - Shows when you're playing an inversion (e.g., "1st inversion (3rd in bass)")
- **Root Highlighting** - Chord root lights up green, other pressed notes show grey
- **Circle of Fifths / Chromatic Toggle** - Switch between layouts with the button in the top-right
- **Real-time MIDI input** - Notes respond instantly as you play
- **Sustain pedal support** - Visual feedback respects sustain pedal state
- **Enharmonic switching** - Click accidental notes to toggle between sharps and flats (e.g., Db/C#)

## Requirements

- A modern browser with WebMIDI support (Chrome recommended)
- A MIDI input device (keyboard, controller, etc.)

## Getting Started

### Development Server

```bash
npm install
npm start
```

Then open http://localhost:3000 in your browser.

### Usage

1. Connect your MIDI device
2. Open the app in Chrome
3. Play notes on your MIDI device to see them on the circle
4. Play 3+ notes to see chord detection (root highlights green)
5. Use the top-right button to toggle between Circle of Fifths and Chromatic layouts
6. Click on notes with accidentals to switch between sharp/flat notation

## Examples

- **C-E-G** → Shows "C / major" with C highlighted green
- **E-G-C** → Shows "C / major" + "1st inversion (3rd in bass)"
- **C-E-G-B** → Shows "C / major seventh"

## Credits

Forked from the original [JSMidiCircle](https://github.com/RasmusMathiesen/JSMidiCircle) by RasmusMathiesen (created October 2019).

Chord detection powered by [tonal.js](https://github.com/tonaljs/tonal).
