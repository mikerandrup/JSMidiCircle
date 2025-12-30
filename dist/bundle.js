(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod2) => function __require() {
    return mod2 || (0, cb[__getOwnPropNames(cb)[0]])((mod2 = { exports: {} }).exports, mod2), mod2.exports;
  };
  var __export = (target, all4) => {
    for (var name2 in all4)
      __defProp(target, name2, { get: all4[name2], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod2, isNodeMode, target) => (target = mod2 != null ? __create(__getProtoOf(mod2)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod2 || !mod2.__esModule ? __defProp(target, "default", { value: mod2, enumerable: true }) : target,
    mod2
  ));

  // node_modules/webmidi/webmidi.min.js
  var require_webmidi_min = __commonJS({
    "node_modules/webmidi/webmidi.min.js"(exports, module) {
      !function(scope) {
        "use strict";
        function WebMidi2() {
          if (WebMidi2.prototype._singleton) throw new Error("WebMidi is a singleton, it cannot be instantiated directly.");
          (WebMidi2.prototype._singleton = this)._inputs = [], this._outputs = [], this._userHandlers = {}, this._stateChangeQueue = [], this._processingStateChange = false, this._midiInterfaceEvents = ["connected", "disconnected"], this._nrpnBuffer = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []], this._nrpnEventsEnabled = true, this._nrpnTypes = ["entry", "increment", "decrement"], this._notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"], this._semitones = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 }, Object.defineProperties(this, { MIDI_SYSTEM_MESSAGES: { value: { sysex: 240, timecode: 241, songposition: 242, songselect: 243, tuningrequest: 246, sysexend: 247, clock: 248, start: 250, continue: 251, stop: 252, activesensing: 254, reset: 255, midimessage: 0, unknownsystemmessage: -1 }, writable: false, enumerable: true, configurable: false }, MIDI_CHANNEL_MESSAGES: { value: { noteoff: 8, noteon: 9, keyaftertouch: 10, controlchange: 11, channelmode: 11, nrpn: 11, programchange: 12, channelaftertouch: 13, pitchbend: 14 }, writable: false, enumerable: true, configurable: false }, MIDI_REGISTERED_PARAMETER: { value: { pitchbendrange: [0, 0], channelfinetuning: [0, 1], channelcoarsetuning: [0, 2], tuningprogram: [0, 3], tuningbank: [0, 4], modulationrange: [0, 5], azimuthangle: [61, 0], elevationangle: [61, 1], gain: [61, 2], distanceratio: [61, 3], maximumdistance: [61, 4], maximumdistancegain: [61, 5], referencedistanceratio: [61, 6], panspreadangle: [61, 7], rollangle: [61, 8] }, writable: false, enumerable: true, configurable: false }, MIDI_CONTROL_CHANGE_MESSAGES: { value: { bankselectcoarse: 0, modulationwheelcoarse: 1, breathcontrollercoarse: 2, footcontrollercoarse: 4, portamentotimecoarse: 5, dataentrycoarse: 6, volumecoarse: 7, balancecoarse: 8, pancoarse: 10, expressioncoarse: 11, effectcontrol1coarse: 12, effectcontrol2coarse: 13, generalpurposeslider1: 16, generalpurposeslider2: 17, generalpurposeslider3: 18, generalpurposeslider4: 19, bankselectfine: 32, modulationwheelfine: 33, breathcontrollerfine: 34, footcontrollerfine: 36, portamentotimefine: 37, dataentryfine: 38, volumefine: 39, balancefine: 40, panfine: 42, expressionfine: 43, effectcontrol1fine: 44, effectcontrol2fine: 45, holdpedal: 64, portamento: 65, sustenutopedal: 66, softpedal: 67, legatopedal: 68, hold2pedal: 69, soundvariation: 70, resonance: 71, soundreleasetime: 72, soundattacktime: 73, brightness: 74, soundcontrol6: 75, soundcontrol7: 76, soundcontrol8: 77, soundcontrol9: 78, soundcontrol10: 79, generalpurposebutton1: 80, generalpurposebutton2: 81, generalpurposebutton3: 82, generalpurposebutton4: 83, reverblevel: 91, tremololevel: 92, choruslevel: 93, celestelevel: 94, phaserlevel: 95, databuttonincrement: 96, databuttondecrement: 97, nonregisteredparametercoarse: 98, nonregisteredparameterfine: 99, registeredparametercoarse: 100, registeredparameterfine: 101 }, writable: false, enumerable: true, configurable: false }, MIDI_NRPN_MESSAGES: { value: { entrymsb: 6, entrylsb: 38, increment: 96, decrement: 97, paramlsb: 98, parammsb: 99, nullactiveparameter: 127 }, writable: false, enumerable: true, configurable: false }, MIDI_CHANNEL_MODE_MESSAGES: { value: { allsoundoff: 120, resetallcontrollers: 121, localcontrol: 122, allnotesoff: 123, omnimodeoff: 124, omnimodeon: 125, monomodeon: 126, polymodeon: 127 }, writable: false, enumerable: true, configurable: false }, octaveOffset: { value: 0, writable: true, enumerable: true, configurable: false } }), Object.defineProperties(this, { supported: { enumerable: true, get: function() {
            return "requestMIDIAccess" in navigator;
          } }, enabled: { enumerable: true, get: function() {
            return void 0 !== this.interface;
          }.bind(this) }, inputs: { enumerable: true, get: function() {
            return this._inputs;
          }.bind(this) }, outputs: { enumerable: true, get: function() {
            return this._outputs;
          }.bind(this) }, sysexEnabled: { enumerable: true, get: function() {
            return !(!this.interface || !this.interface.sysexEnabled);
          }.bind(this) }, nrpnEventsEnabled: { enumerable: true, get: function() {
            return !!this._nrpnEventsEnabled;
          }.bind(this), set: function(enabled) {
            return this._nrpnEventsEnabled = enabled, this._nrpnEventsEnabled;
          } }, nrpnTypes: { enumerable: true, get: function() {
            return this._nrpnTypes;
          }.bind(this) }, time: { enumerable: true, get: function() {
            return performance.now();
          } } });
        }
        var wm = new WebMidi2();
        function Input(midiInput) {
          var that = this;
          this._userHandlers = { channel: {}, system: {} }, this._midiInput = midiInput, Object.defineProperties(this, { connection: { enumerable: true, get: function() {
            return that._midiInput.connection;
          } }, id: { enumerable: true, get: function() {
            return that._midiInput.id;
          } }, manufacturer: { enumerable: true, get: function() {
            return that._midiInput.manufacturer;
          } }, name: { enumerable: true, get: function() {
            return that._midiInput.name;
          } }, state: { enumerable: true, get: function() {
            return that._midiInput.state;
          } }, type: { enumerable: true, get: function() {
            return that._midiInput.type;
          } } }), this._initializeUserHandlers(), this._midiInput.onmidimessage = this._onMidiMessage.bind(this);
        }
        function Output(midiOutput) {
          var that = this;
          this._midiOutput = midiOutput, Object.defineProperties(this, { connection: { enumerable: true, get: function() {
            return that._midiOutput.connection;
          } }, id: { enumerable: true, get: function() {
            return that._midiOutput.id;
          } }, manufacturer: { enumerable: true, get: function() {
            return that._midiOutput.manufacturer;
          } }, name: { enumerable: true, get: function() {
            return that._midiOutput.name;
          } }, state: { enumerable: true, get: function() {
            return that._midiOutput.state;
          } }, type: { enumerable: true, get: function() {
            return that._midiOutput.type;
          } } });
        }
        WebMidi2.prototype.enable = function(callback, sysex) {
          this.enabled || (this.supported ? navigator.requestMIDIAccess({ sysex }).then(function(midiAccess) {
            var promiseTimeout, events = [], promises = [];
            this.interface = midiAccess, this._resetInterfaceUserHandlers(), this.interface.onstatechange = function(e) {
              events.push(e);
            };
            for (var inputs = midiAccess.inputs.values(), input = inputs.next(); input && !input.done; input = inputs.next()) promises.push(input.value.open());
            for (var outputs = midiAccess.outputs.values(), output = outputs.next(); output && !output.done; output = outputs.next()) promises.push(output.value.open());
            function onPortsOpen() {
              clearTimeout(promiseTimeout), this._updateInputsAndOutputs(), this.interface.onstatechange = this._onInterfaceStateChange.bind(this), "function" == typeof callback && callback.call(this), events.forEach(function(event) {
                this._onInterfaceStateChange(event);
              }.bind(this));
            }
            promiseTimeout = setTimeout(onPortsOpen.bind(this), 200), Promise && Promise.all(promises).catch(function(err) {
            }).then(onPortsOpen.bind(this));
          }.bind(this), function(err) {
            "function" == typeof callback && callback.call(this, err);
          }.bind(this)) : "function" == typeof callback && callback(new Error("The Web MIDI API is not supported by your browser.")));
        }, WebMidi2.prototype.disable = function() {
          if (!this.supported) throw new Error("The Web MIDI API is not supported by your browser.");
          this.enabled && (this.removeListener(), this.inputs.forEach(function(input) {
            input.removeListener();
          })), this.interface && (this.interface.onstatechange = void 0), this.interface = void 0, this._inputs = [], this._outputs = [], this._nrpnEventsEnabled = true, this._resetInterfaceUserHandlers();
        }, WebMidi2.prototype.addListener = function(type, listener) {
          if (!this.enabled) throw new Error("WebMidi must be enabled before adding event listeners.");
          if ("function" != typeof listener) throw new TypeError("The 'listener' parameter must be a function.");
          if (!(0 <= this._midiInterfaceEvents.indexOf(type))) throw new TypeError("The specified event type is not supported.");
          return this._userHandlers[type].push(listener), this;
        }, WebMidi2.prototype.hasListener = function(type, listener) {
          if (!this.enabled) throw new Error("WebMidi must be enabled before checking event listeners.");
          if ("function" != typeof listener) throw new TypeError("The 'listener' parameter must be a function.");
          if (!(0 <= this._midiInterfaceEvents.indexOf(type))) throw new TypeError("The specified event type is not supported.");
          for (var o = 0; o < this._userHandlers[type].length; o++) if (this._userHandlers[type][o] === listener) return true;
          return false;
        }, WebMidi2.prototype.removeListener = function(type, listener) {
          if (!this.enabled) throw new Error("WebMidi must be enabled before removing event listeners.");
          if (void 0 !== listener && "function" != typeof listener) throw new TypeError("The 'listener' parameter must be a function.");
          if (0 <= this._midiInterfaceEvents.indexOf(type)) if (listener) for (var o = 0; o < this._userHandlers[type].length; o++) this._userHandlers[type][o] === listener && this._userHandlers[type].splice(o, 1);
          else this._userHandlers[type] = [];
          else {
            if (void 0 !== type) throw new TypeError("The specified event type is not supported.");
            this._resetInterfaceUserHandlers();
          }
          return this;
        }, WebMidi2.prototype.toMIDIChannels = function(channel) {
          var channels;
          if ("all" === channel || void 0 === channel) channels = ["all"];
          else {
            if ("none" === channel) return channels = [];
            channels = Array.isArray(channel) ? channel : [channel];
          }
          return -1 < channels.indexOf("all") && (channels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]), channels.map(function(ch) {
            return parseInt(ch);
          }).filter(function(ch) {
            return 1 <= ch && ch <= 16;
          });
        }, WebMidi2.prototype.getInputById = function(id) {
          if (!this.enabled) throw new Error("WebMidi is not enabled.");
          id = String(id);
          for (var i = 0; i < this.inputs.length; i++) if (this.inputs[i].id === id) return this.inputs[i];
          return false;
        }, WebMidi2.prototype.getOutputById = function(id) {
          if (!this.enabled) throw new Error("WebMidi is not enabled.");
          id = String(id);
          for (var i = 0; i < this.outputs.length; i++) if (this.outputs[i].id === id) return this.outputs[i];
          return false;
        }, WebMidi2.prototype.getInputByName = function(name2) {
          if (!this.enabled) throw new Error("WebMidi is not enabled.");
          for (var i = 0; i < this.inputs.length; i++) if (~this.inputs[i].name.indexOf(name2)) return this.inputs[i];
          return false;
        }, WebMidi2.prototype.getOctave = function(number) {
          if (null != number && 0 <= number && number <= 127) return Math.floor(Math.floor(number) / 12 - 1) + Math.floor(wm.octaveOffset);
        }, WebMidi2.prototype.getOutputByName = function(name2) {
          if (!this.enabled) throw new Error("WebMidi is not enabled.");
          for (var i = 0; i < this.outputs.length; i++) if (~this.outputs[i].name.indexOf(name2)) return this.outputs[i];
          return false;
        }, WebMidi2.prototype.guessNoteNumber = function(input) {
          var output = false;
          if (input && input.toFixed && 0 <= input && input <= 127 ? output = Math.round(input) : 0 <= parseInt(input) && parseInt(input) <= 127 ? output = parseInt(input) : ("string" == typeof input || input instanceof String) && (output = this.noteNameToNumber(input)), false === output) throw new Error("Invalid input value (" + input + ").");
          return output;
        }, WebMidi2.prototype.noteNameToNumber = function(name2) {
          "string" != typeof name2 && (name2 = "");
          var matches = name2.match(/([CDEFGAB])(#{0,2}|b{0,2})(-?\d+)/i);
          if (!matches) throw new RangeError("Invalid note name.");
          var semitones = wm._semitones[matches[1].toUpperCase()], result = 12 * (parseInt(matches[3]) + 1 - Math.floor(wm.octaveOffset)) + semitones;
          if (-1 < matches[2].toLowerCase().indexOf("b") ? result -= matches[2].length : -1 < matches[2].toLowerCase().indexOf("#") && (result += matches[2].length), result < 0 || 127 < result) throw new RangeError("Invalid note name or note outside valid range.");
          return result;
        }, WebMidi2.prototype._updateInputsAndOutputs = function() {
          this._updateInputs(), this._updateOutputs();
        }, WebMidi2.prototype._updateInputs = function() {
          for (var i = 0; i < this._inputs.length; i++) {
            for (var remove = true, updated = this.interface.inputs.values(), input = updated.next(); input && !input.done; input = updated.next()) if (this._inputs[i]._midiInput === input.value) {
              remove = false;
              break;
            }
            remove && this._inputs.splice(i, 1);
          }
          this.interface && this.interface.inputs.forEach(function(nInput) {
            for (var add5 = true, j = 0; j < this._inputs.length; j++) this._inputs[j]._midiInput === nInput && (add5 = false);
            add5 && this._inputs.push(new Input(nInput));
          }.bind(this));
        }, WebMidi2.prototype._updateOutputs = function() {
          for (var i = 0; i < this._outputs.length; i++) {
            for (var remove = true, updated = this.interface.outputs.values(), output = updated.next(); output && !output.done; output = updated.next()) if (this._outputs[i]._midiOutput === output.value) {
              remove = false;
              break;
            }
            remove && this._outputs.splice(i, 1);
          }
          this.interface && this.interface.outputs.forEach(function(nOutput) {
            for (var add5 = true, j = 0; j < this._outputs.length; j++) this._outputs[j]._midiOutput === nOutput && (add5 = false);
            add5 && this._outputs.push(new Output(nOutput));
          }.bind(this));
        }, WebMidi2.prototype._onInterfaceStateChange = function(e) {
          this._updateInputsAndOutputs();
          var event = { timestamp: e.timeStamp, type: e.port.state };
          this.interface && "connected" === e.port.state ? "output" === e.port.type ? event.port = this.getOutputById(e.port.id) : "input" === e.port.type && (event.port = this.getInputById(e.port.id)) : event.port = { connection: "closed", id: e.port.id, manufacturer: e.port.manufacturer, name: e.port.name, state: e.port.state, type: e.port.type }, this._userHandlers[e.port.state].forEach(function(handler) {
            handler(event);
          });
        }, WebMidi2.prototype._resetInterfaceUserHandlers = function() {
          for (var i = 0; i < this._midiInterfaceEvents.length; i++) this._userHandlers[this._midiInterfaceEvents[i]] = [];
        }, Input.prototype.on = Input.prototype.addListener = function(type, channel, listener) {
          var that = this;
          if (void 0 === channel && (channel = "all"), Array.isArray(channel) || (channel = [channel]), channel.forEach(function(item) {
            if ("all" !== item && !(1 <= item && item <= 16)) throw new RangeError("The 'channel' parameter is invalid.");
          }), "function" != typeof listener) throw new TypeError("The 'listener' parameter must be a function.");
          if (void 0 !== wm.MIDI_SYSTEM_MESSAGES[type]) this._userHandlers.system[type] || (this._userHandlers.system[type] = []), this._userHandlers.system[type].push(listener);
          else {
            if (void 0 === wm.MIDI_CHANNEL_MESSAGES[type]) throw new TypeError("The specified event type is not supported.");
            if (-1 < channel.indexOf("all")) {
              channel = [];
              for (var j = 1; j <= 16; j++) channel.push(j);
            }
            this._userHandlers.channel[type] || (this._userHandlers.channel[type] = []), channel.forEach(function(ch) {
              that._userHandlers.channel[type][ch] || (that._userHandlers.channel[type][ch] = []), that._userHandlers.channel[type][ch].push(listener);
            });
          }
          return this;
        }, Input.prototype.hasListener = function(type, channel, listener) {
          var that = this;
          if ("function" != typeof listener) throw new TypeError("The 'listener' parameter must be a function.");
          if (void 0 === channel && (channel = "all"), channel.constructor !== Array && (channel = [channel]), void 0 !== wm.MIDI_SYSTEM_MESSAGES[type]) {
            for (var o = 0; o < this._userHandlers.system[type].length; o++) if (this._userHandlers.system[type][o] === listener) return true;
          } else if (void 0 !== wm.MIDI_CHANNEL_MESSAGES[type]) {
            if (-1 < channel.indexOf("all")) {
              channel = [];
              for (var j = 1; j <= 16; j++) channel.push(j);
            }
            return !!this._userHandlers.channel[type] && channel.every(function(chNum) {
              var listeners = that._userHandlers.channel[type][chNum];
              return listeners && -1 < listeners.indexOf(listener);
            });
          }
          return false;
        }, Input.prototype.removeListener = function(type, channel, listener) {
          var that = this;
          if (void 0 !== listener && "function" != typeof listener) throw new TypeError("The 'listener' parameter must be a function.");
          if (void 0 === channel && (channel = "all"), channel.constructor !== Array && (channel = [channel]), void 0 !== wm.MIDI_SYSTEM_MESSAGES[type]) if (void 0 === listener) this._userHandlers.system[type] = [];
          else for (var o = 0; o < this._userHandlers.system[type].length; o++) this._userHandlers.system[type][o] === listener && this._userHandlers.system[type].splice(o, 1);
          else if (void 0 !== wm.MIDI_CHANNEL_MESSAGES[type]) {
            if (-1 < channel.indexOf("all")) {
              channel = [];
              for (var j = 1; j <= 16; j++) channel.push(j);
            }
            if (!this._userHandlers.channel[type]) return this;
            channel.forEach(function(chNum) {
              var listeners = that._userHandlers.channel[type][chNum];
              if (listeners) if (void 0 === listener) that._userHandlers.channel[type][chNum] = [];
              else for (var l = 0; l < listeners.length; l++) listeners[l] === listener && listeners.splice(l, 1);
            });
          } else {
            if (void 0 !== type) throw new TypeError("The specified event type is not supported.");
            this._initializeUserHandlers();
          }
          return this;
        }, Input.prototype._initializeUserHandlers = function() {
          for (var prop1 in wm.MIDI_CHANNEL_MESSAGES) Object.prototype.hasOwnProperty.call(wm.MIDI_CHANNEL_MESSAGES, prop1) && (this._userHandlers.channel[prop1] = {});
          for (var prop2 in wm.MIDI_SYSTEM_MESSAGES) Object.prototype.hasOwnProperty.call(wm.MIDI_SYSTEM_MESSAGES, prop2) && (this._userHandlers.system[prop2] = []);
        }, Input.prototype._onMidiMessage = function(e) {
          if (0 < this._userHandlers.system.midimessage.length) {
            var event = { target: this, data: e.data, timestamp: e.timeStamp, type: "midimessage" };
            this._userHandlers.system.midimessage.forEach(function(callback) {
              callback(event);
            });
          }
          e.data[0] < 240 ? (this._parseChannelEvent(e), this._parseNrpnEvent(e)) : e.data[0] <= 255 && this._parseSystemEvent(e);
        }, Input.prototype._parseNrpnEvent = function(e) {
          var data1, data2, command = e.data[0] >> 4, channelBufferIndex = 15 & e.data[0], channel = 1 + channelBufferIndex;
          if (1 < e.data.length && (data1 = e.data[1], data2 = 2 < e.data.length ? e.data[2] : void 0), wm.nrpnEventsEnabled && command === wm.MIDI_CHANNEL_MESSAGES.controlchange && (data1 >= wm.MIDI_NRPN_MESSAGES.increment && data1 <= wm.MIDI_NRPN_MESSAGES.parammsb || data1 === wm.MIDI_NRPN_MESSAGES.entrymsb || data1 === wm.MIDI_NRPN_MESSAGES.entrylsb)) {
            var ccEvent = { target: this, type: "controlchange", data: e.data, timestamp: e.timeStamp, channel, controller: { number: data1, name: this.getCcNameByNumber(data1) }, value: data2 };
            if (ccEvent.controller.number === wm.MIDI_NRPN_MESSAGES.parammsb && ccEvent.value != wm.MIDI_NRPN_MESSAGES.nullactiveparameter) wm._nrpnBuffer[channelBufferIndex] = [], wm._nrpnBuffer[channelBufferIndex][0] = ccEvent;
            else if (1 === wm._nrpnBuffer[channelBufferIndex].length && ccEvent.controller.number === wm.MIDI_NRPN_MESSAGES.paramlsb) wm._nrpnBuffer[channelBufferIndex].push(ccEvent);
            else if (2 !== wm._nrpnBuffer[channelBufferIndex].length || ccEvent.controller.number !== wm.MIDI_NRPN_MESSAGES.increment && ccEvent.controller.number !== wm.MIDI_NRPN_MESSAGES.decrement && ccEvent.controller.number !== wm.MIDI_NRPN_MESSAGES.entrymsb) if (3 === wm._nrpnBuffer[channelBufferIndex].length && wm._nrpnBuffer[channelBufferIndex][2].number === wm.MIDI_NRPN_MESSAGES.entrymsb && ccEvent.controller.number === wm.MIDI_NRPN_MESSAGES.entrylsb) wm._nrpnBuffer[channelBufferIndex].push(ccEvent);
            else if (3 <= wm._nrpnBuffer[channelBufferIndex].length && wm._nrpnBuffer[channelBufferIndex].length <= 4 && ccEvent.controller.number === wm.MIDI_NRPN_MESSAGES.parammsb && ccEvent.value === wm.MIDI_NRPN_MESSAGES.nullactiveparameter) wm._nrpnBuffer[channelBufferIndex].push(ccEvent);
            else if (4 <= wm._nrpnBuffer[channelBufferIndex].length && wm._nrpnBuffer[channelBufferIndex].length <= 5 && ccEvent.controller.number === wm.MIDI_NRPN_MESSAGES.paramlsb && ccEvent.value === wm.MIDI_NRPN_MESSAGES.nullactiveparameter) {
              wm._nrpnBuffer[channelBufferIndex].push(ccEvent);
              var rawData = [];
              wm._nrpnBuffer[channelBufferIndex].forEach(function(ev) {
                rawData.push(ev.data);
              });
              var nrpnNumber = wm._nrpnBuffer[channelBufferIndex][0].value << 7 | wm._nrpnBuffer[channelBufferIndex][1].value, nrpnValue = wm._nrpnBuffer[channelBufferIndex][2].value;
              6 === wm._nrpnBuffer[channelBufferIndex].length && (nrpnValue = wm._nrpnBuffer[channelBufferIndex][2].value << 7 | wm._nrpnBuffer[channelBufferIndex][3].value);
              var nrpnControllerType = "";
              switch (wm._nrpnBuffer[channelBufferIndex][2].controller.number) {
                case wm.MIDI_NRPN_MESSAGES.entrymsb:
                  nrpnControllerType = wm._nrpnTypes[0];
                  break;
                case wm.MIDI_NRPN_MESSAGES.increment:
                  nrpnControllerType = wm._nrpnTypes[1];
                  break;
                case wm.MIDI_NRPN_MESSAGES.decrement:
                  nrpnControllerType = wm._nrpnTypes[2];
                  break;
                default:
                  throw new Error("The NPRN type was unidentifiable.");
              }
              var nrpnEvent = { timestamp: ccEvent.timestamp, channel: ccEvent.channel, type: "nrpn", data: rawData, controller: { number: nrpnNumber, type: nrpnControllerType, name: "Non-Registered Parameter " + nrpnNumber }, value: nrpnValue };
              wm._nrpnBuffer[channelBufferIndex] = [], this._userHandlers.channel[nrpnEvent.type] && this._userHandlers.channel[nrpnEvent.type][nrpnEvent.channel] && this._userHandlers.channel[nrpnEvent.type][nrpnEvent.channel].forEach(function(callback) {
                callback(nrpnEvent);
              });
            } else wm._nrpnBuffer[channelBufferIndex] = [];
            else wm._nrpnBuffer[channelBufferIndex].push(ccEvent);
          }
        }, Input.prototype._parseChannelEvent = function(e) {
          var data1, data2, command = e.data[0] >> 4, channel = 1 + (15 & e.data[0]);
          1 < e.data.length && (data1 = e.data[1], data2 = 2 < e.data.length ? e.data[2] : void 0);
          var event = { target: this, data: e.data, timestamp: e.timeStamp, channel };
          command === wm.MIDI_CHANNEL_MESSAGES.noteoff || command === wm.MIDI_CHANNEL_MESSAGES.noteon && 0 === data2 ? (event.type = "noteoff", event.note = { number: data1, name: wm._notes[data1 % 12], octave: wm.getOctave(data1) }, event.velocity = data2 / 127, event.rawVelocity = data2) : command === wm.MIDI_CHANNEL_MESSAGES.noteon ? (event.type = "noteon", event.note = { number: data1, name: wm._notes[data1 % 12], octave: wm.getOctave(data1) }, event.velocity = data2 / 127, event.rawVelocity = data2) : command === wm.MIDI_CHANNEL_MESSAGES.keyaftertouch ? (event.type = "keyaftertouch", event.note = { number: data1, name: wm._notes[data1 % 12], octave: wm.getOctave(data1) }, event.value = data2 / 127) : command === wm.MIDI_CHANNEL_MESSAGES.controlchange && 0 <= data1 && data1 <= 119 ? (event.type = "controlchange", event.controller = { number: data1, name: this.getCcNameByNumber(data1) }, event.value = data2) : command === wm.MIDI_CHANNEL_MESSAGES.channelmode && 120 <= data1 && data1 <= 127 ? (event.type = "channelmode", event.controller = { number: data1, name: this.getChannelModeByNumber(data1) }, event.value = data2) : command === wm.MIDI_CHANNEL_MESSAGES.programchange ? (event.type = "programchange", event.value = data1) : command === wm.MIDI_CHANNEL_MESSAGES.channelaftertouch ? (event.type = "channelaftertouch", event.value = data1 / 127) : command === wm.MIDI_CHANNEL_MESSAGES.pitchbend ? (event.type = "pitchbend", event.value = ((data2 << 7) + data1 - 8192) / 8192) : event.type = "unknownchannelmessage", this._userHandlers.channel[event.type] && this._userHandlers.channel[event.type][channel] && this._userHandlers.channel[event.type][channel].forEach(function(callback) {
            callback(event);
          });
        }, Input.prototype.getCcNameByNumber = function(number) {
          if (!(0 <= (number = Math.floor(number)) && number <= 119)) throw new RangeError("The control change number must be between 0 and 119.");
          for (var cc in wm.MIDI_CONTROL_CHANGE_MESSAGES) if (Object.prototype.hasOwnProperty.call(wm.MIDI_CONTROL_CHANGE_MESSAGES, cc) && number === wm.MIDI_CONTROL_CHANGE_MESSAGES[cc]) return cc;
        }, Input.prototype.getChannelModeByNumber = function(number) {
          if (!(120 <= (number = Math.floor(number)) && status <= 127)) throw new RangeError("The control change number must be between 120 and 127.");
          for (var cm in wm.MIDI_CHANNEL_MODE_MESSAGES) if (Object.prototype.hasOwnProperty.call(wm.MIDI_CHANNEL_MODE_MESSAGES, cm) && number === wm.MIDI_CHANNEL_MODE_MESSAGES[cm]) return cm;
        }, Input.prototype._parseSystemEvent = function(e) {
          var command = e.data[0], event = { target: this, data: e.data, timestamp: e.timeStamp };
          command === wm.MIDI_SYSTEM_MESSAGES.sysex ? event.type = "sysex" : command === wm.MIDI_SYSTEM_MESSAGES.timecode ? event.type = "timecode" : command === wm.MIDI_SYSTEM_MESSAGES.songposition ? event.type = "songposition" : command === wm.MIDI_SYSTEM_MESSAGES.songselect ? (event.type = "songselect", event.song = e.data[1]) : command === wm.MIDI_SYSTEM_MESSAGES.tuningrequest ? event.type = "tuningrequest" : command === wm.MIDI_SYSTEM_MESSAGES.clock ? event.type = "clock" : command === wm.MIDI_SYSTEM_MESSAGES.start ? event.type = "start" : command === wm.MIDI_SYSTEM_MESSAGES.continue ? event.type = "continue" : command === wm.MIDI_SYSTEM_MESSAGES.stop ? event.type = "stop" : command === wm.MIDI_SYSTEM_MESSAGES.activesensing ? event.type = "activesensing" : command === wm.MIDI_SYSTEM_MESSAGES.reset ? event.type = "reset" : event.type = "unknownsystemmessage", this._userHandlers.system[event.type] && this._userHandlers.system[event.type].forEach(function(callback) {
            callback(event);
          });
        }, Output.prototype.send = function(status2, data, timestamp) {
          if (!(128 <= status2 && status2 <= 255)) throw new RangeError("The status byte must be an integer between 128 (0x80) and 255 (0xFF).");
          void 0 === data && (data = []), Array.isArray(data) || (data = [data]);
          var message = [];
          return data.forEach(function(item) {
            var parsed = Math.floor(item);
            if (!(0 <= parsed && parsed <= 255)) throw new RangeError("Data bytes must be integers between 0 (0x00) and 255 (0xFF).");
            message.push(parsed);
          }), this._midiOutput.send([status2].concat(message), parseFloat(timestamp) || 0), this;
        }, Output.prototype.sendSysex = function(manufacturer, data, options) {
          if (!wm.sysexEnabled) throw new Error("Sysex message support must first be activated.");
          return options = options || {}, manufacturer = [].concat(manufacturer), data.forEach(function(item) {
            if (item < 0 || 127 < item) throw new RangeError("The data bytes of a sysex message must be integers between 0 (0x00) and 127 (0x7F).");
          }), data = manufacturer.concat(data, wm.MIDI_SYSTEM_MESSAGES.sysexend), this.send(wm.MIDI_SYSTEM_MESSAGES.sysex, data, this._parseTimeParameter(options.time)), this;
        }, Output.prototype.sendTimecodeQuarterFrame = function(value, options) {
          return options = options || {}, this.send(wm.MIDI_SYSTEM_MESSAGES.timecode, value, this._parseTimeParameter(options.time)), this;
        }, Output.prototype.sendSongPosition = function(value, options) {
          options = options || {};
          var msb = (value = Math.floor(value) || 0) >> 7 & 127, lsb = 127 & value;
          return this.send(wm.MIDI_SYSTEM_MESSAGES.songposition, [msb, lsb], this._parseTimeParameter(options.time)), this;
        }, Output.prototype.sendSongSelect = function(value, options) {
          if (options = options || {}, !(0 <= (value = Math.floor(value)) && value <= 127)) throw new RangeError("The song number must be between 0 and 127.");
          return this.send(wm.MIDI_SYSTEM_MESSAGES.songselect, [value], this._parseTimeParameter(options.time)), this;
        }, Output.prototype.sendTuningRequest = function(options) {
          return options = options || {}, this.send(wm.MIDI_SYSTEM_MESSAGES.tuningrequest, void 0, this._parseTimeParameter(options.time)), this;
        }, Output.prototype.sendClock = function(options) {
          return options = options || {}, this.send(wm.MIDI_SYSTEM_MESSAGES.clock, void 0, this._parseTimeParameter(options.time)), this;
        }, Output.prototype.sendStart = function(options) {
          return options = options || {}, this.send(wm.MIDI_SYSTEM_MESSAGES.start, void 0, this._parseTimeParameter(options.time)), this;
        }, Output.prototype.sendContinue = function(options) {
          return options = options || {}, this.send(wm.MIDI_SYSTEM_MESSAGES.continue, void 0, this._parseTimeParameter(options.time)), this;
        }, Output.prototype.sendStop = function(options) {
          return options = options || {}, this.send(wm.MIDI_SYSTEM_MESSAGES.stop, void 0, this._parseTimeParameter(options.time)), this;
        }, Output.prototype.sendActiveSensing = function(options) {
          return options = options || {}, this.send(wm.MIDI_SYSTEM_MESSAGES.activesensing, [], this._parseTimeParameter(options.time)), this;
        }, Output.prototype.sendReset = function(options) {
          return options = options || {}, this.send(wm.MIDI_SYSTEM_MESSAGES.reset, void 0, this._parseTimeParameter(options.time)), this;
        }, Output.prototype.stopNote = function(note2, channel, options) {
          if ("all" === note2) return this.sendChannelMode("allnotesoff", 0, channel, options);
          var nVelocity = 64;
          return (options = options || {}).rawVelocity ? !isNaN(options.velocity) && 0 <= options.velocity && options.velocity <= 127 && (nVelocity = options.velocity) : !isNaN(options.velocity) && 0 <= options.velocity && options.velocity <= 1 && (nVelocity = 127 * options.velocity), this._convertNoteToArray(note2).forEach(function(item) {
            wm.toMIDIChannels(channel).forEach(function(ch) {
              this.send((wm.MIDI_CHANNEL_MESSAGES.noteoff << 4) + (ch - 1), [item, Math.round(nVelocity)], this._parseTimeParameter(options.time));
            }.bind(this));
          }.bind(this)), this;
        }, Output.prototype.playNote = function(note2, channel, options) {
          var time, nVelocity = 64;
          if ((options = options || {}).rawVelocity ? !isNaN(options.velocity) && 0 <= options.velocity && options.velocity <= 127 && (nVelocity = options.velocity) : !isNaN(options.velocity) && 0 <= options.velocity && options.velocity <= 1 && (nVelocity = 127 * options.velocity), time = this._parseTimeParameter(options.time), this._convertNoteToArray(note2).forEach(function(item) {
            wm.toMIDIChannels(channel).forEach(function(ch) {
              this.send((wm.MIDI_CHANNEL_MESSAGES.noteon << 4) + (ch - 1), [item, Math.round(nVelocity)], time);
            }.bind(this));
          }.bind(this)), !isNaN(options.duration)) {
            options.duration <= 0 && (options.duration = 0);
            var nRelease = 64;
            options.rawVelocity ? !isNaN(options.release) && 0 <= options.release && options.release <= 127 && (nRelease = options.release) : !isNaN(options.release) && 0 <= options.release && options.release <= 1 && (nRelease = 127 * options.release), this._convertNoteToArray(note2).forEach(function(item) {
              wm.toMIDIChannels(channel).forEach(function(ch) {
                this.send((wm.MIDI_CHANNEL_MESSAGES.noteoff << 4) + (ch - 1), [item, Math.round(nRelease)], (time || wm.time) + options.duration);
              }.bind(this));
            }.bind(this));
          }
          return this;
        }, Output.prototype.sendKeyAftertouch = function(note2, channel, pressure, options) {
          var that = this;
          if (options = options || {}, channel < 1 || 16 < channel) throw new RangeError("The channel must be between 1 and 16.");
          (isNaN(pressure) || pressure < 0 || 1 < pressure) && (pressure = 0.5);
          var nPressure = Math.round(127 * pressure);
          return this._convertNoteToArray(note2).forEach(function(item) {
            wm.toMIDIChannels(channel).forEach(function(ch) {
              that.send((wm.MIDI_CHANNEL_MESSAGES.keyaftertouch << 4) + (ch - 1), [item, nPressure], that._parseTimeParameter(options.time));
            });
          }), this;
        }, Output.prototype.sendControlChange = function(controller, value, channel, options) {
          if (options = options || {}, "string" == typeof controller) {
            if (void 0 === (controller = wm.MIDI_CONTROL_CHANGE_MESSAGES[controller])) throw new TypeError("Invalid controller name.");
          } else if (!(0 <= (controller = Math.floor(controller)) && controller <= 119)) throw new RangeError("Controller numbers must be between 0 and 119.");
          if (!(0 <= (value = Math.floor(value) || 0) && value <= 127)) throw new RangeError("Controller value must be between 0 and 127.");
          return wm.toMIDIChannels(channel).forEach(function(ch) {
            this.send((wm.MIDI_CHANNEL_MESSAGES.controlchange << 4) + (ch - 1), [controller, value], this._parseTimeParameter(options.time));
          }.bind(this)), this;
        }, Output.prototype._selectRegisteredParameter = function(parameter, channel, time) {
          var that = this;
          if (parameter[0] = Math.floor(parameter[0]), !(0 <= parameter[0] && parameter[0] <= 127)) throw new RangeError("The control65 value must be between 0 and 127");
          if (parameter[1] = Math.floor(parameter[1]), !(0 <= parameter[1] && parameter[1] <= 127)) throw new RangeError("The control64 value must be between 0 and 127");
          return wm.toMIDIChannels(channel).forEach(function() {
            that.sendControlChange(101, parameter[0], channel, { time }), that.sendControlChange(100, parameter[1], channel, { time });
          }), this;
        }, Output.prototype._selectNonRegisteredParameter = function(parameter, channel, time) {
          var that = this;
          if (parameter[0] = Math.floor(parameter[0]), !(0 <= parameter[0] && parameter[0] <= 127)) throw new RangeError("The control63 value must be between 0 and 127");
          if (parameter[1] = Math.floor(parameter[1]), !(0 <= parameter[1] && parameter[1] <= 127)) throw new RangeError("The control62 value must be between 0 and 127");
          return wm.toMIDIChannels(channel).forEach(function() {
            that.sendControlChange(99, parameter[0], channel, { time }), that.sendControlChange(98, parameter[1], channel, { time });
          }), this;
        }, Output.prototype._setCurrentRegisteredParameter = function(data, channel, time) {
          var that = this;
          if ((data = [].concat(data))[0] = Math.floor(data[0]), !(0 <= data[0] && data[0] <= 127)) throw new RangeError("The msb value must be between 0 and 127");
          return wm.toMIDIChannels(channel).forEach(function() {
            that.sendControlChange(6, data[0], channel, { time });
          }), data[1] = Math.floor(data[1]), 0 <= data[1] && data[1] <= 127 && wm.toMIDIChannels(channel).forEach(function() {
            that.sendControlChange(38, data[1], channel, { time });
          }), this;
        }, Output.prototype._deselectRegisteredParameter = function(channel, time) {
          var that = this;
          return wm.toMIDIChannels(channel).forEach(function() {
            that.sendControlChange(101, 127, channel, { time }), that.sendControlChange(100, 127, channel, { time });
          }), this;
        }, Output.prototype.setRegisteredParameter = function(parameter, data, channel, options) {
          var that = this;
          if (options = options || {}, !Array.isArray(parameter)) {
            if (!wm.MIDI_REGISTERED_PARAMETER[parameter]) throw new Error("The specified parameter is not available.");
            parameter = wm.MIDI_REGISTERED_PARAMETER[parameter];
          }
          return wm.toMIDIChannels(channel).forEach(function() {
            that._selectRegisteredParameter(parameter, channel, options.time), that._setCurrentRegisteredParameter(data, channel, options.time), that._deselectRegisteredParameter(channel, options.time);
          }), this;
        }, Output.prototype.setNonRegisteredParameter = function(parameter, data, channel, options) {
          var that = this;
          if (options = options || {}, !(0 <= parameter[0] && parameter[0] <= 127 && 0 <= parameter[1] && parameter[1] <= 127)) throw new Error("Position 0 and 1 of the 2-position parameter array must both be between 0 and 127.");
          return data = [].concat(data), wm.toMIDIChannels(channel).forEach(function() {
            that._selectNonRegisteredParameter(parameter, channel, options.time), that._setCurrentRegisteredParameter(data, channel, options.time), that._deselectRegisteredParameter(channel, options.time);
          }), this;
        }, Output.prototype.incrementRegisteredParameter = function(parameter, channel, options) {
          var that = this;
          if (options = options || {}, !Array.isArray(parameter)) {
            if (!wm.MIDI_REGISTERED_PARAMETER[parameter]) throw new Error("The specified parameter is not available.");
            parameter = wm.MIDI_REGISTERED_PARAMETER[parameter];
          }
          return wm.toMIDIChannels(channel).forEach(function() {
            that._selectRegisteredParameter(parameter, channel, options.time), that.sendControlChange(96, 0, channel, { time: options.time }), that._deselectRegisteredParameter(channel, options.time);
          }), this;
        }, Output.prototype.decrementRegisteredParameter = function(parameter, channel, options) {
          if (options = options || {}, !Array.isArray(parameter)) {
            if (!wm.MIDI_REGISTERED_PARAMETER[parameter]) throw new TypeError("The specified parameter is not available.");
            parameter = wm.MIDI_REGISTERED_PARAMETER[parameter];
          }
          return wm.toMIDIChannels(channel).forEach(function() {
            this._selectRegisteredParameter(parameter, channel, options.time), this.sendControlChange(97, 0, channel, { time: options.time }), this._deselectRegisteredParameter(channel, options.time);
          }.bind(this)), this;
        }, Output.prototype.setPitchBendRange = function(semitones, cents, channel, options) {
          var that = this;
          if (options = options || {}, !(0 <= (semitones = Math.floor(semitones) || 0) && semitones <= 127)) throw new RangeError("The semitones value must be between 0 and 127");
          if (!(0 <= (cents = Math.floor(cents) || 0) && cents <= 127)) throw new RangeError("The cents value must be between 0 and 127");
          return wm.toMIDIChannels(channel).forEach(function() {
            that.setRegisteredParameter("pitchbendrange", [semitones, cents], channel, { time: options.time });
          }), this;
        }, Output.prototype.setModulationRange = function(semitones, cents, channel, options) {
          var that = this;
          if (options = options || {}, !(0 <= (semitones = Math.floor(semitones) || 0) && semitones <= 127)) throw new RangeError("The semitones value must be between 0 and 127");
          if (!(0 <= (cents = Math.floor(cents) || 0) && cents <= 127)) throw new RangeError("The cents value must be between 0 and 127");
          return wm.toMIDIChannels(channel).forEach(function() {
            that.setRegisteredParameter("modulationrange", [semitones, cents], channel, { time: options.time });
          }), this;
        }, Output.prototype.setMasterTuning = function(value, channel, options) {
          var that = this;
          if (options = options || {}, (value = parseFloat(value) || 0) <= -65 || 64 <= value) throw new RangeError("The value must be a decimal number larger than -65 and smaller than 64.");
          var coarse = Math.floor(value) + 64, fine = value - Math.floor(value), msb = (fine = Math.round((fine + 1) / 2 * 16383)) >> 7 & 127, lsb = 127 & fine;
          return wm.toMIDIChannels(channel).forEach(function() {
            that.setRegisteredParameter("channelcoarsetuning", coarse, channel, { time: options.time }), that.setRegisteredParameter("channelfinetuning", [msb, lsb], channel, { time: options.time });
          }), this;
        }, Output.prototype.setTuningProgram = function(value, channel, options) {
          var that = this;
          if (options = options || {}, !(0 <= (value = Math.floor(value)) && value <= 127)) throw new RangeError("The program value must be between 0 and 127");
          return wm.toMIDIChannels(channel).forEach(function() {
            that.setRegisteredParameter("tuningprogram", value, channel, { time: options.time });
          }), this;
        }, Output.prototype.setTuningBank = function(value, channel, options) {
          var that = this;
          if (options = options || {}, !(0 <= (value = Math.floor(value) || 0) && value <= 127)) throw new RangeError("The bank value must be between 0 and 127");
          return wm.toMIDIChannels(channel).forEach(function() {
            that.setRegisteredParameter("tuningbank", value, channel, { time: options.time });
          }), this;
        }, Output.prototype.sendChannelMode = function(command, value, channel, options) {
          if (options = options || {}, "string" == typeof command) {
            if (!(command = wm.MIDI_CHANNEL_MODE_MESSAGES[command])) throw new TypeError("Invalid channel mode message name.");
          } else if (!(120 <= (command = Math.floor(command)) && command <= 127)) throw new RangeError("Channel mode numerical identifiers must be between 120 and 127.");
          if ((value = Math.floor(value) || 0) < 0 || 127 < value) throw new RangeError("Value must be an integer between 0 and 127.");
          return wm.toMIDIChannels(channel).forEach(function(ch) {
            this.send((wm.MIDI_CHANNEL_MESSAGES.channelmode << 4) + (ch - 1), [command, value], this._parseTimeParameter(options.time));
          }.bind(this)), this;
        }, Output.prototype.sendProgramChange = function(program, channel, options) {
          var that = this;
          if (options = options || {}, program = Math.floor(program), isNaN(program) || program < 0 || 127 < program) throw new RangeError("Program numbers must be between 0 and 127.");
          return wm.toMIDIChannels(channel).forEach(function(ch) {
            that.send((wm.MIDI_CHANNEL_MESSAGES.programchange << 4) + (ch - 1), [program], that._parseTimeParameter(options.time));
          }), this;
        }, Output.prototype.sendChannelAftertouch = function(pressure, channel, options) {
          var that = this;
          options = options || {}, pressure = parseFloat(pressure), (isNaN(pressure) || pressure < 0 || 1 < pressure) && (pressure = 0.5);
          var nPressure = Math.round(127 * pressure);
          return wm.toMIDIChannels(channel).forEach(function(ch) {
            that.send((wm.MIDI_CHANNEL_MESSAGES.channelaftertouch << 4) + (ch - 1), [nPressure], that._parseTimeParameter(options.time));
          }), this;
        }, Output.prototype.sendPitchBend = function(bend, channel, options) {
          var that = this;
          if (options = options || {}, isNaN(bend) || bend < -1 || 1 < bend) throw new RangeError("Pitch bend value must be between -1 and 1.");
          var nLevel = Math.round((bend + 1) / 2 * 16383), msb = nLevel >> 7 & 127, lsb = 127 & nLevel;
          return wm.toMIDIChannels(channel).forEach(function(ch) {
            that.send((wm.MIDI_CHANNEL_MESSAGES.pitchbend << 4) + (ch - 1), [lsb, msb], that._parseTimeParameter(options.time));
          }), this;
        }, Output.prototype._parseTimeParameter = function(time) {
          var value, parsed = parseFloat(time);
          return "string" == typeof time && "+" === time.substring(0, 1) ? parsed && 0 < parsed && (value = wm.time + parsed) : parsed > wm.time && (value = parsed), value;
        }, Output.prototype._convertNoteToArray = function(note2) {
          var notes2 = [];
          return Array.isArray(note2) || (note2 = [note2]), note2.forEach(function(item) {
            notes2.push(wm.guessNoteNumber(item));
          }), notes2;
        }, "function" == typeof define && "object" == typeof define.amd ? define([], function() {
          return wm;
        }) : "undefined" != typeof module && module.exports ? module.exports = wm : scope.WebMidi || (scope.WebMidi = wm);
      }(exports);
    }
  });

  // src/dom.js
  var circles = [];
  var svgGroups = [];
  function initDom() {
    for (let i = 1; i < 13; i++) {
      circles.push(document.getElementById("c" + i));
      svgGroups.push(document.getElementById("g" + i));
    }
    circles.forEach((circle) => {
      circle.insertAdjacentHTML("afterend", '<circle cx="0" cy="0" r="21" class="cover"/>');
    });
  }
  var _chordElements = null;
  function getChordElements() {
    if (!_chordElements) {
      _chordElements = {
        root: document.getElementById("chordRoot"),
        quality: document.getElementById("chordQuality"),
        inversion: document.getElementById("chordInversion")
      };
    }
    return _chordElements;
  }

  // src/state.js
  var state = {
    noteArray: new Array(12).fill(0),
    chordTimeout: null,
    useCircleOfFifths: true,
    useFlats: false
    // true = flats (D♭), false = sharps (C♯)
  };

  // src/geometry.js
  function chromToCOF(index4) {
    return index4 * 7 % 12;
  }
  function indexToCoordinates(index4) {
    const angle = (index4 - 3) * (2 * Math.PI / 12);
    const x = Math.cos(angle) * 100 + 125;
    const y = Math.sin(angle) * 100 + 125;
    return [x, y];
  }
  function arrangeCircles(useCoF) {
    for (let i = 0; i < 12; i++) {
      const xy = useCoF ? indexToCoordinates(chromToCOF(i)) : indexToCoordinates(i);
      svgGroups[i].setAttribute("transform", `translate(${xy[0].toFixed(3)},${xy[1].toFixed(3)})`);
    }
  }

  // src/constants.js
  var NOTE_NAMES = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];
  var NOTE_DISPLAY = {
    flats: ["C", "D\u266D", "D", "E\u266D", "E", "F", "G\u266D", "G", "A\u266D", "A", "B\u266D", "B"],
    sharps: ["C", "C\u266F", "D", "D\u266F", "E", "F", "F\u266F", "G", "G\u266F", "A", "A\u266F", "B"]
  };
  var MAJOR_TRIADS = {
    flats: [
      { name: "C major", recipe: "C   E   G" },
      { name: "D\u266D major", recipe: "D\u266D   F   A\u266D" },
      { name: "D major", recipe: "D   F\u266F   A" },
      { name: "E\u266D major", recipe: "E\u266D   G   B\u266D" },
      { name: "E major", recipe: "E   G\u266F   B" },
      { name: "F major", recipe: "F   A   C" },
      { name: "G\u266D major", recipe: "G\u266D   B\u266D   D\u266D" },
      { name: "G major", recipe: "G   B   D" },
      { name: "A\u266D major", recipe: "A\u266D   C   E\u266D" },
      { name: "A major", recipe: "A   C\u266F   E" },
      { name: "B\u266D major", recipe: "B\u266D   D   F" },
      { name: "B major", recipe: "B   D\u266F   F\u266F" }
    ],
    sharps: [
      { name: "C major", recipe: "C   E   G" },
      { name: "C\u266F major", recipe: "C\u266F   F   G\u266F" },
      { name: "D major", recipe: "D   F\u266F   A" },
      { name: "D\u266F major", recipe: "D\u266F   G   A\u266F" },
      { name: "E major", recipe: "E   G\u266F   B" },
      { name: "F major", recipe: "F   A   C" },
      { name: "F\u266F major", recipe: "F\u266F   A\u266F   C\u266F" },
      { name: "G major", recipe: "G   B   D" },
      { name: "G\u266F major", recipe: "G\u266F   C   D\u266F" },
      { name: "A major", recipe: "A   C\u266F   E" },
      { name: "A\u266F major", recipe: "A\u266F   D   F" },
      { name: "B major", recipe: "B   D\u266F   F\u266F" }
    ]
  };

  // src/layout.js
  function initLayout() {
    arrangeCircles(state.useCircleOfFifths);
    const layoutButton = document.getElementById("layoutToggle");
    if (layoutButton) {
      layoutButton.addEventListener("click", () => {
        state.useCircleOfFifths = !state.useCircleOfFifths;
        arrangeCircles(state.useCircleOfFifths);
        layoutButton.textContent = state.useCircleOfFifths ? "Circle of Fifths" : "Chromatic";
      });
    }
  }
  function updateAccidentals() {
    const mode = state.useFlats ? "flats" : "sharps";
    const noteNames = NOTE_DISPLAY[mode];
    const triads3 = MAJOR_TRIADS[mode];
    for (let i = 0; i < 12; i++) {
      const group = svgGroups[i];
      if (!group) continue;
      const text = group.querySelector("text");
      if (text) {
        text.textContent = noteNames[i];
      }
    }
  }
  function initAccidentals() {
    updateAccidentals();
    const accidentalsButton = document.getElementById("accidentalsToggle");
    if (accidentalsButton) {
      accidentalsButton.addEventListener("click", () => {
        state.useFlats = !state.useFlats;
        accidentalsButton.textContent = state.useFlats ? "\u266D Flats" : "\u266F Sharps";
        updateAccidentals();
      });
    }
    initNoteTooltips();
  }
  function initNoteTooltips() {
    const tooltip = document.getElementById("noteTooltip");
    if (!tooltip) return;
    for (let i = 0; i < 12; i++) {
      const group = svgGroups[i];
      if (!group) continue;
      group.addEventListener("mouseenter", (e) => {
        const mode = state.useFlats ? "flats" : "sharps";
        const triad = MAJOR_TRIADS[mode][i];
        tooltip.innerHTML = `<div class="recipe">${triad.recipe}</div><div class="name">${triad.name}</div>`;
        tooltip.classList.add("visible");
        positionTooltip(e, tooltip);
      });
      group.addEventListener("mousemove", (e) => {
        positionTooltip(e, tooltip);
      });
      group.addEventListener("mouseleave", () => {
        tooltip.classList.remove("visible");
      });
    }
  }
  function positionTooltip(e, tooltip) {
    const offset = 15;
    tooltip.style.left = e.pageX + offset + "px";
    tooltip.style.top = e.pageY + offset + "px";
  }

  // src/midiHandler.js
  var import_webmidi = __toESM(require_webmidi_min());

  // src/status.js
  function showStatus(message, isError = false) {
    const midiStatus = document.getElementById("midiStatus");
    if (midiStatus) {
      midiStatus.innerHTML = message;
      midiStatus.style.background = isError ? "#660000" : "black";
    }
    if (isError) {
      console.error("[JSMidiCircle]", message);
    } else {
      console.log("[JSMidiCircle]", message);
    }
  }

  // node_modules/@tonaljs/pitch/dist/index.mjs
  function isNamedPitch(src) {
    return src !== null && typeof src === "object" && "name" in src && typeof src.name === "string" ? true : false;
  }
  function isPitch(pitch2) {
    return pitch2 !== null && typeof pitch2 === "object" && "step" in pitch2 && typeof pitch2.step === "number" && "alt" in pitch2 && typeof pitch2.alt === "number" && !isNaN(pitch2.step) && !isNaN(pitch2.alt) ? true : false;
  }
  var FIFTHS = [0, 2, 4, -1, 1, 3, 5];
  var STEPS_TO_OCTS = FIFTHS.map(
    (fifths) => Math.floor(fifths * 7 / 12)
  );
  function coordinates(pitch2) {
    const { step, alt, oct, dir = 1 } = pitch2;
    const f = FIFTHS[step] + 7 * alt;
    if (oct === void 0) {
      return [dir * f];
    }
    const o = oct - STEPS_TO_OCTS[step] - 4 * alt;
    return [dir * f, dir * o];
  }
  var FIFTHS_TO_STEPS = [3, 0, 4, 1, 5, 2, 6];
  function pitch(coord) {
    const [f, o, dir] = coord;
    const step = FIFTHS_TO_STEPS[unaltered(f)];
    const alt = Math.floor((f + 1) / 7);
    if (o === void 0) {
      return { step, alt, dir };
    }
    const oct = o + 4 * alt + STEPS_TO_OCTS[step];
    return { step, alt, oct, dir };
  }
  function unaltered(f) {
    const i = (f + 1) % 7;
    return i < 0 ? 7 + i : i;
  }

  // node_modules/@tonaljs/pitch-interval/dist/index.mjs
  var fillStr = (s, n) => Array(Math.abs(n) + 1).join(s);
  var NoInterval = Object.freeze({
    empty: true,
    name: "",
    num: NaN,
    q: "",
    type: "",
    step: NaN,
    alt: NaN,
    dir: NaN,
    simple: NaN,
    semitones: NaN,
    chroma: NaN,
    coord: [],
    oct: NaN
  });
  var INTERVAL_TONAL_REGEX = "([-+]?\\d+)(d{1,4}|m|M|P|A{1,4})";
  var INTERVAL_SHORTHAND_REGEX = "(AA|A|P|M|m|d|dd)([-+]?\\d+)";
  var REGEX = new RegExp(
    "^" + INTERVAL_TONAL_REGEX + "|" + INTERVAL_SHORTHAND_REGEX + "$"
  );
  function tokenizeInterval(str) {
    const m = REGEX.exec(`${str}`);
    if (m === null) {
      return ["", ""];
    }
    return m[1] ? [m[1], m[2]] : [m[4], m[3]];
  }
  var cache = {};
  function interval(src) {
    return typeof src === "string" ? cache[src] || (cache[src] = parse(src)) : isPitch(src) ? interval(pitchName(src)) : isNamedPitch(src) ? interval(src.name) : NoInterval;
  }
  var SIZES = [0, 2, 4, 5, 7, 9, 11];
  var TYPES = "PMMPPMM";
  function parse(str) {
    const tokens = tokenizeInterval(str);
    if (tokens[0] === "") {
      return NoInterval;
    }
    const num = +tokens[0];
    const q = tokens[1];
    const step = (Math.abs(num) - 1) % 7;
    const t = TYPES[step];
    if (t === "M" && q === "P") {
      return NoInterval;
    }
    const type = t === "M" ? "majorable" : "perfectable";
    const name2 = "" + num + q;
    const dir = num < 0 ? -1 : 1;
    const simple = num === 8 || num === -8 ? num : dir * (step + 1);
    const alt = qToAlt(type, q);
    const oct = Math.floor((Math.abs(num) - 1) / 7);
    const semitones = dir * (SIZES[step] + alt + 12 * oct);
    const chroma3 = (dir * (SIZES[step] + alt) % 12 + 12) % 12;
    const coord = coordinates({ step, alt, oct, dir });
    return {
      empty: false,
      name: name2,
      num,
      q,
      step,
      alt,
      dir,
      type,
      simple,
      semitones,
      chroma: chroma3,
      coord,
      oct
    };
  }
  function coordToInterval(coord, forceDescending) {
    const [f, o = 0] = coord;
    const isDescending = f * 7 + o * 12 < 0;
    const ivl = forceDescending || isDescending ? [-f, -o, -1] : [f, o, 1];
    return interval(pitch(ivl));
  }
  function qToAlt(type, q) {
    return q === "M" && type === "majorable" || q === "P" && type === "perfectable" ? 0 : q === "m" && type === "majorable" ? -1 : /^A+$/.test(q) ? q.length : /^d+$/.test(q) ? -1 * (type === "perfectable" ? q.length : q.length + 1) : 0;
  }
  function pitchName(props) {
    const { step, alt, oct = 0, dir } = props;
    if (!dir) {
      return "";
    }
    const calcNum = step + 1 + 7 * oct;
    const num = calcNum === 0 ? step + 1 : calcNum;
    const d = dir < 0 ? "-" : "";
    const type = TYPES[step] === "M" ? "majorable" : "perfectable";
    const name2 = d + num + altToQ(type, alt);
    return name2;
  }
  function altToQ(type, alt) {
    if (alt === 0) {
      return type === "majorable" ? "M" : "P";
    } else if (alt === -1 && type === "majorable") {
      return "m";
    } else if (alt > 0) {
      return fillStr("A", alt);
    } else {
      return fillStr("d", type === "perfectable" ? alt : alt + 1);
    }
  }

  // node_modules/@tonaljs/pitch-note/dist/index.mjs
  var fillStr2 = (s, n) => Array(Math.abs(n) + 1).join(s);
  var NoNote = Object.freeze({
    empty: true,
    name: "",
    letter: "",
    acc: "",
    pc: "",
    step: NaN,
    alt: NaN,
    chroma: NaN,
    height: NaN,
    coord: [],
    midi: null,
    freq: null
  });
  var cache2 = /* @__PURE__ */ new Map();
  var stepToLetter = (step) => "CDEFGAB".charAt(step);
  var altToAcc = (alt) => alt < 0 ? fillStr2("b", -alt) : fillStr2("#", alt);
  var accToAlt = (acc) => acc[0] === "b" ? -acc.length : acc.length;
  function note(src) {
    const stringSrc = JSON.stringify(src);
    const cached = cache2.get(stringSrc);
    if (cached) {
      return cached;
    }
    const value = typeof src === "string" ? parse2(src) : isPitch(src) ? note(pitchName2(src)) : isNamedPitch(src) ? note(src.name) : NoNote;
    cache2.set(stringSrc, value);
    return value;
  }
  var REGEX2 = /^([a-gA-G]?)(#{1,}|b{1,}|x{1,}|)(-?\d*)\s*(.*)$/;
  function tokenizeNote(str) {
    const m = REGEX2.exec(str);
    return m ? [m[1].toUpperCase(), m[2].replace(/x/g, "##"), m[3], m[4]] : ["", "", "", ""];
  }
  function coordToNote(noteCoord) {
    return note(pitch(noteCoord));
  }
  var mod = (n, m) => (n % m + m) % m;
  var SEMI = [0, 2, 4, 5, 7, 9, 11];
  function parse2(noteName) {
    const tokens = tokenizeNote(noteName);
    if (tokens[0] === "" || tokens[3] !== "") {
      return NoNote;
    }
    const letter = tokens[0];
    const acc = tokens[1];
    const octStr = tokens[2];
    const step = (letter.charCodeAt(0) + 3) % 7;
    const alt = accToAlt(acc);
    const oct = octStr.length ? +octStr : void 0;
    const coord = coordinates({ step, alt, oct });
    const name2 = letter + acc + octStr;
    const pc = letter + acc;
    const chroma3 = (SEMI[step] + alt + 120) % 12;
    const height = oct === void 0 ? mod(SEMI[step] + alt, 12) - 12 * 99 : SEMI[step] + alt + 12 * (oct + 1);
    const midi2 = height >= 0 && height <= 127 ? height : null;
    const freq2 = oct === void 0 ? null : Math.pow(2, (height - 69) / 12) * 440;
    return {
      empty: false,
      acc,
      alt,
      chroma: chroma3,
      coord,
      freq: freq2,
      height,
      letter,
      midi: midi2,
      name: name2,
      oct,
      pc,
      step
    };
  }
  function pitchName2(props) {
    const { step, alt, oct } = props;
    const letter = stepToLetter(step);
    if (!letter) {
      return "";
    }
    const pc = letter + altToAcc(alt);
    return oct || oct === 0 ? pc + oct : pc;
  }

  // node_modules/@tonaljs/pitch-distance/dist/index.mjs
  function transpose(noteName, intervalName) {
    const note2 = note(noteName);
    const intervalCoord = Array.isArray(intervalName) ? intervalName : interval(intervalName).coord;
    if (note2.empty || !intervalCoord || intervalCoord.length < 2) {
      return "";
    }
    const noteCoord = note2.coord;
    const tr2 = noteCoord.length === 1 ? [noteCoord[0] + intervalCoord[0]] : [noteCoord[0] + intervalCoord[0], noteCoord[1] + intervalCoord[1]];
    return coordToNote(tr2).name;
  }
  function tonicIntervalsTransposer(intervals, tonic) {
    const len = intervals.length;
    return (normalized) => {
      if (!tonic) return "";
      const index4 = normalized < 0 ? (len - -normalized % len) % len : normalized % len;
      const octaves = Math.floor(normalized / len);
      const root = transpose(tonic, [0, octaves]);
      return transpose(root, intervals[index4]);
    };
  }
  function distance(fromNote, toNote) {
    const from = note(fromNote);
    const to = note(toNote);
    if (from.empty || to.empty) {
      return "";
    }
    const fcoord = from.coord;
    const tcoord = to.coord;
    const fifths = tcoord[0] - fcoord[0];
    const octs = fcoord.length === 2 && tcoord.length === 2 ? tcoord[1] - fcoord[1] : -Math.floor(fifths * 7 / 12);
    const forceDescending = to.height === from.height && to.midi !== null && from.oct === to.oct && from.step > to.step;
    return coordToInterval([fifths, octs], forceDescending).name;
  }

  // node_modules/@tonaljs/chord/dist/index.mjs
  var dist_exports = {};
  __export(dist_exports, {
    chord: () => chord,
    chordScales: () => chordScales,
    default: () => chord_default,
    degrees: () => degrees,
    detect: () => detect,
    extended: () => extended,
    get: () => get4,
    getChord: () => getChord,
    notes: () => notes,
    reduced: () => reduced,
    steps: () => steps,
    tokenize: () => tokenize,
    transpose: () => transpose2
  });

  // node_modules/@tonaljs/collection/dist/index.mjs
  function rotate(times, arr) {
    const len = arr.length;
    const n = (times % len + len) % len;
    return arr.slice(n, len).concat(arr.slice(0, n));
  }
  function compact(arr) {
    return arr.filter((n) => n === 0 || n);
  }

  // node_modules/@tonaljs/pcset/dist/index.mjs
  var EmptyPcset = {
    empty: true,
    name: "",
    setNum: 0,
    chroma: "000000000000",
    normalized: "000000000000",
    intervals: []
  };
  var setNumToChroma = (num2) => Number(num2).toString(2).padStart(12, "0");
  var chromaToNumber = (chroma22) => parseInt(chroma22, 2);
  var REGEX3 = /^[01]{12}$/;
  function isChroma(set) {
    return REGEX3.test(set);
  }
  var isPcsetNum = (set) => typeof set === "number" && set >= 0 && set <= 4095;
  var isPcset = (set) => set && isChroma(set.chroma);
  var cache3 = { [EmptyPcset.chroma]: EmptyPcset };
  function get(src) {
    const chroma22 = isChroma(src) ? src : isPcsetNum(src) ? setNumToChroma(src) : Array.isArray(src) ? listToChroma(src) : isPcset(src) ? src.chroma : EmptyPcset.chroma;
    return cache3[chroma22] = cache3[chroma22] || chromaToPcset(chroma22);
  }
  var IVLS = [
    "1P",
    "2m",
    "2M",
    "3m",
    "3M",
    "4P",
    "5d",
    "5P",
    "6m",
    "6M",
    "7m",
    "7M"
  ];
  function chromaToIntervals(chroma22) {
    const intervals2 = [];
    for (let i = 0; i < 12; i++) {
      if (chroma22.charAt(i) === "1") intervals2.push(IVLS[i]);
    }
    return intervals2;
  }
  function modes(set, normalize = true) {
    const pcs = get(set);
    const binary = pcs.chroma.split("");
    return compact(
      binary.map((_, i) => {
        const r = rotate(i, binary);
        return normalize && r[0] === "0" ? null : r.join("");
      })
    );
  }
  function isSubsetOf(set) {
    const s = get(set).setNum;
    return (notes2) => {
      const o = get(notes2).setNum;
      return s && s !== o && (o & s) === o;
    };
  }
  function isSupersetOf(set) {
    const s = get(set).setNum;
    return (notes2) => {
      const o = get(notes2).setNum;
      return s && s !== o && (o | s) === o;
    };
  }
  function chromaRotations(chroma22) {
    const binary = chroma22.split("");
    return binary.map((_, i) => rotate(i, binary).join(""));
  }
  function chromaToPcset(chroma22) {
    const setNum = chromaToNumber(chroma22);
    const normalizedNum = chromaRotations(chroma22).map(chromaToNumber).filter((n) => n >= 2048).sort()[0];
    const normalized = setNumToChroma(normalizedNum);
    const intervals2 = chromaToIntervals(chroma22);
    return {
      empty: false,
      name: "",
      setNum,
      chroma: chroma22,
      normalized,
      intervals: intervals2
    };
  }
  function listToChroma(set) {
    if (set.length === 0) {
      return EmptyPcset.chroma;
    }
    let pitch2;
    const binary = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < set.length; i++) {
      pitch2 = note(set[i]);
      if (pitch2.empty) pitch2 = interval(set[i]);
      if (!pitch2.empty) binary[pitch2.chroma] = 1;
    }
    return binary.join("");
  }

  // node_modules/@tonaljs/chord-type/dist/index.mjs
  var CHORDS = [
    // ==Major==
    ["1P 3M 5P", "major", "M ^  maj"],
    ["1P 3M 5P 7M", "major seventh", "maj7 \u0394 ma7 M7 Maj7 ^7"],
    ["1P 3M 5P 7M 9M", "major ninth", "maj9 \u03949 ^9"],
    ["1P 3M 5P 7M 9M 13M", "major thirteenth", "maj13 Maj13 ^13"],
    ["1P 3M 5P 6M", "sixth", "6 add6 add13 M6"],
    ["1P 3M 5P 6M 9M", "sixth added ninth", "6add9 6/9 69 M69"],
    ["1P 3M 6m 7M", "major seventh flat sixth", "M7b6 ^7b6"],
    [
      "1P 3M 5P 7M 11A",
      "major seventh sharp eleventh",
      "maj#4 \u0394#4 \u0394#11 M7#11 ^7#11 maj7#11"
    ],
    // ==Minor==
    // '''Normal'''
    ["1P 3m 5P", "minor", "m min -"],
    ["1P 3m 5P 7m", "minor seventh", "m7 min7 mi7 -7"],
    [
      "1P 3m 5P 7M",
      "minor/major seventh",
      "m/ma7 m/maj7 mM7 mMaj7 m/M7 -\u03947 m\u0394 -^7 -maj7"
    ],
    ["1P 3m 5P 6M", "minor sixth", "m6 -6"],
    ["1P 3m 5P 7m 9M", "minor ninth", "m9 -9"],
    ["1P 3m 5P 7M 9M", "minor/major ninth", "mM9 mMaj9 -^9"],
    ["1P 3m 5P 7m 9M 11P", "minor eleventh", "m11 -11"],
    ["1P 3m 5P 7m 9M 13M", "minor thirteenth", "m13 -13"],
    // '''Diminished'''
    ["1P 3m 5d", "diminished", "dim \xB0 o"],
    ["1P 3m 5d 7d", "diminished seventh", "dim7 \xB07 o7"],
    ["1P 3m 5d 7m", "half-diminished", "m7b5 \xF8 -7b5 h7 h"],
    // ==Dominant/Seventh==
    // '''Normal'''
    ["1P 3M 5P 7m", "dominant seventh", "7 dom"],
    ["1P 3M 5P 7m 9M", "dominant ninth", "9"],
    ["1P 3M 5P 7m 9M 13M", "dominant thirteenth", "13"],
    ["1P 3M 5P 7m 11A", "lydian dominant seventh", "7#11 7#4"],
    // '''Altered'''
    ["1P 3M 5P 7m 9m", "dominant flat ninth", "7b9"],
    ["1P 3M 5P 7m 9A", "dominant sharp ninth", "7#9"],
    ["1P 3M 7m 9m", "altered", "alt7"],
    // '''Suspended'''
    ["1P 4P 5P", "suspended fourth", "sus4 sus"],
    ["1P 2M 5P", "suspended second", "sus2"],
    ["1P 4P 5P 7m", "suspended fourth seventh", "7sus4 7sus"],
    ["1P 5P 7m 9M 11P", "eleventh", "11"],
    [
      "1P 4P 5P 7m 9m",
      "suspended fourth flat ninth",
      "b9sus phryg 7b9sus 7b9sus4"
    ],
    // ==Other==
    ["1P 5P", "fifth", "5"],
    ["1P 3M 5A", "augmented", "aug + +5 ^#5"],
    ["1P 3m 5A", "minor augmented", "m#5 -#5 m+"],
    ["1P 3M 5A 7M", "augmented seventh", "maj7#5 maj7+5 +maj7 ^7#5"],
    [
      "1P 3M 5P 7M 9M 11A",
      "major sharp eleventh (lydian)",
      "maj9#11 \u03949#11 ^9#11"
    ],
    // ==Legacy==
    ["1P 2M 4P 5P", "", "sus24 sus4add9"],
    ["1P 3M 5A 7M 9M", "", "maj9#5 Maj9#5"],
    ["1P 3M 5A 7m", "", "7#5 +7 7+ 7aug aug7"],
    ["1P 3M 5A 7m 9A", "", "7#5#9 7#9#5 7alt"],
    ["1P 3M 5A 7m 9M", "", "9#5 9+"],
    ["1P 3M 5A 7m 9M 11A", "", "9#5#11"],
    ["1P 3M 5A 7m 9m", "", "7#5b9 7b9#5"],
    ["1P 3M 5A 7m 9m 11A", "", "7#5b9#11"],
    ["1P 3M 5A 9A", "", "+add#9"],
    ["1P 3M 5A 9M", "", "M#5add9 +add9"],
    ["1P 3M 5P 6M 11A", "", "M6#11 M6b5 6#11 6b5"],
    ["1P 3M 5P 6M 7M 9M", "", "M7add13"],
    ["1P 3M 5P 6M 9M 11A", "", "69#11"],
    ["1P 3m 5P 6M 9M", "", "m69 -69"],
    ["1P 3M 5P 6m 7m", "", "7b6"],
    ["1P 3M 5P 7M 9A 11A", "", "maj7#9#11"],
    ["1P 3M 5P 7M 9M 11A 13M", "", "M13#11 maj13#11 M13+4 M13#4"],
    ["1P 3M 5P 7M 9m", "", "M7b9"],
    ["1P 3M 5P 7m 11A 13m", "", "7#11b13 7b5b13"],
    ["1P 3M 5P 7m 13M", "", "7add6 67 7add13"],
    ["1P 3M 5P 7m 9A 11A", "", "7#9#11 7b5#9 7#9b5"],
    ["1P 3M 5P 7m 9A 11A 13M", "", "13#9#11"],
    ["1P 3M 5P 7m 9A 11A 13m", "", "7#9#11b13"],
    ["1P 3M 5P 7m 9A 13M", "", "13#9"],
    ["1P 3M 5P 7m 9A 13m", "", "7#9b13"],
    ["1P 3M 5P 7m 9M 11A", "", "9#11 9+4 9#4"],
    ["1P 3M 5P 7m 9M 11A 13M", "", "13#11 13+4 13#4"],
    ["1P 3M 5P 7m 9M 11A 13m", "", "9#11b13 9b5b13"],
    ["1P 3M 5P 7m 9m 11A", "", "7b9#11 7b5b9 7b9b5"],
    ["1P 3M 5P 7m 9m 11A 13M", "", "13b9#11"],
    ["1P 3M 5P 7m 9m 11A 13m", "", "7b9b13#11 7b9#11b13 7b5b9b13"],
    ["1P 3M 5P 7m 9m 13M", "", "13b9"],
    ["1P 3M 5P 7m 9m 13m", "", "7b9b13"],
    ["1P 3M 5P 7m 9m 9A", "", "7b9#9"],
    ["1P 3M 5P 9M", "", "Madd9 2 add9 add2"],
    ["1P 3M 5P 9m", "", "Maddb9"],
    ["1P 3M 5d", "", "Mb5"],
    ["1P 3M 5d 6M 7m 9M", "", "13b5"],
    ["1P 3M 5d 7M", "", "M7b5"],
    ["1P 3M 5d 7M 9M", "", "M9b5"],
    ["1P 3M 5d 7m", "", "7b5"],
    ["1P 3M 5d 7m 9M", "", "9b5"],
    ["1P 3M 7m", "", "7no5"],
    ["1P 3M 7m 13m", "", "7b13"],
    ["1P 3M 7m 9M", "", "9no5"],
    ["1P 3M 7m 9M 13M", "", "13no5"],
    ["1P 3M 7m 9M 13m", "", "9b13"],
    ["1P 3m 4P 5P", "", "madd4"],
    ["1P 3m 5P 6m 7M", "", "mMaj7b6"],
    ["1P 3m 5P 6m 7M 9M", "", "mMaj9b6"],
    ["1P 3m 5P 7m 11P", "", "m7add11 m7add4"],
    ["1P 3m 5P 9M", "", "madd9"],
    ["1P 3m 5d 6M 7M", "", "o7M7"],
    ["1P 3m 5d 7M", "", "oM7"],
    ["1P 3m 6m 7M", "", "mb6M7"],
    ["1P 3m 6m 7m", "", "m7#5"],
    ["1P 3m 6m 7m 9M", "", "m9#5"],
    ["1P 3m 5A 7m 9M 11P", "", "m11A"],
    ["1P 3m 6m 9m", "", "mb6b9"],
    ["1P 2M 3m 5d 7m", "", "m9b5"],
    ["1P 4P 5A 7M", "", "M7#5sus4"],
    ["1P 4P 5A 7M 9M", "", "M9#5sus4"],
    ["1P 4P 5A 7m", "", "7#5sus4"],
    ["1P 4P 5P 7M", "", "M7sus4"],
    ["1P 4P 5P 7M 9M", "", "M9sus4"],
    ["1P 4P 5P 7m 9M", "", "9sus4 9sus"],
    ["1P 4P 5P 7m 9M 13M", "", "13sus4 13sus"],
    ["1P 4P 5P 7m 9m 13m", "", "7sus4b9b13 7b9b13sus4"],
    ["1P 4P 7m 10m", "", "4 quartal"],
    ["1P 5P 7m 9m 11P", "", "11b9"]
  ];
  var data_default = CHORDS;
  var NoChordType = {
    ...EmptyPcset,
    name: "",
    quality: "Unknown",
    intervals: [],
    aliases: []
  };
  var dictionary = [];
  var index = {};
  function get2(type) {
    return index[type] || NoChordType;
  }
  function all() {
    return dictionary.slice();
  }
  function add(intervals, aliases, fullName) {
    const quality = getQuality(intervals);
    const chord2 = {
      ...get(intervals),
      name: fullName || "",
      quality,
      intervals,
      aliases
    };
    dictionary.push(chord2);
    if (chord2.name) {
      index[chord2.name] = chord2;
    }
    index[chord2.setNum] = chord2;
    index[chord2.chroma] = chord2;
    chord2.aliases.forEach((alias) => addAlias(chord2, alias));
  }
  function addAlias(chord2, alias) {
    index[alias] = chord2;
  }
  function getQuality(intervals) {
    const has = (interval2) => intervals.indexOf(interval2) !== -1;
    return has("5A") ? "Augmented" : has("3M") ? "Major" : has("5d") ? "Diminished" : has("3m") ? "Minor" : "Unknown";
  }
  data_default.forEach(
    ([ivls, fullName, names22]) => add(ivls.split(" "), names22.split(" "), fullName)
  );
  dictionary.sort((a, b) => a.setNum - b.setNum);

  // node_modules/@tonaljs/chord-detect/dist/index.mjs
  var namedSet = (notes2) => {
    const pcToName = notes2.reduce((record, n) => {
      const chroma3 = note(n).chroma;
      if (chroma3 !== void 0) {
        record[chroma3] = record[chroma3] || note(n).name;
      }
      return record;
    }, {});
    return (chroma3) => pcToName[chroma3];
  };
  function detect(source, options = {}) {
    const notes2 = source.map((n) => note(n).pc).filter((x) => x);
    if (note.length === 0) {
      return [];
    }
    const found = findMatches(notes2, 1, options);
    return found.filter((chord2) => chord2.weight).sort((a, b) => b.weight - a.weight).map((chord2) => chord2.name);
  }
  var BITMASK = {
    // 3m 000100000000
    // 3M 000010000000
    anyThirds: 384,
    // 5P 000000010000
    perfectFifth: 16,
    // 5d 000000100000
    // 5A 000000001000
    nonPerfectFifths: 40,
    anySeventh: 3
  };
  var testChromaNumber = (bitmask) => (chromaNumber) => Boolean(chromaNumber & bitmask);
  var hasAnyThird = testChromaNumber(BITMASK.anyThirds);
  var hasPerfectFifth = testChromaNumber(BITMASK.perfectFifth);
  var hasAnySeventh = testChromaNumber(BITMASK.anySeventh);
  var hasNonPerfectFifth = testChromaNumber(BITMASK.nonPerfectFifths);
  function hasAnyThirdAndPerfectFifthAndAnySeventh(chordType) {
    const chromaNumber = parseInt(chordType.chroma, 2);
    return hasAnyThird(chromaNumber) && hasPerfectFifth(chromaNumber) && hasAnySeventh(chromaNumber);
  }
  function withPerfectFifth(chroma3) {
    const chromaNumber = parseInt(chroma3, 2);
    return hasNonPerfectFifth(chromaNumber) ? chroma3 : (chromaNumber | 16).toString(2);
  }
  function findMatches(notes2, weight, options) {
    const tonic = notes2[0];
    const tonicChroma = note(tonic).chroma;
    const noteName = namedSet(notes2);
    const allModes = modes(notes2, false);
    const found = [];
    allModes.forEach((mode, index4) => {
      const modeWithPerfectFifth = options.assumePerfectFifth && withPerfectFifth(mode);
      const chordTypes = all().filter((chordType) => {
        if (options.assumePerfectFifth && hasAnyThirdAndPerfectFifthAndAnySeventh(chordType)) {
          return chordType.chroma === modeWithPerfectFifth;
        }
        return chordType.chroma === mode;
      });
      chordTypes.forEach((chordType) => {
        const chordName = chordType.aliases[0];
        const baseNote = noteName(index4);
        const isInversion = index4 !== tonicChroma;
        if (isInversion) {
          found.push({
            weight: 0.5 * weight,
            name: `${baseNote}${chordName}/${tonic}`
          });
        } else {
          found.push({ weight: 1 * weight, name: `${baseNote}${chordName}` });
        }
      });
    });
    return found;
  }

  // node_modules/@tonaljs/interval/dist/index.mjs
  var IQ = "P m M m M P d P m M m M".split(" ");
  var add2 = combinator((a, b) => [a[0] + b[0], a[1] + b[1]]);
  var subtract = combinator((a, b) => [a[0] - b[0], a[1] - b[1]]);
  function combinator(fn) {
    return (a, b) => {
      const coordA = interval(a).coord;
      const coordB = interval(b).coord;
      if (coordA && coordB) {
        const coord = fn(coordA, coordB);
        return coordToInterval(coord).name;
      }
    };
  }

  // node_modules/@tonaljs/scale-type/dist/index.mjs
  var SCALES = [
    // Basic scales
    ["1P 2M 3M 5P 6M", "major pentatonic", "pentatonic"],
    ["1P 2M 3M 4P 5P 6M 7M", "major", "ionian"],
    ["1P 2M 3m 4P 5P 6m 7m", "minor", "aeolian"],
    // Jazz common scales
    ["1P 2M 3m 3M 5P 6M", "major blues"],
    ["1P 3m 4P 5d 5P 7m", "minor blues", "blues"],
    ["1P 2M 3m 4P 5P 6M 7M", "melodic minor"],
    ["1P 2M 3m 4P 5P 6m 7M", "harmonic minor"],
    ["1P 2M 3M 4P 5P 6M 7m 7M", "bebop"],
    ["1P 2M 3m 4P 5d 6m 6M 7M", "diminished", "whole-half diminished"],
    // Modes
    ["1P 2M 3m 4P 5P 6M 7m", "dorian"],
    ["1P 2M 3M 4A 5P 6M 7M", "lydian"],
    ["1P 2M 3M 4P 5P 6M 7m", "mixolydian", "dominant"],
    ["1P 2m 3m 4P 5P 6m 7m", "phrygian"],
    ["1P 2m 3m 4P 5d 6m 7m", "locrian"],
    // 5-note scales
    ["1P 3M 4P 5P 7M", "ionian pentatonic"],
    ["1P 3M 4P 5P 7m", "mixolydian pentatonic", "indian"],
    ["1P 2M 4P 5P 6M", "ritusen"],
    ["1P 2M 4P 5P 7m", "egyptian"],
    ["1P 3M 4P 5d 7m", "neopolitan major pentatonic"],
    ["1P 3m 4P 5P 6m", "vietnamese 1"],
    ["1P 2m 3m 5P 6m", "pelog"],
    ["1P 2m 4P 5P 6m", "kumoijoshi"],
    ["1P 2M 3m 5P 6m", "hirajoshi"],
    ["1P 2m 4P 5d 7m", "iwato"],
    ["1P 2m 4P 5P 7m", "in-sen"],
    ["1P 3M 4A 5P 7M", "lydian pentatonic", "chinese"],
    ["1P 3m 4P 6m 7m", "malkos raga"],
    ["1P 3m 4P 5d 7m", "locrian pentatonic", "minor seven flat five pentatonic"],
    ["1P 3m 4P 5P 7m", "minor pentatonic", "vietnamese 2"],
    ["1P 3m 4P 5P 6M", "minor six pentatonic"],
    ["1P 2M 3m 5P 6M", "flat three pentatonic", "kumoi"],
    ["1P 2M 3M 5P 6m", "flat six pentatonic"],
    ["1P 2m 3M 5P 6M", "scriabin"],
    ["1P 3M 5d 6m 7m", "whole tone pentatonic"],
    ["1P 3M 4A 5A 7M", "lydian #5P pentatonic"],
    ["1P 3M 4A 5P 7m", "lydian dominant pentatonic"],
    ["1P 3m 4P 5P 7M", "minor #7M pentatonic"],
    ["1P 3m 4d 5d 7m", "super locrian pentatonic"],
    // 6-note scales
    ["1P 2M 3m 4P 5P 7M", "minor hexatonic"],
    ["1P 2A 3M 5P 5A 7M", "augmented"],
    ["1P 2M 4P 5P 6M 7m", "piongio"],
    ["1P 2m 3M 4A 6M 7m", "prometheus neopolitan"],
    ["1P 2M 3M 4A 6M 7m", "prometheus"],
    ["1P 2m 3M 5d 6m 7m", "mystery #1"],
    ["1P 2m 3M 4P 5A 6M", "six tone symmetric"],
    ["1P 2M 3M 4A 5A 6A", "whole tone", "messiaen's mode #1"],
    ["1P 2m 4P 4A 5P 7M", "messiaen's mode #5"],
    // 7-note scales
    ["1P 2M 3M 4P 5d 6m 7m", "locrian major", "arabian"],
    ["1P 2m 3M 4A 5P 6m 7M", "double harmonic lydian"],
    [
      "1P 2m 2A 3M 4A 6m 7m",
      "altered",
      "super locrian",
      "diminished whole tone",
      "pomeroy"
    ],
    ["1P 2M 3m 4P 5d 6m 7m", "locrian #2", "half-diminished", "aeolian b5"],
    [
      "1P 2M 3M 4P 5P 6m 7m",
      "mixolydian b6",
      "melodic minor fifth mode",
      "hindu"
    ],
    ["1P 2M 3M 4A 5P 6M 7m", "lydian dominant", "lydian b7", "overtone"],
    ["1P 2M 3M 4A 5A 6M 7M", "lydian augmented"],
    [
      "1P 2m 3m 4P 5P 6M 7m",
      "dorian b2",
      "phrygian #6",
      "melodic minor second mode"
    ],
    [
      "1P 2m 3m 4d 5d 6m 7d",
      "ultralocrian",
      "superlocrian bb7",
      "superlocrian diminished"
    ],
    ["1P 2m 3m 4P 5d 6M 7m", "locrian 6", "locrian natural 6", "locrian sharp 6"],
    ["1P 2A 3M 4P 5P 5A 7M", "augmented heptatonic"],
    // Source https://en.wikipedia.org/wiki/Ukrainian_Dorian_scale
    [
      "1P 2M 3m 4A 5P 6M 7m",
      "dorian #4",
      "ukrainian dorian",
      "romanian minor",
      "altered dorian"
    ],
    ["1P 2M 3m 4A 5P 6M 7M", "lydian diminished"],
    ["1P 2M 3M 4A 5A 7m 7M", "leading whole tone"],
    ["1P 2M 3M 4A 5P 6m 7m", "lydian minor"],
    ["1P 2m 3M 4P 5P 6m 7m", "phrygian dominant", "spanish", "phrygian major"],
    ["1P 2m 3m 4P 5P 6m 7M", "balinese"],
    ["1P 2m 3m 4P 5P 6M 7M", "neopolitan major"],
    ["1P 2M 3M 4P 5P 6m 7M", "harmonic major"],
    ["1P 2m 3M 4P 5P 6m 7M", "double harmonic major", "gypsy"],
    ["1P 2M 3m 4A 5P 6m 7M", "hungarian minor"],
    ["1P 2A 3M 4A 5P 6M 7m", "hungarian major"],
    ["1P 2m 3M 4P 5d 6M 7m", "oriental"],
    ["1P 2m 3m 3M 4A 5P 7m", "flamenco"],
    ["1P 2m 3m 4A 5P 6m 7M", "todi raga"],
    ["1P 2m 3M 4P 5d 6m 7M", "persian"],
    ["1P 2m 3M 5d 6m 7m 7M", "enigmatic"],
    [
      "1P 2M 3M 4P 5A 6M 7M",
      "major augmented",
      "major #5",
      "ionian augmented",
      "ionian #5"
    ],
    ["1P 2A 3M 4A 5P 6M 7M", "lydian #9"],
    // 8-note scales
    ["1P 2m 2M 4P 4A 5P 6m 7M", "messiaen's mode #4"],
    ["1P 2m 3M 4P 4A 5P 6m 7M", "purvi raga"],
    ["1P 2m 3m 3M 4P 5P 6m 7m", "spanish heptatonic"],
    ["1P 2M 3m 3M 4P 5P 6M 7m", "bebop minor"],
    ["1P 2M 3M 4P 5P 5A 6M 7M", "bebop major"],
    ["1P 2m 3m 4P 5d 5P 6m 7m", "bebop locrian"],
    ["1P 2M 3m 4P 5P 6m 7m 7M", "minor bebop"],
    ["1P 2M 3M 4P 5d 5P 6M 7M", "ichikosucho"],
    ["1P 2M 3m 4P 5P 6m 6M 7M", "minor six diminished"],
    [
      "1P 2m 3m 3M 4A 5P 6M 7m",
      "half-whole diminished",
      "dominant diminished",
      "messiaen's mode #2"
    ],
    ["1P 3m 3M 4P 5P 6M 7m 7M", "kafi raga"],
    ["1P 2M 3M 4P 4A 5A 6A 7M", "messiaen's mode #6"],
    // 9-note scales
    ["1P 2M 3m 3M 4P 5d 5P 6M 7m", "composite blues"],
    ["1P 2M 3m 3M 4A 5P 6m 7m 7M", "messiaen's mode #3"],
    // 10-note scales
    ["1P 2m 2M 3m 4P 4A 5P 6m 6M 7M", "messiaen's mode #7"],
    // 12-note scales
    ["1P 2m 2M 3m 3M 4P 5d 5P 6m 6M 7m 7M", "chromatic"]
  ];
  var data_default2 = SCALES;
  var NoScaleType = {
    ...EmptyPcset,
    intervals: [],
    aliases: []
  };
  var dictionary2 = [];
  var index2 = {};
  function get3(type) {
    return index2[type] || NoScaleType;
  }
  function all2() {
    return dictionary2.slice();
  }
  function add3(intervals, name2, aliases = []) {
    const scale = { ...get(intervals), name: name2, intervals, aliases };
    dictionary2.push(scale);
    index2[scale.name] = scale;
    index2[scale.setNum] = scale;
    index2[scale.chroma] = scale;
    scale.aliases.forEach((alias) => addAlias2(scale, alias));
    return scale;
  }
  function addAlias2(scale, alias) {
    index2[alias] = scale;
  }
  data_default2.forEach(
    ([ivls, name2, ...aliases]) => add3(ivls.split(" "), name2, aliases)
  );

  // node_modules/@tonaljs/chord/dist/index.mjs
  var NoChord = {
    empty: true,
    name: "",
    symbol: "",
    root: "",
    bass: "",
    rootDegree: 0,
    type: "",
    tonic: null,
    setNum: NaN,
    quality: "Unknown",
    chroma: "",
    normalized: "",
    aliases: [],
    notes: [],
    intervals: []
  };
  function tokenize(name2) {
    const [letter, acc, oct, type] = tokenizeNote(name2);
    if (letter === "") {
      return tokenizeBass("", name2);
    } else if (letter === "A" && type === "ug") {
      return tokenizeBass("", "aug");
    } else {
      return tokenizeBass(letter + acc, oct + type);
    }
  }
  function tokenizeBass(note2, chord2) {
    const split = chord2.split("/");
    if (split.length === 1) {
      return [note2, split[0], ""];
    }
    const [letter, acc, oct, type] = tokenizeNote(split[1]);
    if (letter !== "" && oct === "" && type === "") {
      return [note2, split[0], letter + acc];
    } else {
      return [note2, chord2, ""];
    }
  }
  function get4(src) {
    if (Array.isArray(src)) {
      return getChord(src[1] || "", src[0], src[2]);
    } else if (src === "") {
      return NoChord;
    } else {
      const [tonic, type, bass] = tokenize(src);
      const chord2 = getChord(type, tonic, bass);
      return chord2.empty ? getChord(src) : chord2;
    }
  }
  function getChord(typeName, optionalTonic, optionalBass) {
    const type = get2(typeName);
    const tonic = note(optionalTonic || "");
    const bass = note(optionalBass || "");
    if (type.empty || optionalTonic && tonic.empty || optionalBass && bass.empty) {
      return NoChord;
    }
    const bassInterval = distance(tonic.pc, bass.pc);
    const bassIndex = type.intervals.indexOf(bassInterval);
    const hasRoot = bassIndex >= 0;
    const root = hasRoot ? bass : note("");
    const rootDegree = bassIndex === -1 ? NaN : bassIndex + 1;
    const hasBass = bass.pc && bass.pc !== tonic.pc;
    const intervals = Array.from(type.intervals);
    if (hasRoot) {
      for (let i = 1; i < rootDegree; i++) {
        const num = intervals[0][0];
        const quality = intervals[0][1];
        const newNum = parseInt(num, 10) + 7;
        intervals.push(`${newNum}${quality}`);
        intervals.shift();
      }
    } else if (hasBass) {
      const ivl = subtract(distance(tonic.pc, bass.pc), "8P");
      if (ivl) intervals.unshift(ivl);
    }
    const notes2 = tonic.empty ? [] : intervals.map((i) => transpose(tonic.pc, i));
    typeName = type.aliases.indexOf(typeName) !== -1 ? typeName : type.aliases[0];
    const symbol = `${tonic.empty ? "" : tonic.pc}${typeName}${hasRoot && rootDegree > 1 ? "/" + root.pc : hasBass ? "/" + bass.pc : ""}`;
    const name2 = `${optionalTonic ? tonic.pc + " " : ""}${type.name}${hasRoot && rootDegree > 1 ? " over " + root.pc : hasBass ? " over " + bass.pc : ""}`;
    return {
      ...type,
      name: name2,
      symbol,
      tonic: tonic.pc,
      type: type.name,
      root: root.pc,
      bass: hasBass ? bass.pc : "",
      intervals,
      rootDegree,
      notes: notes2
    };
  }
  var chord = get4;
  function transpose2(chordName, interval2) {
    const [tonic, type, bass] = tokenize(chordName);
    if (!tonic) {
      return chordName;
    }
    const tr2 = transpose(bass, interval2);
    const slash = tr2 ? "/" + tr2 : "";
    return transpose(tonic, interval2) + type + slash;
  }
  function chordScales(name2) {
    const s = get4(name2);
    const isChordIncluded = isSupersetOf(s.chroma);
    return all2().filter((scale) => isChordIncluded(scale.chroma)).map((scale) => scale.name);
  }
  function extended(chordName) {
    const s = get4(chordName);
    const isSuperset = isSupersetOf(s.chroma);
    return all().filter((chord2) => isSuperset(chord2.chroma)).map((chord2) => s.tonic + chord2.aliases[0]);
  }
  function reduced(chordName) {
    const s = get4(chordName);
    const isSubset = isSubsetOf(s.chroma);
    return all().filter((chord2) => isSubset(chord2.chroma)).map((chord2) => s.tonic + chord2.aliases[0]);
  }
  function notes(chordName, tonic) {
    const chord2 = get4(chordName);
    const note2 = tonic || chord2.tonic;
    if (!note2 || chord2.empty) return [];
    return chord2.intervals.map((ivl) => transpose(note2, ivl));
  }
  function degrees(chordName, tonic) {
    const chord2 = get4(chordName);
    const note2 = tonic || chord2.tonic;
    const transpose22 = tonicIntervalsTransposer(chord2.intervals, note2);
    return (degree) => degree ? transpose22(degree > 0 ? degree - 1 : degree) : "";
  }
  function steps(chordName, tonic) {
    const chord2 = get4(chordName);
    const note2 = tonic || chord2.tonic;
    return tonicIntervalsTransposer(chord2.intervals, note2);
  }
  var chord_default = {
    getChord,
    get: get4,
    detect,
    chordScales,
    extended,
    reduced,
    tokenize,
    transpose: transpose2,
    degrees,
    steps,
    notes,
    chord
  };

  // node_modules/@tonaljs/duration-value/dist/index.mjs
  var DATA = [
    [
      0.125,
      "dl",
      ["large", "duplex longa", "maxima", "octuple", "octuple whole"]
    ],
    [0.25, "l", ["long", "longa"]],
    [0.5, "d", ["double whole", "double", "breve"]],
    [1, "w", ["whole", "semibreve"]],
    [2, "h", ["half", "minim"]],
    [4, "q", ["quarter", "crotchet"]],
    [8, "e", ["eighth", "quaver"]],
    [16, "s", ["sixteenth", "semiquaver"]],
    [32, "t", ["thirty-second", "demisemiquaver"]],
    [64, "sf", ["sixty-fourth", "hemidemisemiquaver"]],
    [128, "h", ["hundred twenty-eighth"]],
    [256, "th", ["two hundred fifty-sixth"]]
  ];
  var data_default3 = DATA;
  var VALUES = [];
  data_default3.forEach(
    ([denominator, shorthand, names22]) => add4(denominator, shorthand, names22)
  );
  function add4(denominator, shorthand, names22) {
    VALUES.push({
      empty: false,
      dots: "",
      name: "",
      value: 1 / denominator,
      fraction: denominator < 1 ? [1 / denominator, 1] : [1, denominator],
      shorthand,
      names: names22
    });
  }

  // node_modules/@tonaljs/midi/dist/index.mjs
  var L2 = Math.log(2);
  var L440 = Math.log(440);
  function freqToMidi(freq2) {
    const v = 12 * (Math.log(freq2) - L440) / L2 + 69;
    return Math.round(v * 100) / 100;
  }
  var SHARPS = "C C# D D# E F F# G G# A A# B".split(" ");
  var FLATS = "C Db D Eb E F Gb G Ab A Bb B".split(" ");
  function midiToNoteName(midi2, options = {}) {
    if (isNaN(midi2) || midi2 === -Infinity || midi2 === Infinity) return "";
    midi2 = Math.round(midi2);
    const pcs = options.sharps === true ? SHARPS : FLATS;
    const pc = pcs[midi2 % 12];
    if (options.pitchClass) {
      return pc;
    }
    const o = Math.floor(midi2 / 12) - 1;
    return pc + o;
  }

  // node_modules/@tonaljs/note/dist/index.mjs
  var NAMES = ["C", "D", "E", "F", "G", "A", "B"];
  var toName = (n) => n.name;
  var onlyNotes = (array) => array.map(note).filter((n) => !n.empty);
  function names(array) {
    if (array === void 0) {
      return NAMES.slice();
    } else if (!Array.isArray(array)) {
      return [];
    } else {
      return onlyNotes(array).map(toName);
    }
  }
  var get5 = note;
  var name = (note2) => get5(note2).name;
  var pitchClass = (note2) => get5(note2).pc;
  var accidentals = (note2) => get5(note2).acc;
  var octave = (note2) => get5(note2).oct;
  var midi = (note2) => get5(note2).midi;
  var freq = (note2) => get5(note2).freq;
  var chroma = (note2) => get5(note2).chroma;
  function fromMidi(midi2) {
    return midiToNoteName(midi2);
  }
  function fromFreq(freq2) {
    return midiToNoteName(freqToMidi(freq2));
  }
  function fromFreqSharps(freq2) {
    return midiToNoteName(freqToMidi(freq2), { sharps: true });
  }
  function fromMidiSharps(midi2) {
    return midiToNoteName(midi2, { sharps: true });
  }
  var distance2 = distance;
  var transpose3 = transpose;
  var tr = transpose;
  var transposeBy = (interval2) => (note2) => transpose3(note2, interval2);
  var trBy = transposeBy;
  var transposeFrom = (note2) => (interval2) => transpose3(note2, interval2);
  var trFrom = transposeFrom;
  function transposeFifths(noteName, fifths) {
    return transpose3(noteName, [fifths, 0]);
  }
  var trFifths = transposeFifths;
  function transposeOctaves(noteName, octaves) {
    return transpose3(noteName, [0, octaves]);
  }
  var ascending = (a, b) => a.height - b.height;
  var descending = (a, b) => b.height - a.height;
  function sortedNames(notes2, comparator) {
    comparator = comparator || ascending;
    return onlyNotes(notes2).sort(comparator).map(toName);
  }
  function sortedUniqNames(notes2) {
    return sortedNames(notes2, ascending).filter(
      (n, i, a) => i === 0 || n !== a[i - 1]
    );
  }
  var simplify = (noteName) => {
    const note2 = get5(noteName);
    if (note2.empty) {
      return "";
    }
    return midiToNoteName(note2.midi || note2.chroma, {
      sharps: note2.alt > 0,
      pitchClass: note2.midi === null
    });
  };
  function enharmonic(noteName, destName) {
    const src = get5(noteName);
    if (src.empty) {
      return "";
    }
    const dest = get5(
      destName || midiToNoteName(src.midi || src.chroma, {
        sharps: src.alt < 0,
        pitchClass: true
      })
    );
    if (dest.empty || dest.chroma !== src.chroma) {
      return "";
    }
    if (src.oct === void 0) {
      return dest.pc;
    }
    const srcChroma = src.chroma - src.alt;
    const destChroma = dest.chroma - dest.alt;
    const destOctOffset = srcChroma > 11 || destChroma < 0 ? -1 : srcChroma < 0 || destChroma > 11 ? 1 : 0;
    const destOct = src.oct + destOctOffset;
    return dest.pc + destOct;
  }
  var index_default = {
    names,
    get: get5,
    name,
    pitchClass,
    accidentals,
    octave,
    midi,
    ascending,
    descending,
    distance: distance2,
    sortedNames,
    sortedUniqNames,
    fromMidi,
    fromMidiSharps,
    freq,
    fromFreq,
    fromFreqSharps,
    chroma,
    transpose: transpose3,
    tr,
    transposeBy,
    trBy,
    transposeFrom,
    trFrom,
    transposeFifths,
    transposeOctaves,
    trFifths,
    simplify,
    enharmonic
  };

  // node_modules/@tonaljs/roman-numeral/dist/index.mjs
  var NoRomanNumeral = { empty: true, name: "", chordType: "" };
  var cache4 = {};
  function get6(src) {
    return typeof src === "string" ? cache4[src] || (cache4[src] = parse3(src)) : typeof src === "number" ? get6(NAMES2[src] || "") : isPitch(src) ? fromPitch(src) : isNamedPitch(src) ? get6(src.name) : NoRomanNumeral;
  }
  function fromPitch(pitch2) {
    return get6(altToAcc(pitch2.alt) + NAMES2[pitch2.step]);
  }
  var REGEX4 = /^(#{1,}|b{1,}|x{1,}|)(IV|I{1,3}|VI{0,2}|iv|i{1,3}|vi{0,2})([^IViv]*)$/;
  function tokenize2(str) {
    return REGEX4.exec(str) || ["", "", "", ""];
  }
  var ROMANS = "I II III IV V VI VII";
  var NAMES2 = ROMANS.split(" ");
  var NAMES_MINOR = ROMANS.toLowerCase().split(" ");
  function parse3(src) {
    const [name2, acc, roman, chordType] = tokenize2(src);
    if (!roman) {
      return NoRomanNumeral;
    }
    const upperRoman = roman.toUpperCase();
    const step = NAMES2.indexOf(upperRoman);
    const alt = accToAlt(acc);
    const dir = 1;
    return {
      empty: false,
      name: name2,
      roman,
      interval: interval({ step, alt, dir }).name,
      acc,
      chordType,
      alt,
      step,
      major: roman === upperRoman,
      oct: 0,
      dir
    };
  }

  // node_modules/@tonaljs/key/dist/index.mjs
  var Empty = Object.freeze([]);
  var NoKey = {
    type: "major",
    tonic: "",
    alteration: 0,
    keySignature: ""
  };
  var NoKeyScale = {
    tonic: "",
    grades: Empty,
    intervals: Empty,
    scale: Empty,
    triads: Empty,
    chords: Empty,
    chordsHarmonicFunction: Empty,
    chordScales: Empty,
    secondaryDominants: Empty,
    secondaryDominantSupertonics: Empty,
    substituteDominantsMinorRelative: Empty,
    substituteDominants: Empty,
    substituteDominantSupertonics: Empty,
    secondaryDominantsMinorRelative: Empty
  };
  var NoMajorKey = {
    ...NoKey,
    ...NoKeyScale,
    type: "major",
    minorRelative: "",
    scale: Empty,
    substituteDominants: Empty,
    secondaryDominantSupertonics: Empty,
    substituteDominantsMinorRelative: Empty
  };
  var NoMinorKey = {
    ...NoKey,
    type: "minor",
    relativeMajor: "",
    natural: NoKeyScale,
    harmonic: NoKeyScale,
    melodic: NoKeyScale
  };
  var mapScaleToType = (scale, list, sep = "") => list.map((type, i) => `${scale[i]}${sep}${type}`);
  function keyScale(grades, triads3, chordTypes, harmonicFunctions, chordScales2) {
    return (tonic) => {
      const intervals = grades.map((gr) => get6(gr).interval || "");
      const scale = intervals.map((interval2) => transpose3(tonic, interval2));
      const chords2 = mapScaleToType(scale, chordTypes);
      const secondaryDominants = scale.map((note2) => transpose3(note2, "5P")).map(
        (note2) => (
          // A secondary dominant is a V chord which:
          // 1. is not diatonic to the key,
          // 2. it must have a diatonic root.
          scale.includes(note2) && !chords2.includes(note2 + "7") ? note2 + "7" : ""
        )
      );
      const secondaryDominantSupertonics = supertonics(
        secondaryDominants,
        triads3
      );
      const substituteDominants = secondaryDominants.map((chord2) => {
        if (!chord2) return "";
        const domRoot = chord2.slice(0, -1);
        const subRoot = transpose3(domRoot, "5d");
        return subRoot + "7";
      });
      const substituteDominantSupertonics = supertonics(
        substituteDominants,
        triads3
      );
      return {
        tonic,
        grades,
        intervals,
        scale,
        triads: mapScaleToType(scale, triads3),
        chords: chords2,
        chordsHarmonicFunction: harmonicFunctions.slice(),
        chordScales: mapScaleToType(scale, chordScales2, " "),
        secondaryDominants,
        secondaryDominantSupertonics,
        substituteDominants,
        substituteDominantSupertonics,
        // @deprecated use secondaryDominantsSupertonic
        secondaryDominantsMinorRelative: secondaryDominantSupertonics,
        // @deprecated use secondaryDominantsSupertonic
        substituteDominantsMinorRelative: substituteDominantSupertonics
      };
    };
  }
  var supertonics = (dominants, targetTriads) => {
    return dominants.map((chord2, index4) => {
      if (!chord2) return "";
      const domRoot = chord2.slice(0, -1);
      const minorRoot = transpose3(domRoot, "5P");
      const target = targetTriads[index4];
      const isMinor = target.endsWith("m");
      return isMinor ? minorRoot + "m7" : minorRoot + "m7b5";
    });
  };
  var MajorScale = keyScale(
    "I II III IV V VI VII".split(" "),
    " m m   m dim".split(" "),
    "maj7 m7 m7 maj7 7 m7 m7b5".split(" "),
    "T SD T SD D T D".split(" "),
    "major,dorian,phrygian,lydian,mixolydian,minor,locrian".split(",")
  );
  var NaturalScale = keyScale(
    "I II bIII IV V bVI bVII".split(" "),
    "m dim  m m  ".split(" "),
    "m7 m7b5 maj7 m7 m7 maj7 7".split(" "),
    "T SD T SD D SD SD".split(" "),
    "minor,locrian,major,dorian,phrygian,lydian,mixolydian".split(",")
  );
  var HarmonicScale = keyScale(
    "I II bIII IV V bVI VII".split(" "),
    "m dim aug m   dim".split(" "),
    "mMaj7 m7b5 +maj7 m7 7 maj7 o7".split(" "),
    "T SD T SD D SD D".split(" "),
    "harmonic minor,locrian 6,major augmented,lydian diminished,phrygian dominant,lydian #9,ultralocrian".split(
      ","
    )
  );
  var MelodicScale = keyScale(
    "I II bIII IV V VI VII".split(" "),
    "m m aug   dim dim".split(" "),
    "m6 m7 +maj7 7 7 m7b5 m7b5".split(" "),
    "T SD T SD D  ".split(" "),
    "melodic minor,dorian b2,lydian augmented,lydian dominant,mixolydian b6,locrian #2,altered".split(
      ","
    )
  );

  // node_modules/@tonaljs/mode/dist/index.mjs
  var MODES = [
    [0, 2773, 0, "ionian", "", "Maj7", "major"],
    [1, 2902, 2, "dorian", "m", "m7"],
    [2, 3418, 4, "phrygian", "m", "m7"],
    [3, 2741, -1, "lydian", "", "Maj7"],
    [4, 2774, 1, "mixolydian", "", "7"],
    [5, 2906, 3, "aeolian", "m", "m7", "minor"],
    [6, 3434, 5, "locrian", "dim", "m7b5"]
  ];
  var NoMode = {
    ...EmptyPcset,
    name: "",
    alt: 0,
    modeNum: NaN,
    triad: "",
    seventh: "",
    aliases: []
  };
  var modes2 = MODES.map(toMode);
  var index3 = {};
  modes2.forEach((mode2) => {
    index3[mode2.name] = mode2;
    mode2.aliases.forEach((alias) => {
      index3[alias] = mode2;
    });
  });
  function get7(name2) {
    return typeof name2 === "string" ? index3[name2.toLowerCase()] || NoMode : name2 && name2.name ? get7(name2.name) : NoMode;
  }
  function toMode(mode2) {
    const [modeNum, setNum, alt, name2, triad, seventh, alias] = mode2;
    const aliases = alias ? [alias] : [];
    const chroma3 = Number(setNum).toString(2);
    const intervals = get3(name2).intervals;
    return {
      empty: false,
      intervals,
      modeNum,
      chroma: chroma3,
      normalized: chroma3,
      name: name2,
      setNum,
      alt,
      triad,
      seventh,
      aliases
    };
  }
  function chords(chords2) {
    return (modeName, tonic) => {
      const mode2 = get7(modeName);
      if (mode2.empty) return [];
      const triads22 = rotate(mode2.modeNum, chords2);
      const tonics = mode2.intervals.map((i) => transpose(tonic, i));
      return triads22.map((triad, i) => tonics[i] + triad);
    };
  }
  var triads = chords(MODES.map((x) => x[4]));
  var seventhChords = chords(MODES.map((x) => x[5]));

  // node_modules/@tonaljs/voice-leading/dist/index.mjs
  var topNoteDiff = (voicings, lastVoicing) => {
    if (!lastVoicing || !lastVoicing.length) {
      return voicings[0];
    }
    const topNoteMidi = (voicing) => index_default.midi(voicing[voicing.length - 1]) || 0;
    const diff = (voicing) => Math.abs(topNoteMidi(lastVoicing) - topNoteMidi(voicing));
    return voicings.sort((a, b) => diff(a) - diff(b))[0];
  };
  var index_default2 = {
    topNoteDiff
  };

  // node_modules/@tonaljs/voicing-dictionary/dist/index.mjs
  var triads2 = {
    M: ["1P 3M 5P", "3M 5P 8P", "5P 8P 10M"],
    m: ["1P 3m 5P", "3m 5P 8P", "5P 8P 10m"],
    o: ["1P 3m 5d", "3m 5d 8P", "5d 8P 10m"],
    aug: ["1P 3m 5A", "3m 5A 8P", "5A 8P 10m"]
  };
  var lefthand = {
    m7: ["3m 5P 7m 9M", "7m 9M 10m 12P"],
    "7": ["3M 6M 7m 9M", "7m 9M 10M 13M"],
    "^7": ["3M 5P 7M 9M", "7M 9M 10M 12P"],
    "69": ["3M 5P 6A 9M"],
    m7b5: ["3m 5d 7m 8P", "7m 8P 10m 12d"],
    "7b9": ["3M 6m 7m 9m", "7m 9m 10M 13m"],
    // b9 / b13
    "7b13": ["3M 6m 7m 9m", "7m 9m 10M 13m"],
    // b9 / b13
    o7: ["1P 3m 5d 6M", "5d 6M 8P 10m"],
    "7#11": ["7m 9M 11A 13A"],
    "7#9": ["3M 7m 9A"],
    mM7: ["3m 5P 7M 9M", "7M 9M 10m 12P"],
    m6: ["3m 5P 6M 9M", "6M 9M 10m 12P"]
  };
  var all3 = {
    M: ["1P 3M 5P", "3M 5P 8P", "5P 8P 10M"],
    m: ["1P 3m 5P", "3m 5P 8P", "5P 8P 10m"],
    o: ["1P 3m 5d", "3m 5d 8P", "5d 8P 10m"],
    aug: ["1P 3m 5A", "3m 5A 8P", "5A 8P 10m"],
    m7: ["3m 5P 7m 9M", "7m 9M 10m 12P"],
    "7": ["3M 6M 7m 9M", "7m 9M 10M 13M"],
    "^7": ["3M 5P 7M 9M", "7M 9M 10M 12P"],
    "69": ["3M 5P 6A 9M"],
    m7b5: ["3m 5d 7m 8P", "7m 8P 10m 12d"],
    "7b9": ["3M 6m 7m 9m", "7m 9m 10M 13m"],
    // b9 / b13
    "7b13": ["3M 6m 7m 9m", "7m 9m 10M 13m"],
    // b9 / b13
    o7: ["1P 3m 5d 6M", "5d 6M 8P 10m"],
    "7#11": ["7m 9M 11A 13A"],
    "7#9": ["3M 7m 9A"],
    mM7: ["3m 5P 7M 9M", "7M 9M 10m 12P"],
    m6: ["3m 5P 6M 9M", "6M 9M 10m 12P"]
  };
  var defaultDictionary = lefthand;
  function lookup(symbol, dictionary3 = defaultDictionary) {
    if (dictionary3[symbol]) {
      return dictionary3[symbol];
    }
    const { aliases } = chord_default.get("C" + symbol);
    const match = Object.keys(dictionary3).find((_symbol) => aliases.includes(_symbol)) || "";
    if (match !== void 0) {
      return dictionary3[match];
    }
    return void 0;
  }
  var index_default3 = {
    lookup,
    lefthand,
    triads: triads2,
    all: all3,
    defaultDictionary
  };

  // node_modules/@tonaljs/voicing/dist/index.mjs
  var defaultDictionary2 = index_default3.all;
  var defaultVoiceLeading = index_default2.topNoteDiff;

  // node_modules/@tonaljs/core/dist/index.mjs
  function deprecate(original, alternative, fn) {
    return function(...args) {
      console.warn(`${original} is deprecated. Use ${alternative}.`);
      return fn.apply(this, args);
    };
  }
  var isNamed = deprecate("isNamed", "isNamedPitch", isNamedPitch);

  // src/chordDetection.js
  function noteToIndex(noteName) {
    const base = noteName.charAt(0).toUpperCase();
    const accidental = noteName.slice(1);
    const baseIndex = { "C": 0, "D": 2, "E": 4, "F": 5, "G": 7, "A": 9, "B": 11 }[base];
    let offset = 0;
    if (accidental.includes("#")) offset = accidental.split("#").length - 1;
    if (accidental.includes("b")) offset = -(accidental.split("b").length - 1);
    return (baseIndex + offset + 12) % 12;
  }
  function formatNote(noteName) {
    const index4 = noteToIndex(noteName);
    const mode = state.useFlats ? "flats" : "sharps";
    return NOTE_DISPLAY[mode][index4];
  }
  function detectAndDisplayChord() {
    const chordElements = getChordElements();
    const activeNotes = [];
    for (let i = 0; i < 12; i++) {
      if (state.noteArray[i] !== 0) {
        activeNotes.push(NOTE_NAMES[i]);
      }
    }
    for (let i = 0; i < 12; i++) {
      if (state.noteArray[i] !== 0) {
        circles[i].setAttribute("class", "partial");
      } else {
        circles[i].setAttribute("class", "off");
      }
    }
    if (chordElements.root) chordElements.root.textContent = "";
    if (chordElements.quality) chordElements.quality.textContent = "";
    if (chordElements.inversion) chordElements.inversion.textContent = "";
    if (activeNotes.length > 0 && activeNotes.length < 3) {
      if (chordElements.quality) {
        chordElements.quality.textContent = "(add more notes)";
      }
    }
    if (activeNotes.length >= 3) {
      const detected = dist_exports.detect(activeNotes);
      if (detected.length > 0) {
        const chordName = detected[0];
        const chordInfo = dist_exports.get(chordName);
        if (chordInfo && chordInfo.tonic) {
          const rootIndex = noteToIndex(chordInfo.tonic);
          if (state.noteArray[rootIndex] !== 0) {
            circles[rootIndex].setAttribute("class", "on");
          }
          if (chordElements.root && chordElements.quality) {
            chordElements.root.textContent = formatNote(chordInfo.tonic);
            const quality = chordInfo.type || "";
            chordElements.quality.textContent = quality;
          }
          if (chordElements.inversion && chordName.includes("/")) {
            const bassNote = chordName.split("/")[1];
            const bassIndex = noteToIndex(bassNote);
            const rootIdx = noteToIndex(chordInfo.tonic);
            const interval2 = (bassIndex - rootIdx + 12) % 12;
            let inversionText = "";
            if (interval2 === 3 || interval2 === 4) {
              inversionText = "1st inversion (3rd in bass)";
            } else if (interval2 === 7) {
              inversionText = "2nd inversion (5th in bass)";
            } else if (interval2 === 10 || interval2 === 11) {
              inversionText = "3rd inversion (7th in bass)";
            } else {
              inversionText = formatNote(bassNote) + " in bass";
            }
            chordElements.inversion.textContent = inversionText;
          }
        }
      }
    }
  }

  // src/midiHandler.js
  function updateNote(noteState, e) {
    const note2 = e.note.number % 12;
    if (noteState === "on") {
      state.noteArray[note2]++;
      circles[note2].setAttribute("data-n", state.noteArray[note2]);
      if (state.noteArray[note2] === 1) {
        circles[note2].setAttribute("class", "partial");
      }
    } else {
      state.noteArray[note2]--;
      if (state.noteArray[note2] === 0) {
        circles[note2].setAttribute("class", "off");
      }
      circles[note2].setAttribute("data-n", state.noteArray[note2]);
    }
    clearTimeout(state.chordTimeout);
    state.chordTimeout = setTimeout(detectAndDisplayChord, 40);
  }
  function initMidi() {
    console.log("[JSMidiCircle] Initializing WebMidi...");
    import_webmidi.default.enable(function(err) {
      if (err) {
        console.error("[JSMidiCircle] WebMidi.enable error:", err);
        showStatus("WebMidi error: " + err.message, true);
        return;
      }
      console.log("[JSMidiCircle] WebMidi enabled");
      console.log("[JSMidiCircle] Inputs:", import_webmidi.default.inputs.length);
      import_webmidi.default.inputs.forEach((input2, i) => {
        console.log(`[JSMidiCircle] Input ${i}: ${input2.name} (${input2.manufacturer})`);
      });
      if (import_webmidi.default.inputs.length === 0) {
        showStatus("No MIDI input detected. Connect a device and refresh.", true);
        return;
      }
      const input = import_webmidi.default.inputs[0];
      input.addListener("noteon", "all", (e) => updateNote("on", e));
      input.addListener("noteoff", "all", (e) => updateNote("off", e));
      showStatus("Connected: " + (input.name || "MIDI Device"));
    });
  }

  // src/main.js
  initDom();
  initLayout();
  initAccidentals();
  initMidi();
})();
