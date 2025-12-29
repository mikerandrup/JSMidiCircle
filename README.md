# JSMidiCircle

A WebMIDI-based Circle of Fifths visualizer that displays notes in a circle and lights them up in real-time as you play on a MIDI keyboard.

## Features

- **Circle of Fifths display** - Notes arranged in the traditional Circle of Fifths layout
- **Chromatic mode** - Toggle to chromatic arrangement by clicking the center
- **Real-time MIDI input** - Notes light up as you play
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
3. Play notes on your MIDI device to see them light up on the circle
4. Click the center circle to toggle between Circle of Fifths and chromatic layouts
5. Click on notes with accidentals to switch between sharp/flat notation

## Credits

Forked from the original [JSMidiCircle](https://github.com/RasmusMathiesen/JSMidiCircle) by RasmusMathiesen (created October 2019).
