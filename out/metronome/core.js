// Compiled by ClojureScript 0.0-2030
goog.provide('metronome.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.forms');
metronome.core.sounds = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
metronome.core.bpm = goog.dom.getElement("bpm");
