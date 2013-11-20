// Compiled by ClojureScript 0.0-2030
goog.provide('metronome.core');
goog.require('cljs.core');
goog.require('createjs.Sound');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.forms');
metronome.core.assetsPath = "assets/";
metronome.core.manifest = cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"src","src",1014018390),"Click1.ogg|Click1.mp3",new cljs.core.Keyword(null,"id","id",1013907597),1], true),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"src","src",1014018390),"Click2.ogg|Click2.mp3",new cljs.core.Keyword(null,"id","id",1013907597),2], true)], true);
createjs.Sound.registerManifest(metronome.core.manifest,metronome.core.assetsPath);
metronome.core.sounds = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
metronome.core.bpm = goog.dom.getElement("bpm");
metronome.core.not_interrupt = createjs.Sound.INTERRUPT_NONE;
metronome.core.soundLoop = (function soundLoop(btn){var bpm = parseInt(goog.dom.forms.getValue(btn));var id = btn.id;return console.log("bpm",bpm,"id",id);
});
goog.exportSymbol('metronome.core.soundLoop', metronome.core.soundLoop);
